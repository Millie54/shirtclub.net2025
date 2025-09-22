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

$('button#form').on('click', function(){

	var contact = {
		name : $('input.name').val(),
		company_name : $('input.cname').val(),
		address_1 : $('input.add1').val(),
		address_2 : $('input.add2').val(),
		city : $('input.city').val(),
		zone: zone,
		state: zone === "USA" ? state : "",
		province : zone === "Canada" ? province : "",
		country: zone !== "USA" && zone !== "Canada" && zone !== "Australia" ? $('input.country').val() : "",
		zip : $('input.zip').val(),
		phone : $('input.phone').val(),
		email : $('input.email').val(),
		how : $('input[name="gender"]:checked').val(),
		comment : $('textarea').val()
	};

	if(!contact.name){
		return showError("Contact Name is Required");
	}
	else if(!contact.phone){
		return showError("Phone is Required");
	}
	else if(!contact.email){
		return showError("Email is Required");
	}
	else if(!contact.zone){
		return showError("Zone is Required");
	}
	else if((!contact.country) && contact.zone !== "USA" && contact.zone !== "Canada" && contact.zone !== "Australia"){
		return showError("Country is Required");
	}

	var obj = JSON.stringify(contact);

	$.ajax({
		url : '/contact',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		// Log User In
		if(data.success){
			swal({
				title: "",
				text: "Thanks for contacting us! We will get back to you as soon as possible", 
				type: "success",
				showCancelButton: false,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "OK",
				closeOnConfirm: false
			}, function(){
				window.location.href = '/';
			});
		}
		else{
			console.log(data.fail);
		}
	}).fail(function(){
		console.log('AJAX Call Failed');
		window.location.href = "/";
	});

});