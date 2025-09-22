var province = user.province;
var zone = user.zone;
var state = user.state;

console.log(user);

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
    if(zone === 'Canada'){
        if( !checkPostal($('input#Zip').val()) ){
            validationFailed('Invalid Canadian Postal Code');
            return;
        }
    }

    var registration = {
        member_id       :   user.member_id,
        email 			:	$('input#Email').val(),
        street	 		:	$('input#Street').val(),
        city 			: 	$('input#City').val(),
        province 		: 	zone === "Canada" ? province : null,
        state 		    : 	zone === "USA" ? state : null,
        country         :   zone !== "Canada" && zone !== "USA" && zone !== "Australia" ? $('input#Country').val() : null,
        zone            :   zone,
        zip 			: 	$('input#Zip').val(),
        phone 			: 	$('input#Phone').val(),
        phone_type 		:	$('input[name="phone_number_type"]:checked').val(),
        password 		:	$('input#Password').val()
    };

    if(!registration.email || registration.email !== $('input#ConfirmEmail').val()){
        return showError("Email is missing or does not match with Confirm Email");
    }
    else if(!registration.street || !registration.city || !registration.zone || !registration.zip){
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

    var obj = JSON.stringify(registration);

    $.ajax({
        url : '/api/update-user',
        method : 'POST',
        contentType : 'application/json',
        data : obj,
        dataType : 'json',
    }).done(function(data){
        // Log User In
        if(data.success){
            showSuccess("Update Succeeded!", function(){
                window.location.href = "/member";
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


// Trigger zone state dropdown
setTimeout(function() {
    $($('#zone').find(`a[value="${user.zone}"]`)).trigger('click');
    $($('#state').find(`a[value="${user.state}"]`)).trigger('click');
    $($('#province').find(`a[value="${user.province}"]`)).trigger('click');
    $(`input[value="${user.phone_type}"]`).prop("checked", true);
}, 500);


if(user.membership_status == null || new Date(user.membership_status) < new Date()){
    $('#membership-status').html("<div>Membership Status: Inactive <span><a href='/member-activation'>Activate Now</a></span></div>");
}
else{
    var exp = new Date(user.membership_status);
    $('#membership-status').html(`<div>Membership Status: Active until <span>${exp.getFullYear()}-${exp.getMonth()+1}-${exp.getDate()}</span></div>`);
}


$(document).ready(function() {
    if(!managedMessages || managedMessages.length == 0){
        return;
    }

    var tableData = "<tr><th>Message ID</th><th>URL</th><th>Action</th></tr>"
    managedMessages.forEach(function(message, idx){
        tableData += ("<tr>");
        tableData += (`<td>${message.message_id}</td>`);
        tableData += (`<td><input update_id=${idx} value="${message.link}" /></td>`);
        tableData += (`<td><button class="update" update_id=${idx} message_id="${message.message_id}">Update</button></td>`);
        tableData += (`</tr>`);
    });

    $('#managed-message-section').append(`<h3>Managed Message Purchased:</h3><table class="table">${tableData}</table>`);


    $("button.update").on('click', function(e){
        e.preventDefault();
        var thisButton = $(this);
        var updateID = thisButton.attr("update_id");
        var newLink = $(`input[update_id="${updateID}"]`).val()
        $.ajax({
            url : '/api/message',
            method : 'PUT',
            contentType : 'application/json',
            data : JSON.stringify({
                message_id: thisButton.attr('message_id'),
                link: newLink,
            }),
            dataType : 'json'
        }).done(function(data) {
            if (data.success) {
                swal({
                    title: "",
                    text: `Successfully updated message URL to ${newLink}`,
                    type: "success",
                    showCancelButton: false,
                    confirmButtonText: "Ok",
                    closeOnConfirm: false,
                }, function(isConfirm){
                    window.location.href = "/account";
                });
            }
            else{
                showError(data.fail);
            }
        }).fail(function(jqXHR, textStatus){
            showError("Error updating the message link, please try again later");
        });
    });
});

console.log("managedMessages", managedMessages);
