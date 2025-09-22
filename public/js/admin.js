var pic1 = '';
var pic2 = '';
var pic3 = '';
var content = null;
var link = null;
var contact = null;
var iwt = null;
var ibt = null;
var address = '';
var lat;
var lng;
var message_id;

$(document).ready(function(){

	$('#pic').dropzone({ 
		url: "/vendor/image/",
		maxFilesize: 100,
		autoProcessQueue: true,
		addRemoveLinks: true,
		paramName: "uploadfile",
		maxThumbnailFilesize: 5,
		dictMaxFilesExceeded: "This file can not be uploaded, because you have 3 files already",
		maxFiles: 3,
		init: function() {

			var self = this;
			dropZone = this;
			// config
			self.options.addRemoveLinks = true;

			this.on('success', function(file, json) {
				fileAdded(json.file.name);
			});

			this.on('addedfile', function(file, json) {
				//console.log(file);
			});

			this.on('drop', function(file) {
			});

			this.on('removedfile', function(file){
				$.ajax({
					url: '/vendor/image/' + file.name,
					type: 'DELETE',
					success: function(result) {
						console.log(result);
						fileDeleted(file.name);
					}
				});
			})
		}
	});


	$('#insertMap').on('click', function(e){
		e.preventDefault();

		address = $('#address').val();

		var formattedAddress = address.replace(/\s/g, "+");
		validateAddress(formattedAddress);

	});

	$('#submit').on('click', function(e){
		e.preventDefault();

		iwt = $('#iwt').val();
		ibt = $('#ibt').val();

		if(iwt != '' && ibt != ''){
			swal("You can only assign either IWT or IBT");
			return;
		}

		if(iwt == '' && ibt == ''){
			swal("Please enter at least either IWT or IBT");
			return;
		}

		if(iwt != ''){
			message_id = iwt;
		}
		else if(ibt != ''){
			message_id = ibt;
		}

		var request = {
			pic1 : pic1,
			pic2 : pic2,
			pic3 : pic3,
			content : $('#content').val(),
			link : $('#link').val(),
			contact : $('#contact').val(),
			message_id : message_id,
			address : $('#address').val(),
			lat : lat,
			lng : lng
		}

		var obj = JSON.stringify(request);

		$.ajax({
			url : '/vendor',
			method : 'POST',
			contentType : 'application/json',
			data : obj,
			dataType : 'json',
		}).done(function(data){

			// Log User In
			if(data.success){
				swal({
					title: "",
					text: "Success! This message id is: " + message_id,
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/member";
				});
			}
			else{
				if(data.err.code == "ER_DUP_ENTRY"){
					swal({
						title: "",
						text: "Duplicate Entry of IWT or IBT Message Id",
						type: "warning",
						showCancelButton: false,
						confirmButtonText: "Ok",
						closeOnConfirm: false,
					}, function(isConfirm){
						window.location.href = "/admin";
					});
				}
				else{
					swal({
						title: "",
						text: "Something's Wrong",
						type: "warning",
						showCancelButton: false,
						confirmButtonText: "Ok",
						closeOnConfirm: false,
					}, function(isConfirm){
						window.location.href = "/admin";
					});
				}
			}

		}).fail(function(){
			console.log('AJAX Call Failed');
			window.location.href = "/member";
		});

	});

})

var fileAdded = function(name){

	if(pic1 == ''){
		pic1 = name;
		return;
	}
	if(pic2 == ''){
		pic2 = name;
		return;
	}
	if(pic3 == ''){
		pic3 = name;
		return;
	}
};

var fileDeleted = function(name){

	if(pic1 == name){
		pic1 = '';
		return;
	}
	if(pic2 == name){
		pic2 = '';
		return;
	}
	if(pic3 == name){
		pic3 = '';
		return;
	}
};


var validateAddress = function(address){
	$.ajax({
		url : 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyBLCN1bX3bMr0FTpOx72fgCbyyrjpAq4Eo',
		method : 'GET',
	}).done(function(data){
		if(data.status == 'OK'){
			lat = data.results[0].geometry.location.lat;
			lng = data.results[0].geometry.location.lng;
			initMap();
		}
		else{
			console.log(data);
		}
	}).fail(function(){
		console.log('AJAX Call Failed');
	});
};

var initMap = function(){

	$('#map').css('display', 'block');

	var myLatLng = {lat: lat, lng: lng};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: address
	});
};


// Manage User Membership
var tableData = ""
users.forEach(function(usr, idx){
	tableData += ("<tr>");
	tableData += (`<td>${usr.member_id}</td>`);
	tableData += (`<td>${usr.first_name}</td>`);
	if(!usr.membership_status || new Date(usr.membership_status) < new Date()){
		tableData += (`<td>Inactive</td>`);
		tableData += (`<td>Activate for <input class="add-day-input"></input> days <div id="${usr.member_id}" class="btn btn-primary btn-sm add-day-btn" >Activate</div></td>`);
	}
	else {
		var expiration = new Date(usr.membership_status);
		tableData += (`<td>Active Until: ${expiration.getFullYear()}-${expiration.getMonth()+1}-${expiration.getDate()}</td>`);
		tableData += (`<td><div class="btn btn-primary btn-sm deactivate-btn" id="${usr.member_id}">Deactivate Now</div></td>`);
	}
	tableData += (`</tr>`);
});

$('table#user-list').append(tableData);

$('.deactivate-btn').on('click', function (e) {
	e.preventDefault();
	var member_id = $(this).attr('id');
	$.ajax({
		url: '/api/membership-status',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({
			member_id: member_id,
			membership_status: null,
		})
	}).done(function(data) {
		if(data.success){
			showSuccess("Update Succeeded", function(){
				location.reload();
			});
		} else {
			showError(data);
		}
	});
});

$('.add-day-btn').on('click', function (e) {
	e.preventDefault();
	var member_id = $(this).attr('id');
	var days = $(this).siblings('input').val();
	if(isNaN(days)){
		return showError("day must be a number");
	}
	$.ajax({
		url: '/api/membership-status',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({
			member_id: member_id,
			membership_status: new Date().setDate(new Date().getDate() + parseInt(days)),
		})
	}).done(function(data) {
		if(data.success){
			showSuccess("Update Succeeded", function(){
				location.reload();
			});
		} else {
			showError(data);
		}
	});
});