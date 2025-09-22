var exec = require('child_process').exec;
const stripe = require('stripe')('sk_test_FUvE8hrH9s0HDAM8TF7C9lqm');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function twoDigits(d) {
	if(0 <= d && d < 10) return "0" + d.toString();
	if(-10 < d && d < 0) return "-0" + (-1*d).toString();
	return d.toString();
}

Date.prototype.toMysqlFormat = function() {
	return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

function makeid(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
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


module.exports = function(app, sql, passport){

	app.get('/api/message/:messageId', function(req, res){

		var auth = typeof req.user === 'object' ? true : false;
	 	var messageId = req.params.messageId;
	 	messageId = messageId.toLowerCase();
	 	var queryString = [messageId];
	 	var shirtMessageRegex = /^(m|gp|abc)[0-9]+/g;

	 	// First Search for a shirt message
	 	if(shirtMessageRegex.test(messageId)){

	 		sql.query('SELECT * FROM `message` WHERE `message_id` = ?', queryString, function(err, messageSearchResults){

		 		if(err){
		 			res.json({ fail : 'DB Connection Error 1' }).status(401);
		 			return;
		 		}
		 		else if(messageSearchResults.length == 0){
		 			res.json({ message : false, auth : auth }).status(200);
		 			return;
		 		}

		 		var output = messageSearchResults[0];
		 		output.type = 'message'

 				res.json({ message : output, auth : auth }).status(200);
		 	});

		 	return;
	 	}

	 	// If it's not a shirt message input, Search for a vender message
	 	sql.query('SELECT * FROM `vendor_message` WHERE `message_id` = ?', queryString, function(err, venderSearchResults){

	 		if(err){
	 			res.json({ fail : 'DB Connection Error 2' }).status(401);
	 			return;
	 		}

	 		if(venderSearchResults.length > 0){
	 			var output = venderSearchResults[0];
		 		output.type = 'vendor_message'
	 			res.json({ message : output, auth : auth }).status(200);
 				return;
	 		}

	 		// Search for a member
	 		sql.query('SELECT * FROM `user` WHERE `member_id` = ?', queryString, function(err, memberSearchResults){

	 			if(err){
		 			res.json({ fail : 'DB Connection Error 3' }).status(401);
		 			return;
		 		}

		 		if(memberSearchResults.length == 0){
		 			res.json({ message : false, auth : auth }).status(200);
		 			return;
		 		}

		 		var user = memberSearchResults[0];

		 		if(!user.membership_status || new Date(user.membership_status) < new Date()){
					res.json({ message : false, auth : auth, inactive: true }).status(200);
					return;
				}

		 		for (var property in user) {
					if(user.hasOwnProperty(property) && property.indexOf('show_') == 0 && user[property] == 0){
						// Hiding invisible properties
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

				// Member search succeded, now get the message stats
 				var query = sql.query('SELECT * FROM `message` WHERE `member_id` = ?', queryString, function(err, messsageInfoSearchResult){

 					if(err){
			 			res.json({ fail : 'DB Connection Error' }).status(401);
			 			return;
			 		}

			 		delete user.password;
			 		delete user.admin;

			 		res.json({ user : user, message : messsageInfoSearchResult, auth : auth }).status(401);
 				});
	 		});
	 	});
	});

  // Get all messages
  app.get('/api/message/shirt/all', function(req, res){
    var auth = typeof req.user === 'object' ? true : false;
    sql.query('SELECT * FROM `message`', function(err, messageSearchResults){
      if(err){
        res.json({ fail : 'DB Connection Error' }).status(401);
        return;
      }
      res.json({ message : messageSearchResults, auth : auth }).status(200);
      return;
    });
  });

  // Create an order
  app.post('/api/order', ensureAuthenticated, function(req, res){
    var input = {
      cart: JSON.stringify(req.body.cart),
      customer: req.user.member_id
    };
    var query = sql.query('INSERT INTO `order` SET ? ', input , function(err, results){
      if (err){
        console.log(err);
        res.json({ fail : 'DB Connection Error' }).status(401);
        return;
      }
      res.json({ success : 1}).status(200);
    });
  });

  app.post('/api/send-email', function(req, res){

    var body = req.body.email.body;
    var recipient = req.body.email.recipient;
    var subject = req.body.email.subject;

    var curlCMD = "curl -s --user 'api:key-f51a8d633c5105190307b9c6202963af' \
    https://api.mailgun.net/v3/email.shirtclub.net/messages \
    -F from='email.shirtclub.net <email@shirtclub.net>' \
    -F to=" + recipient + " \
    -F subject='" + subject + "' \
    --form-string html='" + body + "'";

    exec(curlCMD, function (error, stdout, stderr) {
      if (error !== null) {
        res.json({ fail : 'email sent failed' }).status(401);
      }
      else{
        res.json({ success : 1 }).status(200);
      }
    });
  });

  app.post('/api/password-recovery-email', function(req, res){
  	const email = req.body.email;
		sql.query('SELECT * FROM `user` WHERE `email` = ?', email, function(err, results, fields){
			if(err || results[0] === undefined){
				return res.json({ fail: 'user does not exist' });
			}
			const member = results[0];
			const token = makeid(20);
			sql.query('INSERT INTO password_reset_link SET ?', { user_id: member.id, token } , function(err, results){
				if (err){
					return res.json({ fail: 'token creation failed'});
				}
				const env = process.argv[2];
				let linkUrl;
				if(env == "dev"){
					linkUrl = "http://localhost:3080/"
				}
				else{
					linkUrl = "https://shirtclub.net/"
				}
				linkUrl += "reset-password/" + token;
				sendEmail(
					"<html>Here is a temporary <a href='" + linkUrl + "' target='_blank' >Link</a> to reset your shirtclub member password. The link will expire in 24 hours. If you did not initiate this action please ignore this message.</html>",
					email,
					"Reset Shirtclub Password",
					function(result){
						if(!result.success){
							return res.json({ fail: 'email send failed'});
						}
						return res.json({success: 1});
					}
				);
			});
		});
	});

	app.post('/api/reset-password', function(req, res){
		const email = req.body.email;
		const newPassword = req.body.newPassword;
		const token = req.body.token;
		sql.query('SELECT * FROM `user` WHERE `email` = ?', email, function(err, results, fields){
			if(err || results[0] === undefined){
				return res.json({ fail: 'user does not exist' });
			}
			const member = results[0];
			sql.query('SELECT * FROM `password_reset_link` WHERE `token` = ? AND `user_id` = ? AND `created_at` >= DATE_SUB(NOW(), INTERVAL 1 DAY)', [token, member.id], function(err, results){
				if(err || results[0] === undefined){
					return res.json({ fail: 'token does not exist or has expired' });
				}
				const resetLink = results[0];
				sql.query('UPDATE `user` SET `password` = ? WHERE `id` = ?', [newPassword, member.id], function(err, results) {
					if (err) {
						res.json({fail: 'update password failed' }).status(401);
					}
					sql.query('DELETE FROM `password_reset_link` WHERE `id` = ?', resetLink.id, function(err, results) {
						return res.json({ success: 1});
					});
				});
			});
		});
	});

	app.post('/api/update-user', ensureAuthenticated, function(req, res){
		if(req.user.member_id != req.body.member_id){
			return res.json({fail: "unauthorized"}).status(401);
		}
		sql.query("UPDATE `user` SET ? WHERE `member_id` = ?", [req.body, req.user.member_id], function(err, results, fields){
			if (err) {
				res.json({fail: 'update user failed' }).status(500);
			}
			return res.json({success: 1});
		});
	});

	app.post('/api/membership-status', ensureAuthenticated, function(req, res){
		if(!req.user.admin){
			return res.json({fail: "unauthorized"}).status(401);
		}
		let newMembershipStatus = null;
		if(req.body.membership_status){
			newMembershipStatus = new Date(req.body.membership_status).toMysqlFormat()
		}
		sql.query("UPDATE `user` SET `membership_status` = ? WHERE `member_id` = ?", [newMembershipStatus, req.body.member_id], function(err, results, fields){
			if (err) {
				return res.json({fail: 'update user failed' }).status(500);
			}
			return res.json({success: 1});
		});
	});

	app.put('/api/message', ensureAuthenticated, function(req, res){
		const messageID = req.body.message_id;
		const link = req.body.link;
		sql.query("SELECT `member_id` FROM `message` WHERE `message_id` = ?", messageID, function(err, results, fields){
			if (err) {
				return res.json({fail: 'failed to modify message' }).status(500);
			}
			if (!results || results.length === 0 || results[0].member_id !== req.user.member_id){
				return res.json({fail: 'failed to modify message' }).status(500);
			}
			sql.query("UPDATE `message` SET `link` = ? WHERE `message_id` = ?", [link, messageID], function(err, results, fields){
				if (err) {
					return res.json({fail: 'update to modify message' }).status(500);
				}
				return res.json({success: 1});
			});
		})
	});

	app.post('/api/transaction', ensureAuthenticated, function(req, res){
		const hash = makeid(50);
		sql.query('INSERT INTO `trx` SET ?', { member_id: req.user.member_id, hash: hash }, function(err, results){
			if (err){
				res.json({ fail : 'DB Connection Error' }).status(401);
				return;
			}
			res.json({ success : 1, hash: hash }).status(200);
		});
	});

	app.get('/api/closet/shirt/all', ensureAuthenticated, function(req, res){
		sql.query("SELECT * FROM `closet_shirt` WHERE `member_id` = ?", req.user.member_id, function(err, results){
			if (err) {
				return res.json({ fail : 'DB Connection Error' }).status(401);
			}
			res.json({ success : 1, shirts: results }).status(200);
		});
	});

	app.get('/api/closet/:memberID', function(req, res){
		const memberID = req.params.memberID;
		sql.query("SELECT `show_closet` FROM `user` WHERE `member_id` = ?", memberID, function(err, results){
			if (err) {
				return res.json({ fail : 'DB Connection Error' }).status(200);
			}
			if(results.length === 0){
				return res.json({ fail : 'User Not Found' }).status(200);
			}
			const showCloset = results[0].show_closet;
			if(!showCloset){
				return res.json({ success : 1, show_closet: false, shirts: [] }).status(200);
			}
			sql.query("SELECT * FROM `closet_shirt` WHERE `member_id` = ?", memberID, function(err, results){
				if (err) {
					return res.json({ fail : 'DB Connection Error' }).status(200);
				}
				return res.json({ success : 1, show_closet: true, shirts: results }).status(200);
			});
		});
	});

	app.post('/api/closet/shirt', ensureAuthenticated, function(req, res){
		const insert = {
			member_id: req.user.member_id,
			symbol: req.body.symbol,
			description: req.body.description,
			message_number: req.body.message_number,
			pic: req.body.pic,
		}
		sql.query('INSERT INTO `closet_shirt` SET ?', insert, function(err, results){
			if (err) {
				return res.json({ fail : 'DB Connection Error' }).status(401);
			}
			res.json({ success : 1 }).status(200);
		});
	});

	app.put('/api/closet/shirt', ensureAuthenticated, function(req, res){
		const update = {
			symbol: req.body.symbol,
			message_number: req.body.message_number,
			description: req.body.description,
			pic: req.body.pic,
		}
		sql.query('UPDATE `closet_shirt` SET ? WHERE `id` = ? and `member_id` = ?', [update, req.body.id, req.user.member_id], function(err, results){
			if (err) {
				return res.json({ fail : 'DB Connection Error' }).status(401);
			}
			res.json({ success : 1 }).status(200);
		});
	});

	app.put('/api/closet/privacy', ensureAuthenticated, function(req, res){
		const show_closet = req.body.show_closet ? 1 : 0;
		sql.query('UPDATE `user` SET `show_closet` = ? WHERE `member_id` = ?', [show_closet, req.user.member_id], function(err, results){
			if (err) {
				return res.json({ fail : 'DB Connection Error' }).status(401);
			}
			res.json({ success : 1 }).status(200);
		});
	});

	app.delete('/api/closet/shirt/:shirtID', ensureAuthenticated, function(req, res){
		const shirtID = req.params.shirtID;
		sql.query('DELETE FROM `closet_shirt` WHERE `id` = ? AND `member_id` = ?', [shirtID, req.user.member_id], function(err, results){
			if (err) {
				return res.json({ fail : 'DB Connection Error' }).status(401);
			}
			res.json({ success : 1 }).status(200);
		});
	});

	// app.get('/api/checkout/membership', ensureAuthenticated, async function(req, res){
	// 	return res.json({success: 1, sessionID: "123" });
	// 	const session = await stripe.checkout.sessions.create({
	// 		payment_method_types: ['card'],
	// 		line_items: [{
	// 			price: 800,
	// 			quantity: 1,
	// 		}],
	// 		mode: 'payment',
	// 		success_url: 'https://shirtclub.net/member-activation/success?session_id={CHECKOUT_SESSION_ID}',
	// 		cancel_url: 'https://shirtclub.net/member-activation',
	// 	});
	// });
};
