function cityRanking(city, cb){
	console.log(city);
	var request = {
		city : city,
		action: { 
			city : 1,
			province : 0,
			country: 0,
			table: 0
		}
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/standings/standing',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',

	}).done(function(data){

		if(data.success){
			cb(null, data.rank);
		}
		else{
			cb(null, data.message);
		}

	}).fail(function(){
		cb(404, data);
	});
};

function provinceRanking(province, cb){
	console.log(province);
	var request = {
		province : province,
		action: { 
			city : 0,
			province : 1,
			country: 0,
			table: 0
		}
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/standings/standing',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',

	}).done(function(data){

		if(data.success){
			cb(null, data.rank);
		}
		else{
			cb(null, data.message);
		}

	}).fail(function(){
		cb(404, data);
	});

};

function countryRanking(country, cb){
	console.log(country);
	var request = {
		country : country,
		action: { 
			city : 0,
			province : 0,
			country: 1,
			table: 0
		}
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/standings/standing',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',

	}).done(function(data){

		if(data.success){
			cb(null, data.rank);
		}
		else{
			cb(null, data.message);
		}

	}).fail(function(){
		cb(404, data);
	});

};

function worldRanking(cb){
	var request = {
		action: { 
			city : 0,
			province : 0,
			country: 0,
			table: 0,
			world: 1
		}
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/standings/standing',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',

	}).done(function(data){

		if(data.success){
			cb(null, data.rank);
		}
		else{
			cb(null, data.message);
		}

	}).fail(function(){
		cb(404, data);
	});

};

function tableRanking(table, cb){
	console.log(table);
	var request = {
		table : table,
		action: { 
			city : 0,
			province : 0,
			country: 0,
			table: 1
		}
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/standings/standing',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',

	}).done(function(data){

		if(data.success){
			cb(null, data.rank);
		}
		else{
			cb(null, data.message);
		}

	}).fail(function(){
		cb(404, data);
	});

};



$('button#submit').on('click', function(e){

	e.preventDefault();

	var userName = $('input#user').val();

	$.ajax({
		url : '/user/' + userName,
		method : 'GET',
	}).done(function(data){

		if(data.success){

			var users = data.results;
			if(users.length === 0){
				return swal("", "User not found", "warning");
			}
			else{
				var user = users[0];
				var table = user.table;
				var city = user.city;
				var province = user.province;
				var country = user.country;

				async.parallel({

					one: cityRanking.bind(null, city),
					two: provinceRanking.bind(null, province),
					three: countryRanking.bind(null, country),
					//four: tableRanking.bind(null, table)
					four: worldRanking

				}, function(err, results){

					if(err){
						return console.log(err);
					}

					var cityRank = results['one'];
					var provinceRank = results['two'];
					var countryRank = results['three'];
					//var tableRank = results['four'];
					var worldRank = results['four'];

					//var tableResult;
					var cityResult;
					var provinceResult;
					var countryResult;
					var worldResult;

					/*
					if(typeof tableRank !== 'string'){

						for(var i = 0; i < tableRank.length; i++ ){

							if(tableRank[i][0] === userName){
								tableResult = i+1;
								break;
							}
							// If it is the last one and it doesn't mach
							if(i === tableRank.length-1 &&  tableRank[i][0] !== userName){
								tableResult = 'Not Ranked';
							}
						}
					}
					else{
						tableResult = tableRank;
					}*/


					if(typeof cityRank !== 'string'){

						for(var i = 0; i < cityRank.length; i++ ){
							
							if(cityRank[i][0] === userName){
								cityResult = i+1;
								break;
							}
							// If it is the last one and it doesn't mach
							if(i === cityRank.length-1 &&  cityRank[i][0] !== userName){
								cityResult = 'Not Ranked';
							}
						}
					}
					else{
						cityResult = cityRank;
					}


					if(typeof provinceRank !== 'string'){

						for(var i = 0; i < provinceRank.length; i++ ){
							
							if(provinceRank[i][0] === userName){
								provinceResult = i+1;
								break;
							}
							// If it is the last one and it doesn't mach
							if(i === provinceRank.length-1 &&  provinceRank[i][0] !== userName){
								provinceResult = 'Not Ranked';
							}
						}
					}
					else{
						provinceResult = provinceRank;
					}

					if(typeof countryRank !== 'string'){

						for(var i = 0; i < countryRank.length; i++ ){
							
							if(countryRank[i][0] === userName){
								countryResult = i+1;
								break;
							}
							// If it is the last one and it doesn't mach
							if(i === countryRank.length-1 &&  countryRank[i][0] !== userName){
								countryResult = 'Not Ranked';
							}
						}
					}
					else{
						countryResult = countryRank;
					}

					if(typeof worldRank !== 'string'){

						for(var i = 0; i < worldRank.length; i++ ){
							
							if(worldRank[i][0] === userName){
								worldResult = i+1;
								break;
							}
							// If it is the last one and it doesn't mach
							if(i === worldRank.length-1 &&  worldRank[i][0] !== userName){
								worldResult = 'Not Ranked';
							}
						}
					}
					else{
						worldResult = worldRank;
					}

					DecorateResults(/*tableResult, */cityResult, provinceResult, countryResult, worldResult, user);

				});

			}

		}
		else{
			console.log('DB connection error');
		}

	}).fail(function(){
		console.log('AJAX Call Failed');
	});

});


function DecorateResults(city, province, country, world, user){
	$('section#result').empty();

	var result = '<table class="table">';
		result += '<tr><th></th><th></th><th>Rank</th></tr>';

		//result += '<tr><td>Location/Wolf</td><td>' + table + '</td></tr>';
		result += '<tr><td>City</td><td>' + user.city + '</td><td>' + city + '</td></tr>';
		result += '<tr><td>State/Prov</td><td>' + user.province.toUpperCase() + '</td><td>' + province + '</td></tr>';
		result += '<tr><td>Country</td><td>' + capitalizeFirstLetter(user.country) + '</td><td>' + country + '</td></tr>';
		result += '<tr><td>World</td><td></td><td>' + world + '</td></tr>';

		result += '</table>';

	$('section#result').append(result);
};

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}