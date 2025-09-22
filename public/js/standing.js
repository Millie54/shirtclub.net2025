/*
 *
 * Search for location AJAX
 * 
 */

function decorateProvince(data){

	var destination = $('ul.dropdown-menu#province');

	// Reset some fields
	destination.empty();
	$('ul.dropdown-menu#city').empty();
	$('#selectProvince').html('Select State/Province<span class="caret"></span>');
	$('#selectCity').html('Select City<span class="caret"></span>');


	var dropdownBuilder = '';

	for(var i = 0; i< data.length; i++){
		dropdownBuilder += '<li role="presentation"><a value="' + data[i].province + '" >' + data[i].province + ' </a></li>'
	}

	destination.append(dropdownBuilder);
	invokeProvinceDropdown();
}


function decorateCity(data){

	var destination = $('ul.dropdown-menu#city');

	// Reset some fields
	destination.empty();
	$('#selectCity').html('Select City<span class="caret"></span>');

	var dropdownBuilder = '';

	for(var i = 0; i< data.length; i++){
		dropdownBuilder += '<li role="presentation"><a value="' + data[i].city + '" >' + data[i].city + ' </a></li>'
	}

	destination.append(dropdownBuilder);
	invokeCityDropdown();
}

// Select a country FIRST
$('.dropdown-menu#country a').on('click', function(){

	$('#selectCountry').html($(this).html() + '<span class="caret"></span>');

	var self = $(this);

	var country = $(this).attr('value');

	var request = {
		country : country
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/find/province',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',

	}).done(function(data){

		if(data.success === 'success'){
			emptySearchResult();
			decorateProvince(data.results);
		}
		else{
			console.log('DB connection error');
		}
		

	}).fail(function(){
		console.log('AJAX Call Failed');
	});

})

function invokeProvinceDropdown(){

	// Select a province SECOND
	$('.dropdown-menu#province a').on('click', function(){

		$('#selectProvince').html($(this).html() + '<span class="caret"></span>');

		var self = $(this);

		var province = $(this).attr('value');

		var request = {
			province : province
		};

		var json = JSON.stringify(request);

		$.ajax({
			url : '/find/city',
			method : 'POST',
			contentType : 'application/json',
			data : json,
			dataType : 'json',

		}).done(function(data){

			if(data.success === 'success'){
				emptySearchResult();
				decorateCity(data.results);
			}
			else{
				console.log('DB connection error');
			}
			

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	});
}

function invokeCityDropdown(){

	// Select a city LAST
	$('.dropdown-menu#city a').on('click', function(){

		$('#selectCity').html($(this).html() + '<span class="caret"></span>');

		var self = $(this);

		var city = $(this).attr('value');

		var request = {
			city : city,
			action: { 
				city : 1,
				province : 0,
				country: 0,
				world: 0,
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
				showResult(data.rank);
			}
			else{
				console.log('DB connection error');
			}
			//$('#selectCity').html(self.html() + '<span class="caret"></span>');

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	});
}


function emptySearchResult(){
	$('section#results').empty();
}

function showResult(rank){

	emptySearchResult();
	if(rank.length === 0){
		$('section#results').append('<h4>No Results Found</h4>');
	}
	else{
		var tableBuilder = '<h4>Ranking Results:</h4><br><table class="table"><tr><th>Rank</th><th>Player Name</th></tr>'
		var top = rank.length > 100 ? 100 : rank.length;
		var rankIndex = 1;
		var skipIndex = 0;
		for(var i = 0; i < top; i++){
			// Same score as previous ranking score
			if(i > 0 && rank[i-1][1] != rank[i][1]){
				rankIndex+=skipIndex;
				skipIndex = 0;
				rankIndex++;
			}
			else if( i > 0){
				skipIndex++;
			}
			tableBuilder += '<tr>';
			tableBuilder += '<td>' + rankIndex + '</td>';
			tableBuilder += '<td>' + rank[i][0] + '</td>';
			tableBuilder += '</tr>';
		}
		tableBuilder += '</table>'
		$('section#results').append(tableBuilder);
	}
}




/*
 *
 * When Location Submit is on Click
 * 
 */
$('.submitLocationSearch').on('click', function(){

	var country = $('#selectCountry').text();
	var province = $('#selectProvince').text();
	var city = $('#selectCity').text();

	if(country === 'Country'){
		return swal("", "Must at least enter country", "warning");
	}

	// Search for country
	if(province === 'Select State/Province'){

		var request = {
			country : country,
			action: { 
				city : 0,
				province : 0,
				country: 1,
				world: 0,
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
				showResult(data.rank);
			}
			else{
				console.log('DB connection error');
			}

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	}
	// Search for province
	else if(city === 'Select City'){

		var request = {
			province : province,
			action: { 
				city : 0,
				province : 1,
				country: 0,
				world: 0,
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
				showResult(data.rank);
			}
			else{
				console.log('DB connection error');
			}

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	}
	// Search for city
	else{

		var request = {
			city : city,
			action: { 
				city : 1,
				province : 0,
				country: 0,
				world: 0,
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
				showResult(data.rank);
			}
			else{
				console.log('DB connection error');
			}

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	}
});


/*
 *
 * When Table Number Submit is on Click
 * 
 */
$('.submitTableNum').on('click', function(){
	var tableId = $('input#tableId').val();

	if(tableId == ''){
		return swal('', 'Please enter a Table Number', 'warning');
	}

	var request = {
		table : tableId,
		action: { 
			city : 0,
			province : 0,
			country: 0,
			world: 0,
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
			showResult(data.rank);
		}
		else{
			var rank = [];
			showResult(rank);
		}

	}).fail(function(){
		console.log('AJAX Call Failed');
	});
});


/*
 *
 * When world is selected
 * 
 */
 $('.searchWorld').on('click', function(){

 	var request = {
		action: { 
			city : 0,
			province : 0,
			country: 0,
			world: 1,
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
			showResult(data.rank);
		}
		else{
			var rank = [];
			showResult(rank);
		}

	}).fail(function(){
		console.log('AJAX Call Failed');
	});
	
 });