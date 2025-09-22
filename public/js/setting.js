var country = '',
	province = '';

// Making sure dropdown menus are reflective
function registerProvince(){
	$('.dropdown-menu#province a').on('click', function(){
		$('#selectProvince').html($(this).html() + '<span class="caret"></span>');
		province = $(this).attr('value');
	});
}


$('.dropdown-menu#country a').on('click', function(){
	$('#selectCountry').html($(this).html() + '<span class="caret"></span>');
	country = $(this).attr('value');
	decorateProvinceUser(country);
});

$('.dropdown-menu#year a').on('click', function(){
	$('#selectYear').html($(this).html() + '<span class="caret"></span>');
	year = $(this).attr('value');
});

$('.dropdown-menu#month a').on('click', function(){
	$('#selectMonth').html($(this).html() + '<span class="caret"></span>');
	month = $(this).attr('value');
});

$('.dropdown-menu#day a').on('click', function(){
	$('#selectDay').html($(this).html() + '<span class="caret"></span>');
	day = $(this).attr('value');
});



$('.dropdown-menu#beer a').on('click', function(){
	$('#selectBeer').html($(this).html() + '<span class="caret"></span>');

	beer = $(this).attr('value');

	if (beer === 'Other'){
		removeOthers('beer');
		addOthers('beer');
	}
	else{
		removeOthers('beer');
	}

});

$('.dropdown-menu#liquor a').on('click', function(){
	$('#selectLiquor').html($(this).html() + '<span class="caret"></span>');

	liquor = $(this).attr('value');

	if (liquor === 'Other'){
		removeOthers('liquor');
		addOthers('liquor');
	}
	else{
		removeOthers('liquor');
	}

});

$('.dropdown-menu#wine a').on('click', function(){
	$('#selectWine').html($(this).html() + '<span class="caret"></span>');

	wine = $(this).attr('value');

	if (wine === 'Other'){
		removeOthers('wine');
		addOthers('wine');
	}
	else{
		removeOthers('wine');
	}

});

$('.dropdown-menu#softDrink a').on('click', function(){
	$('#selectSoftDrink').html($(this).html() + '<span class="caret"></span>');

	soft_drink = $(this).attr('value');

	if (soft_drink === 'Other'){
		removeOthers('soft_drink');
		addOthers('soft_drink');
	}
	else{
		removeOthers('soft_drink');
	}

});

$('.dropdown-menu#hotel a').on('click', function(){
	$('#selectHotel').html($(this).html() + '<span class="caret"></span>');

	hotel = $(this).attr('value');

	if (hotel === 'Other'){
		removeOthers('hotel');
		addOthers('hotel');
	}
	else{
		removeOthers('hotel');
	}
});

$('.dropdown-menu#airline a').on('click', function(){
	$('#selectAirline').html($(this).html() + '<span class="caret"></span>');

	airline = $(this).attr('value');

	if (airline === 'Other'){
		removeOthers('airline');
		addOthers('airline');
	}
	else{
		removeOthers('airline');
	}
});


$('input[name="player-type"]').on('click', function(){
	var type = $('input[name="player-type"]:checked').val();
	if(type == 'location'){
		$('.tableSelection').css('display', 'inline');
	}
	else if(type == 'undecided' || type == 'wolf'){
		$('.tableSelection').css('display', 'none');
	}
});

// For others selections on preference
function addOthers(type){
	$('.input-group.' + type).append('<input class="form-control ' + type + '" type="text", placeholder="Please specify"></input>');
}

function removeOthers(type){
	$('input.' + type).remove();
}




function decorateProvinceUser(data){

	var destination = $('ul.dropdown-menu#province');
	console.log(data);
	// Reset some fields
	destination.empty();
	$('ul.dropdown-menu#city').empty();
	$('button#selectProvince').html('Select <span class="caret"></span>');
	//$('#selectProvince').html('Select State/Province <span class="caret"></span>');
	//$('#selectCity').html('Select City <span class="caret"></span>');


	var dropdownBuilder = '';

	if(data == 'Canada'){
		dropdownBuilder += '<li role="presentation"><a value="AB" >AB </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >BC </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >MB </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >NB </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >NL </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >NS </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >NT </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >NU </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >ON </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >PE </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >QC </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >SK </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="AB" >YT </a></li>';
	}

	if(data == 'USA'){
		dropdownBuilder += '<li role="presentation"><a value="Alabama" >Alabama </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Alaska" >Alaska </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Arizona" >Arizona </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Arkansas" >Arkansas </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="California" >California </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Colorado" >Colorado </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Connecticut" >Connecticut </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Delaware" >Delaware </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Florida" >Florida </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Georgia" >Georgia </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Hawaii" >Hawaii </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Idaho" >Idaho </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Illinois" >Illinois </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Indiana" >Indiana </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Iowa" >Iowa </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Kansas" >Kansas </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Kentucky" >Kentucky </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Louisiana" >Louisiana </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Maine" >Maine </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Maryland" >Maryland </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Massachusetts" >Massachusetts </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Michigan" >Michigan </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Minnesota" >Minnesota </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Mississippi" >Mississippi </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Missouri" >Missouri </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Montana" >Montana </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Nebraska" >Nebraska </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Nevada" >Nevada </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="New Hampshire" >New Hampshire </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="New Jersey" >New Jersey </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="New Mexico" >New Mexico </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="North Carolina" >North Carolina </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="North Dakota" >North Dakota </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Ohio" >Ohio </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Oklahoma" >Oklahoma </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Oregon" >Oregon </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Pennsylvania" >Pennsylvania </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Rhode Island" >Rhode Island </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="South Carolina" >South Carolina </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="South Dakota" >South Dakota </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Tennessee" >Tennessee </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Texas" >Texas </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Utah" >Utah </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Vermont" >Vermont </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Virginia" >Virginia </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Washington" >Washington </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="West Virginia" >West Virginia </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Wisconsin" >Wisconsin </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Wyoming" >Wyoming </a></li>';
	}

	if(data == 'Australia'){
		dropdownBuilder += '<li role="presentation"><a value="Victoria" >Victoria </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Queensland" >Queensland </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="South Australia" >South Australia </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Western Australia" >Western Australia </a></li>';
		dropdownBuilder += '<li role="presentation"><a value="Northern Territory" >Northern Territory </a></li>';
	}

	if(data == 'England' || data == 'Scotland' || data == 'Wales' || data == 'Northern Ireland'){
		dropdownBuilder += '<li role="presentation"><a value="All regions" >All regions </a></li>';
	}

	destination.append(dropdownBuilder);
	registerProvince();
}



// When submit on clicked
$('.settingDone').on('click', function (event) {

	event.preventDefault();

	$('#registrationStatus').empty();

	// Validate Password
	if($('input#Password').val() !== ''){

		if($('input#Password').val() !== $('input#PasswordConfirm').val()){
			validationFailed('Password Does Not Match');
			return;
		}
		// Validate Password Length
		if($('input#Password').val().length < 6){
			validationFailed('Password Too Short');
			return;
		}
	}

	

	// Validate Canadian Zip
	if($('.dropdown-menu#country a').attr('value') === 'canada'){
		if( !checkPostal($('input#Zip').val()) ){
			validationFailed('Invalid Canadian Postal Code');
			return;
		}
	}


	var registration = {
	
		email 			:	$('input#Email').val(),

		street	 		:	$('input#Street').val(),
		city 			: 	$('input#City').val(),
		province 		: 	province,
		country 		: 	country,
		zip 			: 	$('input#Zip').val(),

		phone 			: 	$('input#Phone').val(),
		phone_type 		:	$('input[name="phone_number_type"]:checked').val() == undefined ? '' : $('input[name="phone_number_type"]:checked').val(),
		password 		:	$('input#Password').val(),
		
	}

	console.log(registration);

	if(registration.email == '' && registration.street == '' && registration.city == '' && registration.province == '' && registration.country == '' && registration.zip == '' && registration.phone == '' && registration.phone_type == '' && registration.password == ''){
		return window.location.href = '/member';
	}

	var obj = JSON.stringify(registration);


	$.ajax({
		url : '/setting',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		// Log User In
		if(data.success){
			swal({
				title: "",
				text: "Your profile has been updated", 
				type: "success",
				showCancelButton: false,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "OK",
				closeOnConfirm: false
			}, function(){
				window.location.href = '/member';
			});
		}
		else{
			window.location.href = "/";
		}

	}).fail(function(){
		window.location.href = "/";
	});
})

// Validation helper funciton
function checkPostal(postal) {
	var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
	if (regex.test(postal)){
		return true;
	}
	else{
		return false;
	}
}

// Handle Failed Validations
function validationFailed(fail) {
	$('#registrationStatus').append('<strong><h4>' + fail + '</h4></strong>');
}



/*
 *
 * Search for location AJAX
 * 
 */
function decorateSearchResult(data){
	
	if(data.length === 0){
		$('section#results').append('<h4>No Results Found</h4>');
	}
	else{
		var tableBuilder = '<table class="table"><tr><th>Select</th><th>Country</th><th>State/Prov</th><th>City</th><th>Location</th><th>Address</th><th>Postal/Zip Code</th><th>Phone</th><th>Table</th><th>Reservable</th></tr>'
		for(var i = 0; i < data.length; i++){
			tableBuilder += '<tr>';
			tableBuilder += '<td><input type="radio" name="table" value="' + data[i].table + '">'
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
}

function decorateProvince(data){

	var destination = $('ul.dropdown-menu#provinceForTable');

	// Reset some fields
	destination.empty();
	$('ul.dropdown-menu#cityForTable').empty();
	$('#selectProvinceForTable').html('Select State/Province <span class="caret"></span>');
	$('#selectCityForTable').html('Select City <span class="caret"></span>');


	var dropdownBuilder = '';

	for(var i = 0; i< data.length; i++){
		dropdownBuilder += '<li role="presentation"><a value="' + data[i].province + '" >' + capitalize(data[i].province) + ' </a></li>'
	}

	destination.append(dropdownBuilder);
	invokeProvinceDropdown();
}


function decorateCity(data){

	var destination = $('ul.dropdown-menu#cityForTable');

	// Reset some fields
	destination.empty();
	$('#selectCityForTable').html('Select City <span class="caret"></span>');

	var dropdownBuilder = '';

	for(var i = 0; i< data.length; i++){
		dropdownBuilder += '<li role="presentation"><a value="' + data[i].city + '" >' + capitalize(data[i].city) + ' </a></li>'
	}

	destination.append(dropdownBuilder);
	invokeCityDropdown();
}

// Select a country FIRST
$('.dropdown-menu#countryForTable a').on('click', function(){

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
		$('#selectCountryForTable').html(self.html() + '<span class="caret"></span>');

	}).fail(function(){
		console.log('AJAX Call Failed');
	});

})

function invokeProvinceDropdown(){

	// Select a province SECOND
	$('.dropdown-menu#provinceForTable a').on('click', function(){

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
			$('#selectProvinceForTable').html(self.html() + '<span class="caret"></span>');

		}).fail(function(){
			console.log('AJAX Call Failed');
		});

	});
}

function invokeCityDropdown(){

	// Select a city LAST
	$('.dropdown-menu#cityForTable a').on('click', function(){

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
			$('#selectCityForTable').html(self.html() + '<span class="caret"></span>');

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
}