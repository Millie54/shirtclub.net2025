"use strict";

// var api_key = 'key-f51a8d633c5105190307b9c6202963af';
// var domain = 'email.shirtclub.net';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var Request = require('request-promise');
var mkdirp = require('mkdirp');
var exec = require('child_process').exec,
    child;
var fs = require('fs');

const env = process.argv[2];

var apiEndpoint = env === "dev" ? "http://54.208.37.92/api/" : 'https://shirtclub.net/api/';

var FileUpload = require('express-fileupload');

var makeid = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 12; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function sendEmail(body, recipient, subject, cb){
	var curlCMD = "curl -s --user 'api:key-f51a8d633c5105190307b9c6202963af' \
    https://api.mailgun.net/v3/email.shirtclub.net/messages \
    -F from='email.shirtclub.net <email@shirtclub.net>' \
    -F to=" + recipient + " \
    -F subject='" + subject + "' \
    --form-string html='" + body + "'";

	exec(curlCMD, function (error, stdout, stderr) {
		if (error !== null) {
			return cb({ success: 0 });
		}
		else{
			return cb({ success: 1 });
		}
	});
}


//var bcrypt = require('bcrypt');

var User = {};
User.member_id = '';


module.exports = function(app, sql, passport, basicOuth){

	function getUser(memberID){
		const promise = new Promise(function(resolve, reject){
			sql.query('SELECT * FROM `user` WHERE `member_id` = ?', memberID, function(err, results){
				if(err){
					return reject(err);
				}
				resolve(results[0]);
			});
		});
		return promise;
	}

	function getTransaction(memberID, hash){
		const promise = new Promise(function(resolve, reject){
			sql.query('SELECT * FROM `trx` WHERE `member_id` = ? AND `hash` = ? ', [memberID, hash], function(err, results){
				if(err){
					return reject(err);
				}
				resolve(results[0]);
			});
		});
		return promise;
	}

	function putTransaction(trx, isFulfilled){
		const promise = new Promise(function(resolve, reject){
			sql.query('UPDATE `trx` SET `is_fulfilled` = ? WHERE `id` = ?', [isFulfilled, trx.id], function(err, results){
				if(err){
					return reject(err);
				}
				resolve(results[0]);
			});
		});
		return promise;
	}

	async function activateMembershipForOneYear(sql, memberID) {
		return new Promise((resolve, reject) => {
			const d = new Date();
			const newExpiration = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate()).toMysqlFormat();
			sql.query("UPDATE `user` SET `membership_status` = ? WHERE `member_id` = ?", [newExpiration, memberID], async function(err, results, fields){
				if (err) {
					reject(`failed to activate membership`);
				}
				const newUser = await getUser(memberID);
				const emailBody = `
					<html>
						<h3>Thank you for becoming a Shirt Club member.</h3>
						<h3>You have received a free one year membership</h3>
						<h3>It is time to start having Fun With Shirts!</h3>
						<div>Please do the following things:</div>
						<div>1. Download the Shirt Club app: <a href="https://apps.apple.com/us/app/shirtclub/id1451543103?ls=1" target="_blank">iOS</a> <a href="https://play.google.com/store/apps/details?id=com.shirtclubmobile&hl=en" target="_blank">Android</a></li></div>
						<div>2. Tell 2 friends about Shirt Club and ask the 2 friends to tell 2 friends, etc.</div>
						<div>3. Know the <a href="https://shirtclub.net/about#convention" target="_blank">"Shirt Club Convention"</a>.</div>
						<div>4. Like us on Facebook</div>
						<div>5. Show us your shirts on Instagram.</div>
						<div>6. Most Important: Have fun with your shirts!</div>
						<img alt="logo" width="150" height="150" src="https://shirtclub.net/images/logo.png" />
					</html>
				`;
				sendEmail(emailBody, newUser.email, "[ShirtClub.net] Order Confirmation", function(){
				});
				resolve();
			});
		});
	}

	app.use(FileUpload({
		useTempFiles : true,
		tempFileDir : './temp/',  // Use relative path
		limits: { fileSize: 50 * 1024 * 1024 }, // 100MB in bytes
	}));

	// Index
	app.get('/', function(req,res){
		res.render('index');
	});

	// UserRegistration
	app.get('/register', function(req, res){
		res.render('register');
	});

	// Insert Registration into DB
	app.post('/register', async function(req, res){

		var json = req.body;

		//Validate Password
		if(json.password.length < 6){
			res.json({ fail : 'Password Too Short'});
			return;
		}

		//Validate Unique userName and email
		var array = [];
		array[0] = json.email;
		sql.query('SELECT * FROM `user` WHERE BINARY `email` = ?', array, function(err, results){
			if (err){
				res.json( { fail : 'DB Connection Error' } ).status(401);
				return;
			}
			else if (results.length > 0){
				res.json( { fail : 'User Name or Email Registered Already' } ).status(401);
				return;
			}
			// Validation Complete
			// Insert to DB
			sql.query('INSERT INTO user SET ?', json , function(err, results){
				if (err){
					res.json({ fail : 'DB Connection Error0' }).status(401);
					return;
				}
				var thisId = results.insertId;
				var memberPrefix = "SC";
				if(json.zone === "USA"){
					memberPrefix = json.state;
				}
				else if(json.zone === "Canada"){
					memberPrefix = json.province;
				}
				else if(json.zone === "Great Britain"){
					memberPrefix = "GB";
				}
				else if(json.zone === "South America"){
					memberPrefix = "SA";
				}
				else if(json.zone === "Asia"){
					memberPrefix = "AS";
				}
				else if(json.zone === "Africa"){
					memberPrefix = "AF";
				}
				else if(json.zone === "Europe"){
					memberPrefix = "EU";
				}
				else if(json.zone === "Australia"){
					memberPrefix = "AU";
				}

				// finding the last inserted number so we can add a +1 to that number based on member's region prefix
				sql.query(`SELECT member_id FROM user WHERE member_id LIKE BINARY '${memberPrefix}%' ORDER BY id DESC LIMIT 1`, json , function(err, largestID){

					if (err){
						res.json({ fail : 'DB Connection Error0' }).status(401);
						return;
					}

					let baseIdx = 0;

					if(largestID.length > 0){
						baseIdx = parseInt(largestID[0].member_id.replace(memberPrefix, "")) + 1;
					}

					var updateReq = [];

					// Add member id to user record
					if(baseIdx < 100){
						updateReq[0] = memberPrefix + '00' + baseIdx.toString();
					}
					else if(baseIdx < 1000){
						updateReq[0] = memberPrefix + '0' + baseIdx.toString();
					}
					else{
						updateReq[0] = memberPrefix + baseIdx.toString();
					}

					updateReq[1] = thisId;

					sql.query('UPDATE `user` SET `member_id` = ? WHERE `id` = ?', updateReq, function(err, results){
						if(err){
							res.json({ fail : 'DB Connection Error2' }).status(401);
						}
						else{
							mkdirp( __dirname + '/public/client/' + updateReq[0] + '/pic', async function(err){
								if(err){
									res.json({ fail : 'Client Folder Creation Error' }).status(401);
								}
								else{
									await activateMembershipForOneYear(sql, updateReq[0]);
									return res.json({ success : 1, id : updateReq[0] }).status(200);
								}
							});
						}
					});
				});
			});
		});
	});

	// User Logout
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	// User Login
	app.post('/login', passport.authenticate('local', { failureRedirect: '/', failureFlash: false }), function(req, res) {
		if(req.body.fromRegistration === 'true'){
			res.json({ success : 'success' }).status(200);
		}
		else{
			res.redirect('/member');
		}
	});

	// Post Purchase Standard Message
	// TODO: webhook to confirm with Stripe
	app.get('/checkout/standard-message', ensureAuthenticated, async function(req, res){
		const memberID = req.query.member_id;
		const hash = req.query.hash;
		if(memberID != req.user.member_id){
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		}
		const user = await getUser(memberID);
		const trx = await getTransaction(memberID, hash).catch((e) => {
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		});
		if(!trx || trx.is_fulfilled){
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		}
		await putTransaction(trx, 1);
		res.render('purchaseStandardMessageConfirmation', { user : user });
	});

	// Post Purchase Managed Message
	// TODO: webhook to confirm with Stripe
	app.get('/checkout/managed-message', ensureAuthenticated, async function(req, res){
		const memberID = req.query.member_id;
		const hash = req.query.hash;
		if(memberID != req.user.member_id){
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		}
		const trx = await getTransaction(memberID, hash).catch((e) => {
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		});
		if(!trx || trx.is_fulfilled){
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		}

		sql.query("SELECT `message_id` FROM `message` WHERE `id`=(SELECT max(id) FROM `message` WHERE `type` = 'managed') ", function(err, results, fields){
			if (err) {
				return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
			}
			let messageIDSuffix = '000';
			let newMessageID = "ABC000";
			if (results && results.length > 0){
				messageIDSuffix = parseInt(results[0].message_id.replace("ABC", "")) + 1;
				if(messageIDSuffix < 10){
					newMessageID = "ABC00" + messageIDSuffix;
				}
				else if(messageIDSuffix < 100){
					newMessageID = "ABC0" + messageIDSuffix;
				}
				else{
					newMessageID = "ABC" + messageIDSuffix;
				}
			}

			sql.query('INSERT INTO `message` SET ?', { message_id: newMessageID, member_id: memberID, type: "managed" }, async function(err, results){
				if(err){
					res.json({ fail : 'DB Connection Error2' }).status(401);
				}
				else{
					const user = await getUser(memberID);
					const emailBody = `
							<html>
								<h3>Thank you for purchasing Managed Message number: ${newMessageID}</h3>
								<h3>It is time to start having Fun With Shirts!</h3>
								<img alt="logo" width="150" height="150" src="https://shirtclub.net/images/logo.png" />
								<div><a href="https://shirtclub.net/contact">Contact Us</a></div>
							</html>
						`;
					sendEmail(emailBody, user.email, "[ShirtClub.net] Order Confirmation", function(){
					});
					await putTransaction(trx, 1);
					res.render('purchaseManagedMessageConfirmation', { user, message_id: newMessageID });
				}
			});
		});
	});

	// Post Purchase 1 Year Membership
	// TODO: webhook to confirm with Stripe
	app.get('/checkout/membership', ensureAuthenticated, function(req, res){
		const memberID = req.query.member_id;
		if(memberID != req.user.member_id){
			return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
		}
		const d = new Date();
		const newExpiration = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate()).toMysqlFormat();
		sql.query("UPDATE `user` SET `membership_status` = ? WHERE `member_id` = ?", [newExpiration, memberID], async function(err, results, fields){
			if (err) {
				return res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : req.user });
			}
			const newUser = await getUser(memberID);
			const emailBody = `
				<html>
					<h3>Thank you for becoming a Shirt Club member.</h3>
					<h3>It is time to start having Fun With Shirts!</h3>
					<div>Please do the following things:</div>
					<div>1. Download the Shirt Club app: <a href="https://apps.apple.com/us/app/shirtclub/id1451543103?ls=1" target="_blank">iOS</a> <a href="https://play.google.com/store/apps/details?id=com.shirtclubmobile&hl=en" target="_blank">Android</a></li></div>
					<div>2. Tell 2 friends about Shirt Club and ask the 2 friends to tell 2 friends, etc.</div>
					<div>3. Know the <a href="https://shirtclub.net/about#convention" target="_blank">"Shirt Club Convention"</a>.</div>
					<div>4. Like us on Facebook</div>
					<div>5. Show us your shirts on Instagram.</div>
					<div>6. Most Important: Have fun with your shirts!</div>
					<img alt="logo" width="150" height="150" src="https://shirtclub.net/images/logo.png" />
				</html>
			`;
			sendEmail(emailBody, newUser.email, "[ShirtClub.net] Order Confirmation", function(){
			});
			return res.render('member', { name : newUser.first_name, member_id : newUser.member_id, user : newUser });
		});
	});

	// GET Admin Page
	app.get('/admin', ensureAuthenticated, function(req, res){
		// Tosh
		if(req.user.admin == 1){
			sql.query('SELECT * from `user`', function(err, results){
				if(err){
					return res.status(500).json({ error: 'failed to retrieve list of users' });
				}
				res.render('admin', { user: req.user, users: results});
			});
		}
		else{
			res.status(500).json({ error: 'unauthorized' });
		}
	});

	// POST Admin -> IWT IBT vendor
	app.post('/vendor', function(req, res){

		var json = req.body;

		var query = sql.query('INSERT INTO vendor_message SET ?', json , function(err, results){

			if (err){
				res.json({ fail : 'DB Connection Error', err : err }).status(401);
			}
			else{
				res.json({ success : 'success' }).status(200);
			}

		});

	});


	/*
	 *
	 *  POST admin vendor message image
	 *
	 */
	 app.post('/vendor/image', ensureAuthenticated, function(req, res){
		const fileId = makeid();
		req.files.uploadfile.mv(__dirname + '/public/vendorImages/pic/' + fileId, function(err) {
			if (err){
				return res.status(500).send(err);
			}
			res.send({ file : {
				name : fileId
			}});
		});
	 });

	/*
	 *
	 *  Deleting admin vendor message image
	 *
	 */
	 app.delete('/vendor/image/:name', ensureAuthenticated, function(req, res){
		fs.unlink(__dirname + '/public/vendorImages/pic/' + req.params.name, (err) => {
			if(err){
				return res.status(500).send(err);
			}
			res.send({ file : {
				name : req.params.name
			}});
		})
	 });

	// POST standings/statistic
	app.post('/standings/statistic', function(req, res){

		var p1 = req.body.p1;
		var p2 = req.body.p2;

		var array = [];

		// Single Selection
		if (p2 === 0){

			array[0] = p1;
			array[1] = p1;

			var singleQuery = sql.query('SELECT * FROM `game` WHERE `game_mode` = "Single" AND ( BINARY `p1` = ? OR BINARY `p2` = ? )', array, function(err, singleResults, fields){

				if (err){
					console.log(err);
					res.json({ success : 0 });
				}
				else{

					array[2] = p1;
					array[3] = p1;
					array[4] = p1;
					array[5] = p1;
					array[6] = p1;
					array[7] = p1;

					var horseQuery = sql.query('SELECT * FROM `game` WHERE `game_type` = "HorseCollar" AND ( BINARY `p1` = ? OR BINARY `p2` = ? OR BINARY `p3` = ? OR BINARY `p4` = ? OR BINARY `p5` = ? OR BINARY `p6` = ? OR BINARY `p7` = ? OR BINARY `p8` = ?)', array, function(err, horseResults, fields){
						if(err){
							console.log(err);
							res.json({ success : 0 });
						}
						else{
							res.json({ success : 1 , singleResults : singleResults, horseResults : horseResults });
						}
					});
				}
			});

		}
		// Team Selection
		else{

			array[0] = p1;
			array[1] = p1;
			array[2] = p1;
			array[3] = p1;
			array[4] = p1;
			array[5] = p1;
			array[6] = p1;
			array[7] = p1;

			array[8] = p2;
			array[9] = p2;
			array[10] = p2;
			array[11] = p2;
			array[12] = p2;
			array[13] = p2;
			array[14] = p2;
			array[15] = p2;

			var singleQuery = sql.query('SELECT * FROM `game` WHERE `game_mode` = "Multi" AND ( BINARY `p1` = ? OR BINARY `p2` = ? OR BINARY `p3` = ? OR BINARY `p4` = ? OR BINARY `p5` = ? OR BINARY `p6` = ? OR BINARY `p7` = ? OR BINARY `p8` = ?) AND ( BINARY `p1` = ? OR BINARY `p2` = ? OR BINARY `p3` = ? OR BINARY `p4` = ? OR BINARY `p5` = ? OR BINARY `p6` = ? OR BINARY `p7` = ? OR BINARY `p8` = ?)', array, function(err, results, fields){

				if (err){
					console.log(err);
					res.json({ success : 0 });
				}
				else{
					for(var i = 0; i< results.length; i++){

						var thisGame = results[i];
						var player1Number;
						var player2Number;

						for(var j = 1; j<= 8; j++){
							if(thisGame['p'+j] === p1){
								player1Number = j;
							}
							if(thisGame['p'+j] === p2){
								player2Number = j;
							}
						}

						// If they are not in the same team
						if(player1Number <= 4 && player2Number >= 5){
							results.splice(i, 1);
							i--;
						}
						else{
							thisGame.player1Number = player1Number;
							thisGame.player2Number = player2Number;
						}
					}
					res.json({ success : 1 , multiResults : results });
				}
			});
		}

	});

	app.post('/user/group', function(req, res){

		var users = req.body.users;

		var q = 'SELECT `user_name` FROM `user` WHERE ';

		for(var i = 0; i < users.length; i++){
			q += 'BINARY `user_name` = ? '
			if(i !== users.length-1){
				q += 'OR ';
			}
		}

		var query = sql.query(q, users, function(err, results){
				if (err){
					res.json({ fail : err }).status(401);
				}
				else{
					if( results.length < users.length ){
						res.json({ success : 0 }).status(200);
					}
					else{
						res.json({ success : 1 }).status(200);
					}

				}
		});

	});


	app.post('/sponsor', function(req, res){

		var user = req.user.user_name;
		var beer = req.body.beer;
		var liquor = req.body.liquor;
		var wine = req.body.wine;
		var soft_drink = req.body.soft_drink;
		var hotel = req.body.hotel;
		var airline = req.body.airline;

		var array = [
			beer,
			liquor,
			wine,
			soft_drink,
			hotel,
			airline,
			user
		];

		var query = sql.query('UPDATE `user` SET `beer` = ?, `liquor` = ?, `wine` = ?, `soft_drink` = ?, `hotel` = ?, `airline` = ? WHERE `user_name` = ?', array, function(err, results){
			if(err){
				res.json({ success : 0, fail : err }).status(401);
			}
			else{
				res.json({ success : 1 }).status(200);
			}
		});

	});

	app.post('/setting', function(req, res){

		String.prototype.replaceAt = function(index, character) {
			return this.substr(0, index) + character + this.substr(index + character.length);
		}

		var user_name = req.user.user_name;
		var email =	req.body.email;
		var street = req.body.street;
		var city = req.body.city;
		var province = req.body.province;
		var country = req.body.country;
		var zip = req.body.zip;
		var phone =	req.body.phone;
		var phone_type = req.body.phone_type;
		var password =	req.body.password;

		var q = '';
		var array = [];

		if(email != ''){
			q += '`email` = ?, ';
			array.push(email);
		}
		if(street != ''){
			q += '`street` = ?, ';
			array.push(street);
		}
		if(province != ''){
			q += '`province` = ?, ';
			array.push(province);
		}
		if(country != ''){
			q += '`country` = ?, ';
			array.push(country);
		}
		if(zip != ''){
			q += '`zip` = ?, ';
			array.push(zip);
		}
		if(phone != ''){
			q += '`phone` = ?, ';
			array.push(phone);
		}
		if(phone_type != ''){
			q += '`phone_type` = ?, ';
			array.push(phone_type);
		}
		if(password != ''){
			q += '`password` = ?, ';
			array.push(password);
		}

		q = q.replaceAt(q.length -2 , ' ');

		q += ' WHERE `user_name` = ?';
		array.push(user_name);

		var query = sql.query('UPDATE `user` SET ' + q, array, function(err, results){
			console.log(err);
			if(err){
				res.json({ success : 0, fail : err }).status(401);
			}
			else{
				res.json({ success : 1 }).status(200);
			}
		});

	});

	app.post('/contact', function(req, res){

		var name = req.body.name;
		var company_name = req.body.company_name;
		var address_1 = req.body.address_1;
		var address_2 = req.body.address_2;
		var city = req.body.city;
		var zone = req.body.zone;
		var country = req.body.country;
		var state = req.body.state;
		var province = req.body.province;
		var zip = req.body.zip;
		var phone = req.body.phone;
		var email = req.body.email;
		var comment = req.body.comment;

		var emailBody = `<html><body><div>Name: ${name}</div><div>Company Name: ${company_name}</div><div>Address1: ${address_1}</div><div>Address2: ${address_2}</div><div>City: ${city}</div><div>Zone: ${zone}</div><div>Country: ${country}</div><div>State: ${state}</div><div>Province: ${province}</div><div>Postal Code: ${zip}</div><div>Phone: ${phone}</div><div>Email: ${email}</div><div>Questions or Comments: ${comment}</div></body></html>`;

		var curlCMD = "curl -s --user 'api:key-f51a8d633c5105190307b9c6202963af' \
    https://api.mailgun.net/v3/email.shirtclub.net/messages \
    -F from='email.shirtclub.net <email@shirtclub.net>' \
    -F to=info@delcoin.com \
    -F subject='A letter from shirtclub.net user' \
    --form-string html='" + emailBody + "'";

		child = exec(curlCMD,
			function (error, stdout, stderr) {
				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		});

		res.json({ success : 1 }).status(200);
	});

	// Member Page
	app.get('/member', ensureAuthenticated, function(req, res){
		sql.query('SELECT * FROM `user` WHERE `member_id` = ?', req.user.member_id, function(err, results){
			res.render('member', { name : req.user.first_name, member_id : req.user.member_id, user : results[0] });
		});
	});

	// Insert Game Result
	app.post('/game', ensureAuthenticated, function(req, res){

		var json = req.body;

		var query = sql.query('INSERT INTO game SET ?', json , function(err, results){

				if (err){
					res.json({ fail : err }).status(401);
				}
				else{
					res.json({ success : 'success' }).status(200);
				}
		});
	});


	function ensureAuthenticated(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		res.redirect('/');
	}

	/*
	 *
	 *  Getting member uploaded images
	 *
	 */
	app.get('/self/pictures', ensureAuthenticated, function(req, res) {

		if(!req.user){
			return res.status(500).send({ error: "unauthorized" });
		}

		sql.query('SELECT * FROM `user` WHERE `member_id` = ?', req.user.member_id, function(err, results){
			if(err || !results || !results[0]){
				res.json({ fail : 'DB Connection Error2' }).status(401);
			}

			var pictures = [];

			if(results[0].pic1){
				pictures.push(results[0].pic1);
			}
			if(results[0].pic2){
				pictures.push(results[0].pic2);
			}
			if(results[0].pic3){
				pictures.push(results[0].pic3);
			}

			return res.json({ pictures: pictures });

		});
	});

	/*
	 *
	 *  Accepting Images Upload
	 *
	 */
	app.post('/image', ensureAuthenticated, function(req, res){
		console.log('=== IMAGE UPLOAD DEBUG START ===');
		console.log('User authenticated:', req.user ? req.user.member_id : 'NO USER');
		console.log('Request files:', req.files ? Object.keys(req.files) : 'NO FILES');
		console.log('Request body:', req.body);
		
		if (!req.files || !req.files.uploadfile) {
			console.log('ERROR: No file uploaded');
			return res.status(400).json({ error: 'No file uploaded' });
		}
		
		const fileId = makeid();
		const uploadDir = __dirname + '/public/client/' + req.user.member_id + '/pic/';
		
		console.log('Generated fileId:', fileId);
		console.log('Upload directory:', uploadDir);
		console.log('File details:', {
			name: req.files.uploadfile.name,
			size: req.files.uploadfile.size,
			mimetype: req.files.uploadfile.mimetype
		});
		
		// Create directory if it doesn't exist
		const fs = require('fs');
		try {
			if (!fs.existsSync(uploadDir)) {
				console.log('Creating directory:', uploadDir);
				fs.mkdirSync(uploadDir, { recursive: true });
				console.log('Directory created successfully');
			} else {
				console.log('Directory already exists');
			}
			
			const fullPath = uploadDir + fileId;
			console.log('Moving file to:', fullPath);
			
			req.files.uploadfile.mv(fullPath, function(err) {
				if (err) {
					console.log('ERROR moving file:', err);
					return res.status(500).json({ error: err.message });
				}
				
				console.log('File uploaded successfully');
				console.log('=== IMAGE UPLOAD DEBUG END ===');
				res.json({ file : { name : fileId }});
			});
		} catch (error) {
			console.log('ERROR in upload process:', error);
			return res.status(500).json({ error: error.message });
		}
	});

	 /*
	 *
	 *  Deleting Images Upload
	 *
	 */
	app.delete('/image/:name', ensureAuthenticated, function(req, res){
		if(!req.user){
			return res.status(500).send({ error: "unauthorized" });
		}

		sql.query('SELECT * FROM `user` WHERE `member_id` = ?', req.user.member_id, function(err, results){
			if(err || !results || !results[0]){
				res.json({ fail : 'DB Connection Error2' }).status(401);
			}

			if(results[0].pic1 !== req.params.name && results[0].pic2 !== req.params.name && results[0].pic3 !== req.params.name){
				res.json({ fail : 'removed failed, pic not found' }).status(401);
			}

			var user = results[0];
			
			// Delete the physical file
			const fs = require('fs');
			const filePath = __dirname + '/public/client/' + req.user.member_id + '/pic/' + req.params.name;
			
			try {
				if (fs.existsSync(filePath)) {
					fs.unlinkSync(filePath);
					console.log('Physical file deleted:', filePath);
				}
			} catch (error) {
				console.log('Error deleting physical file:', error);
				// Continue with database update even if file deletion fails
			}

			// Update database
			if(user.pic1 === req.params.name){
				sql.query('UPDATE `user` SET `pic1` = ? WHERE `id` = ?', ['', user.id], function(err, results){
					if(err){
						return res.json({ fail : 'DB Connection Error2' }).status(401);
					}
					return res.json({ success: 1});
				});
			}
			else if(user.pic2 === req.params.name){
				sql.query('UPDATE `user` SET `pic2` = ? WHERE `id` = ?', ['', user.id], function(err, results){
					if(err){
						return res.json({ fail : 'DB Connection Error2' }).status(401);
					}
					return res.json({ success: 1});
				});
			}
			else if(user.pic3 === req.params.name){
				sql.query('UPDATE `user` SET `pic3` = ? WHERE `id` = ?', ['', user.id], function(err, results){
					if(err){
						return res.json({ fail : 'DB Connection Error2' }).status(401);
					}
					return res.json({ success: 1});
				});
			}
		});
	});

	/*
	 *
	 *  About Static Page
	 *
	 */
	 app.get('/about', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('about', { auth : auth });
	 });
	/*
	 *
	 *  Rules Static Page
	 *
	 */
	 app.get('/rules', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('rules', { auth : auth });
	 });
	/*
	 *
	 *  Standings Static Page
	 *
	 */
	 app.get('/standings', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('standings', { auth : auth });
	 });
	/*
	 *
	 *  Shop Static Page
	 *
	 */
	 app.get('/shop', ensureAuthenticated, function(req, res){
    delete req.user.password;
	 	res.render('shop', { user : req.user });
	 });
	/*
	 *
	 *  Add a Shop item in DB
	 *
	 */
	 app.post('/shop', ensureAuthenticated, function(req, res){
	 	var memberId = req.user.member_id;
	 	var array = [];
	 	array[0] = memberId
	 	var query = sql.query('UPDATE `user` SET `num_shirt_purchase` = `num_shirt_purchase` + 1 WHERE `member_id` = ?', array , function(err, results){
	 		if (err){
				res.json({ fail : 'DB Connection Error' }).status(401);
			}
			else{
				var obj = req.body;

				obj.messagePosition = JSON.stringify(obj.messagePosition);
				obj.position = JSON.stringify(obj.position);
				obj['member_id'] = req.user.id;

				var query = sql.query('INSERT INTO `shirt` SET ? ', obj , function(err, results){
			 		if (err){
			 			console.log(err);
						res.json({ fail : 'DB Connection Error' }).status(401);
					}
					else{
						var thisId = results.insertId;

						if(thisId < 100){
							var sn = 'SN000' + thisId;
						}
						else if(thisId < 1000){
							var sn = 'SN00' + thisId;
						}

						var array = [];

						array[0] = sn;
						array[1] = thisId;

						var query = sql.query('UPDATE `shirt` SET `sn` = ? WHERE `id` = ?', array, function(err, results){
							if(err){
								res.json({ fail : 'DB Connection Error' }).status(401);
							}
							else{
								res.json({ success : 1}).status(200);
							}
						});
					}
		 		});
			}
	 	});
	 });
	/*
	 *
	 *  Create Message Static Page
	 *
	 */
	 app.get('/createMessage', ensureAuthenticated, function(req, res){
	 	res.render('createMessage', { member_id : req.user.member_id });
	 });
	 /*
	 *
	 *  Add a Message Into DB
	 *
	 */
	 app.post('/createMessage', ensureAuthenticated, function(req, res){

	 	var obj = {
	 		member_id : req.user.member_id,
	 		content : req.body.content,
	 		link : req.body.link,
	 		image : req.body.image
	 		// pic2 : req.body.pic2,
	 		// pic3 : req.body.pic3
	 	};

	 	sql.query('INSERT INTO `message` SET ? ', obj , function(err, results){
	 		if (err){
				res.json({ fail : 'DB Connection Error' }).status(401);
			}
			else{

				var thisId = results.insertId;

				if(thisId < 100){
					var messageId = 'M00' + thisId;
				}
				else if(thisId < 1000){
					var messageId = 'M0' + thisId;
				}

				var array = [];
				array[0] = messageId;
				array[1] = thisId;

				sql.query('UPDATE `message` SET `message_id` = ? WHERE `id` = ?', array, async function(err, results){
					if(err){
						res.json({ fail : 'DB Connection Error2' }).status(401);
					}
					else{
						const user = await getUser(req.user.member_id);
						const emailBody = `
							<html>
								<h3>Thank you for purchasing Standard Message number: ${messageId}</h3>
								<h3>It is time to start having Fun With Shirts!</h3>
								<img alt="logo" width="150" height="150" src="https://shirtclub.net/images/logo.png" />
								<div><a href="https://shirtclub.net/contact">Contact Us</a></div>
							</html>
						`;
						sendEmail(emailBody, user.email, "[ShirtClub.net] Order Confirmation", function(){
						});
						res.json({ success : 1, message_id : messageId, content : obj.content }).status(200);
					}
				});
			}
	 	});
	 });
	/*
	 *
	 *  Get a message content
	 *
	 */
	/*not implemented by youraws | used by youraws for android app and also for the ios app | used in mobile say at 09-19-2025 it may ba chagnes after that date*/
	 app.get('/message/:messageId', async (req, res) => {

	 	var auth = typeof req.user === 'object' ? true : false;
	 	var messageId = req.params.messageId;

	 	try{
	 		const response = await Request({ uri : apiEndpoint + 'message/' + messageId, json: true });

			if(response.inactive) {
				res.render('user', { auth : auth, inactive: response.inactive });
			}
	 		else if(response.user){
	 			res.render('user', { user : response.user, message : response.message, auth : auth, inactive: response.inactive });
	 		}
	 		else{
	 			res.render('message', { message : response.message, auth : auth });
	 		}
	 	}
	 	catch(err){
	 		return res.json({ fail : err }).status(401);
	 	}
	 });
	 /*
	 *
	 *  Profile Static Page
	 *
	 */
	 app.get('/profile', ensureAuthenticated, function(req, res){
		sql.query('SELECT * FROM `user` WHERE `member_id` = ?', req.user.member_id, function(err, results){
			res.render('profile', { user : results[0] });
		});
	 });

	/*
	 *
	 *  Profile Update Request
	 *
	 */
	 app.post('/profile', ensureAuthenticated, async function(req, res){
	 	var json = req.body;
	 	var array = [];

	 	array.push(json.first_name);
	 	array.push(json.last_name);
	 	array.push(json.nick_name);
		array.push(json.message);
		array.push(json.birthday);
		array.push(json.marital);
		array.push(json.meeting);
		array.push(json.school);
		array.push(json.occupation);
		array.push(json.like);
		array.push(json.dislike);
		array.push(json.buy_me);
		array.push(json.cheer);
		array.push(json.prediction);

		array.push(parseInt(json.show_first_name));
		array.push(parseInt(json.show_last_name));
		array.push(parseInt(json.show_nick_name));
		array.push(parseInt(json.show_message));
		array.push(parseInt(json.show_birthday));
		array.push(parseInt(json.show_marital));
		array.push(parseInt(json.show_meeting));
		array.push(parseInt(json.show_school));
		array.push(parseInt(json.show_occupation));
		array.push(parseInt(json.show_like));
		array.push(parseInt(json.show_dislike));
		array.push(parseInt(json.show_buy_me));
		array.push(parseInt(json.show_cheer));
		array.push(parseInt(json.show_prediction));
		array.push(parseInt(json.show_pic));

		array.push(json.pic1);
		array.push(json.pic2);
		array.push(json.pic3);

		array.push(json.twitter);
		array.push(parseInt(json.show_twitter));
		array.push(json.instagram);
		array.push(parseInt(json.show_instagram));
		array.push(json.facebook);
		array.push(parseInt(json.show_facebook));
		array.push(json.youtube);
		array.push(parseInt(json.show_youtube));

		array.push(json.medical_alert);
		array.push(parseInt(json.show_medical_alert));

		array.push(json.xray_vision);
		array.push(parseInt(json.show_xray_vision));

		array.push(json.blood_type);
		array.push(parseInt(json.show_blood_type));

		// Where clause
		array.push(req.user.member_id);

	 	sql.query('UPDATE `user` SET `first_name` = ?, `last_name` = ?, `nick_name` = ?, `message` = ?, `birthday` = ?, `marital` = ?, `meeting` = ?, `school` = ?, `occupation` = ?, `like` = ?, `dislike` = ?, `buy_me` = ?, `cheer` = ?, `prediction` = ?, `show_first_name` = ?, `show_last_name` = ?, `show_nick_name` = ?, `show_message` = ?, `show_birthday` = ?, `show_marital` = ?, `show_meeting` = ?, `show_school` = ?, `show_occupation` = ?, `show_like` = ?, `show_dislike` = ?, `show_buy_me` = ?, `show_cheer` = ?, `show_prediction` = ?, `show_pic` = ?, `pic1` = ?, `pic2` = ?, `pic3` = ?, `twitter` = ?, `show_twitter` = ?, `instagram` = ?, `show_instagram` = ?, `facebook` = ?, `show_facebook` = ?, `youtube` = ?, `show_youtube` = ?, `medical_alert` = ?, `show_medical_alert` = ?, `xray_vision` = ?, `show_xray_vision` = ?, `blood_type` = ?, `show_blood_type` = ? WHERE `member_id` = ?', array , async function(err, results, user){
	 		if(err){
	 			return res.json({ fail : 'DB Connection Error' }).status(401);
	 		}
	 		const newUser = await getUser(req.user.member_id);
			return res.json({ success : 1, user : newUser }).status(200);
	 	});
	 });

	/*
	 *
	 *  BecomeSponsor Static Page
	 *
	 */
	 app.get('/becomesponsor', function(req, res){
	 	res.render('becomesponsor');
	 });
	/*
	 *
	 *  BecomeLocation Static Page
	 *
	 */
	 app.get('/becomelocation', function(req, res){
	 	res.render('becomelocation');
	 });
	/*
	 *
	 *  Find Static Page
	 *
	 */
	 app.get('/find', function(req, res){
	 	res.render('find');
	 });
	/*
	 *
	 *  Start Static Page
	 *
	 */
	 app.get('/start', ensureAuthenticated, function(req, res){
	 	res.render('start', { first_name : req.user.first_name,
								user_name : req.user.user_name });
	 });
	/*
	 *
	 *  Start after a Game is submitted
	 *
	 */
	 app.get('/thanks', function(req, res){
	 	res.render('thanks');
	 });
	/*
	 *
	 *  Statistics
	 *
	 */
	 app.get('/standings/statistic', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('statistic', { auth : auth });
	 });

   // SSL
   app.get('/.well-known/pki-validation/godaddy.html', function(req, res){
     //var auth = typeof req.user === 'object' ? true : false;
     res.render('validation');
   });
	/*
	 *
	 *  Standings
	 *
	 */
	 app.get('/standings/standing', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('standing', { auth : auth });
	 });
	/*
	 *
	 *  Ranksings
	 *
	 */
	 app.get('/standings/ranking', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('ranking', { auth : auth });
	 });
	/*
	 *
	 *  Location
	 *
	 */
	 app.get('/location', function(req, res){
	 	res.render('location');
	 });
	/*
	 *
	 *  Contact
	 *
	 */
	 app.get('/contact', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('contact', { auth : auth });
	 });
	/*
	 *
	 *  Closet
	 *
	 */
	 app.get('/closet', ensureAuthenticated, async function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	var user = await getUser(req.user.member_id);
	 	delete user.password;
	 	res.render('closet', { auth : auth, user });
	 });
	/*
	 *
	 *  Shirt
	 *  Get all shirts purchased by this member
	 *
	 */
	 app.get('/shirt', ensureAuthenticated, function(req, res){
	 	var array = [];
	 		array[0] = req.user.id;
	 	var query = sql.query('SELECT * FROM `shirt` WHERE `member_id` = ? ', array , function(err, results, fields){
			if (err){
				res.json({ fail : 'DB Connection Error' }).status(401);
			}
			else{
				res.json({ success : 1, results : results }).status(200);
			}
		});
	 });
	/*
	 *
	 *  Wolf
	 *
	 */
	 app.get('/standings/wolf', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('wolf', { auth : auth });
	 });
	/*
	 *
	 *  Lady
	 *
	 */
	 app.get('/standings/lady', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('lady', { auth : auth });
	 });
	/*
	 *
	 *  Sponsor
	 *
	 */
	 app.get('/sponsor', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('sponsor', { auth : auth, name : req.user.first_name });
	 });

   app.get('/bulkOrder', ensureAuthenticated, function(req, res){
     var auth = typeof req.user === 'object' ? true : false;
     res.render('bulkOrder', { auth : auth });
   });
	/*
	 *
	 *  Setting
	 *
	 */
	 app.get('/setting', function(req, res){
	 	var auth = typeof req.user === 'object' ? true : false;
	 	res.render('setting', { auth : auth, name : req.user.first_name });
	 });

	 function compare(a,b) {
		return a[1] < b[1] ? 1 : -1;
	}
	/*
	 * Reset member password
	 */
	app.get('/forgot-password', function(req, res){
		res.render('forgotPassword');
	});
	app.get('/reset-password/:token', function(req, res){
		const token = req.params.token;
		sql.query('SELECT * FROM `password_reset_link` WHERE `token` = ? AND `created_at` >= DATE_SUB(NOW(), INTERVAL 1 DAY)', token, function(err, results){
			if(err || results[0] === undefined){
				return res.render('index');
			}
			else{
				return res.render('resetPassword', { token: token });
			}
		});
	});

	app.get('/account', ensureAuthenticated, async function(req, res){
		const user = await getUser(req.user.member_id);
		sql.query("SELECT * FROM `message` WHERE `member_id` = ? AND `type` = 'managed'", user.member_id, function(err, results){
			res.render('account', { user : user, managed_messages: results });
		});
	});

	app.get('/member-activation', ensureAuthenticated, async function(req, res){
		const user = await getUser(req.user.member_id);
		if(user.membership_status && new Date(user.membership_status) > new Date()){
			return res.render('member', { name : user.first_name, member_id : user.member_id, user : user });
		}
		res.render('memberActivation', { user : user });
	});

	app.get('/purchase-standard-message', ensureAuthenticated, async function(req, res){
		const user = await getUser(req.user.member_id);
		res.render('purchaseStandardMessage', { user : user });
	});

	app.get('/purchase-managed-message', ensureAuthenticated, async function(req, res){
		const user = await getUser(req.user.member_id);
		res.render('purchaseManagedMessage', { user : user });
	});

	app.get('/public-closet/:memberID', function(req, res){
		res.render('publicCloset', { memberID: req.params.memberID });
	});

	app.get('/create-an-online-store', function(req, res){
		res.render('createAnOnlineStore', { memberID: req.params.memberID });
	});

	app.get('/buy-a-shirt', function(req, res){
		res.render('buyAShirt', { memberID: req.params.memberID });
	});
	
	//implemeted by youraws to handle the search field query logic
	app.get('/user/:memberId', function(req, res){
		var auth = typeof req.user === 'object' ? true : false;
		var searchTerm = req.params.memberId;
		
		// First, try to find a user with this member_id
		sql.query('SELECT * FROM `user` WHERE `member_id` = ?', [searchTerm], function(err, userResults){
			if(err){
				return res.json({ fail : 'DB Connection Error' }).status(401);
			}
			
			if(userResults.length > 0){
				// Found a user, display user profile (existing behavior)
				var user = userResults[0];
				
				// Hide fields based on privacy settings
				for (var property in user) {
					if(user.hasOwnProperty(property) && property.indexOf('show_') == 0 && user[property] == 0){
						if(property == 'show_pic'){
							user.pic1 = '';
							user.pic2 = '';
							user.pic3 = '';
						}
						else{
							var realProp = property.replace('show_', '');
							user[realProp] = '';
						}
					}
				}
				
				// Get user's messages
				sql.query('SELECT * FROM `message` WHERE `member_id` = ?', [searchTerm], function(err, messageResults){
					if(err){
						return res.json({ fail : 'DB Connection Error' }).status(401);
					}
					res.render('user', { user : user, message : messageResults, auth : auth });
				});
			}
			else {
				// No user found, try to find a message with this message_id
				sql.query('SELECT * FROM `message` WHERE `message_id` = ?', [searchTerm], function(err, messageResults){
					if(err){
						return res.json({ fail : 'DB Connection Error' }).status(401);
					}
					
					if(messageResults.length > 0){
						var message = messageResults[0];
						
						// Check if message belongs to member ON0011
						if(message.member_id === 'ON0011'){
							// Redirect to the message's link
							if(message.link && message.link.trim() !== ''){
								var redirectUrl = message.link.trim();
								
								// Check if URL starts with http:// or https://
								if(!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')){
									redirectUrl = 'https://' + redirectUrl;
								}
								
								return res.redirect(redirectUrl);
							} else {
								// ON0011 message but no link, show details page
								//return res.redirect('/message/' + searchTerm);
								res.render('message', { message : 0, auth : auth});
							}
						} else {
							// Different member_id, show message details page
							return res.redirect('/message/' + searchTerm);
						}
					}
					else {
						// Neither user nor message found
						res.render('user', { user : 0, auth : auth});
					}
				});
			}
		});
	});
}
