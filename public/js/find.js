/*

$('#form').on('submit', function (event) {

	event.preventDefault();

	$('section#results').empty();

	var city = $('input#City').val().toLowerCase().replace(/ /g,'');
	var province = $('input#Province').val().toLowerCase().replace(/ /g,'');
	var request = {
		city : city,
		province : province
	};

	var json = JSON.stringify(request);

	$.ajax({
		url : '/find',
		method : 'POST',
		contentType : 'application/json',
		data : json,
		dataType : 'json',
	}).done(function(data){
		if(data.success === 'success'){
			decorate(data.results);
		}
		else{
			alert('DB connection error');
		}
	}).fail(function(){
		console.log('AJAX Call Failed');
	});
});

*/

function decorateSearchResult(data){
	
	if(data.length === 0){
		$('section#results').append('<h4>No Results Found</h4>');
	}
	else{
		var tableBuilder = '<table class="table"><tr><th>Country</th><th>State/Prov</th><th>City</th><th>Location</th><th>Address</th><th>Postal/Zip Code</th><th>Phone</th><th>Table</th><th>Reservable</th></tr>'
		for(var i = 0; i < data.length; i++){
			tableBuilder += '<tr>';
			tableBuilder += '<td>' + capitalize(data[i].country) + '</td>';
			tableBuilder += '<td>' + capitalize(data[i].province) + '</td>';
			tableBuilder += '<td>' + capitalize(data[i].city) + '</td>';
			tableBuilder += '<td>' + capitalize(data[i].location) + '</td>';
			tableBuilder += '<td>' + capitalize(data[i].address) + '</td>';
			tableBuilder += '<td>' + data[i].zip.toUpperCase() + '</td>';
			tableBuilder += '<td>' + data[i].phone + '</td>';
			tableBuilder += '<td>' + data[i].table + '</td>';
			tableBuilder += '<td>' + data[i].reservable + '</td>';
			tableBuilder += '</tr>';
		}
		tableBuilder += '</table>'
		$('section#results').append(tableBuilder);
	}

	// Display Navi Links
	$('section#navigation').css('display', 'inline');
}

function decorateProvince(data){

	var destination = $('ul.dropdown-menu#province');

	// Reset some fields
	destination.empty();
	$('ul.dropdown-menu#city').empty();
	$('#selectProvince').html('Select State/Province <span class="caret"></span>');
	$('#selectCity').html('Select City <span class="caret"></span>');


	var dropdownBuilder = '';

	for(var i = 0; i< data.length; i++){
		dropdownBuilder += '<li role="presentation"><a value="' + data[i].province + '" >' + capitalize(data[i].province) + ' </a></li>'
	}

	destination.append(dropdownBuilder);
	invokeProvinceDropdown();
}


function decorateCity(data){

	var destination = $('ul.dropdown-menu#city');

	// Reset some fields
	destination.empty();
	$('#selectCity').html('Select City <span class="caret"></span>');

	var dropdownBuilder = '';

	for(var i = 0; i< data.length; i++){
		dropdownBuilder += '<li role="presentation"><a value="' + data[i].city + '" >' + capitalize(data[i].city) + ' </a></li>'
	}

	destination.append(dropdownBuilder);
	invokeCityDropdown();

}

// Select a country FIRST
$('.dropdown-menu#country a').on('click', function(){

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
		$('#selectCountry').html(self.html() + '<span class="caret"></span>');

	}).fail(function(){
		console.log('AJAX Call Failed');
	});

})

function invokeProvinceDropdown(){

	// Select a province SECOND
	$('.dropdown-menu#province a').on('click', function(){

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
			$('#selectProvince').html(self.html() + '<span class="caret"></span>');

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	});
}

function invokeCityDropdown(){

	// Select a city LAST
	$('.dropdown-menu#city a').on('click', function(){

		var self = $(this);

		var city = $(this).attr('value');

		var request = {
			city : city
		};

		var json = JSON.stringify(request);

		$.ajax({
			url : '/find',
			method : 'POST',
			contentType : 'application/json',
			data : json,
			dataType : 'json',

		}).done(function(data){

			if(data.success === 'success'){
				emptySearchResult();
				decorateSearchResult(data.results);
			}
			else{
				console.log('DB connection error');
			}
			$('#selectCity').html(self.html() + '<span class="caret"></span>');

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	});
}

function capitalize(string) {
	var array = string.split(' ');
	for (var i = 0; i < array.length; i++){
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}
	return array.join(' ');
}

function emptySearchResult(){
	$('section#results').empty();
	$('section#navigation').css('display', 'none');
}