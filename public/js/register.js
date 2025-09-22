var province = '';
var zone = '';
var state = '';


function setStateDropdown(display){
	if(display){
		$('#state-dropdown').css("display", "inline");
	}
	else{
		$('#state-dropdown').css("display", "none");
	}
}

function setProvinceDropdown(display){
	if(display){
		$('#province-dropdown').css("display", "inline");
	}
	else{
		$('#province-dropdown').css("display", "none");
	}
}

function setCountryInput(display){
	if(display){
		$('#country-input').css("display", "inline");
	}
	else{
		$('#country-input').css("display", "none");
	}
}

$('.dropdown-menu#province a').on('click', function(){
	$('#selectProvince').html($(this).html() + '<span class="caret"></span>');
	province = $(this).attr('value');
});

$('.dropdown-menu#state a').on('click', function(){
	$('#selectState').html($(this).html() + '<span class="caret"></span>');
	state = $(this).attr('value');
});

$('.dropdown-menu#zone a').on('click', function(){
	$('#selectZone').html($(this).html() + '<span class="caret"></span>');
	setStateDropdown();
	setProvinceDropdown();
	setCountryInput();
	zone = $(this).attr('value');
	if(zone === "USA"){
		setStateDropdown(true);
	}
	else if(zone === "Canada"){
		setProvinceDropdown(true);
	}
	else if(zone === "Australia"){
		// nada
	}
	else{
		setCountryInput(true);
	}
});

function getWelcomeEmailPayload(userEmail){
	var email = `
        <html>
            <h2>Membership Message:</h2>
            <div>Thank you for registering. We are certain that being a Shirt Club member will add fun to your life.</div>
            <h2>About your membership:</h2>
            <div>To be an active Shirt Club member a membership fee of $8.00 per year is required.</div>
            <div><a href="https://shirtclub.net/member-activation">Activate Now</a></div>
            <h2>Why?</h2>
            <div><strong>Reason 1:</strong> the Shirt Club does not sell shirts. You can purchase a shirt anywhere or take a shirt that you already own and print your member ID number on the shirt.</div>
            <div><strong>Reason 2:</strong> the Shirt Club does not sell advertising. We generate no revenue from advertising or from the sale of clothing.</div>
            <div><strong>Reason 3:</strong> When you place your member ID number on a shirt you are in effect advertising a website and the fee of $8.00 per year is the fee the Shirt Club charges to host your website.</div>
						<div>It&#39;s time to start having: <strong>Fun with Shirts!</strong></div>
						<div><a href="https://shirtclub.net/member-activation">Activate Now</a></div>
						<img alt="logo" width="150" height="150" src="https://shirtclub.net/images/logo.png" />
        </html>
    `;

	return JSON.stringify({
		email : {
			recipient: userEmail,
			subject: "[ShirtClub.net] Welcome to ShirtClub",
			body: email,
		}
	});
}

// When submit on clicked
$('#form').on('submit', function (event) {

	event.preventDefault();

	$('#registrationStatus').empty();

	// Validate Password
	if($('input#Password').val() !== $('input#PasswordConfirm').val()){
		validationFailed('Password Does Not Match');
		return;
	}

	// Validate Password Length
	if($('input#Password').val().length < 6){
		validationFailed('Password Too Short');
		return;
	}

	// Validate Canadian Zip
	// if(zone === 'Canada'){
	// 	if( !checkPostal($('input#Zip').val()) ){
	// 		validationFailed('Invalid Canadian Postal Code');
	// 		return;
	// 	}
	// }

	var registration = {

		first_name 		:	$('input#FirstName').val(),
		last_name  		:	$('input#LastName').val(),
		email 			:	$('input#Email').val(),
		// street	 		:	$('input#Street').val(),
		city 			: 	$('input#City').val(),
		province 		: 	zone === "Canada" ? province : null,
		state 		: 	zone === "USA" ? state : null,
		country   : zone !== "Canada" && zone !== "USA" && zone !== "Australia" ? $('input#Country').val() : null,
		zone : zone,
		// zip 			: 	$('input#Zip').val(),
		// phone 			: 	$('input#Phone').val(),
		// phone_type 		:	$('input[name="phone_number_type"]:checked').val(),
		password 		:	$('input#Password').val()

	};

	if(!registration.first_name || !registration.last_name){
		return showError("Name is Required");
	}
	else if(!registration.email || registration.email !== $('input#ConfirmEmail').val()){
		return showError("Email is missing or does not match with Confirm Email");
	}
	else if(!registration.zone){
		return showError("Address is incomplete");
	}
	else if(registration.zone === "USA" && registration.state == null){
		return showError("State is required");
	}
	else if(registration.zone === "Canada" && registration.province == null){
		return showError("Province is required");
	}
	else if(registration.zone !== "Canada" && registration.zone !== "USA" && registration.zone !== "Australia" && registration.country == null){
		return showError("Country is required");
	}
	else if(!registration.password){
		return showError("Password is required");
	}

	var credential = {
		password : $('input#Password').val(),
		fromRegistration : 'true',
		username : ''
	};

	var obj = JSON.stringify(registration);

	$.ajax({
		url : '/register',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		// Log User In
		if(data.success){

			credential.username = data.id;
			var _credential = JSON.stringify(credential);

			$.ajax({
				url : '/login',
				method : 'POST',
				contentType : 'application/json',
				data : _credential,
				dataType : 'json'
			}).done(function(data){
				//Redirect ot member page
				if(data.success){
					delete localStorage.user;
					window.location.href = "/member";
				}
				else{
					window.location.href = "/";
				}
			}).fail(function(jqXHR, textStatus){
				window.location.href = "/";
			});
		}
		else{
			validationFailed(data.fail);
		}
	}).fail(function(){
		console.log('AJAX Call Failed');
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
