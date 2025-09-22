var blood_type = user.blood_type;

$('.dropdown-menu#blood-type a').on('click', function(){
	$('#selectBloodType').html($(this).html() + '<span class="caret"></span>');
	blood_type = $(this).attr('value');
});

$('[data-toggle="tooltip"]').tooltip();


// loading data from user object passed down from server
var pic1 = user.pic1;
var pic2 = user.pic2;
var pic3 = user.pic3;
$('input[name="show_first_name"][value="' + user.show_first_name + '"]').prop("checked", true);
$('input[name="show_last_name"][value="' + user.show_last_name + '"]').prop("checked", true);
$('input[name="show_nick_name"][value="' + user.show_nick_name + '"]').prop("checked", true);
$('input[name="show_medical_alert"][value="' + user.show_medical_alert + '"]').prop("checked", true);
$('input[name="show_blood_type"][value="' + user.show_blood_type + '"]').prop("checked", true);
$('input[name="show_message"][value="' + user.show_message + '"]').prop("checked", true);
$('input[name="show_birthday"][value="' + user.show_birthday + '"]').prop("checked", true);
$('input[name="show_marital"][value="' + user.show_marital + '"]').prop("checked", true);
$('input[name="show_meeting"][value="' + user.show_meeting + '"]').prop("checked", true);
$('input[name="show_school"][value="' + user.show_school + '"]').prop("checked", true);
$('input[name="show_occupation"][value="' + user.show_occupation + '"]').prop("checked", true);
$('input[name="show_like"][value="' + user.show_like + '"]').prop("checked", true);
$('input[name="show_dislike"][value="' + user.show_dislike + '"]').prop("checked", true);
$('input[name="show_buy_me"][value="' + user.show_buy_me + '"]').prop("checked", true);
$('input[name="show_cheer"][value="' + user.show_cheer + '"]').prop("checked", true);
$('input[name="show_prediction"][value="' + user.show_prediction + '"]').prop("checked", true);
$('input[name="show_pic"][value="' + user.show_pic + '"]').prop("checked", true);
$('input[name="show_twitter"][value="' + user.show_twitter + '"]').prop("checked", true);
$('input[name="show_instagram"][value="' + user.show_instagram + '"]').prop("checked", true);
$('input[name="show_facebook"][value="' + user.show_facebook + '"]').prop("checked", true);
$('input[name="show_youtube"][value="' + user.show_youtube + '"]').prop("checked", true);
$('input[name="show_xray_vision"][value="' + user.show_xray_vision + '"]').prop("checked", true);



if(user){

	// var user = JSON.parse(localStorage.user);

	$('#first_name').val(user.first_name);
	$('#last_name').val(user.last_name);
	$('#nick_name').val(user.nick_name);
	$('#medical_alert').val(user.medical_alert);
	$('#message').val(user.message);
	$('#birthday').val(user.birthday);
	$('#marital').val(user.marital);
	$('#meeting').val(user.meeting);
	$('#school').val(user.school);
	$('#occupation').val(user.occupation);
	$('#like').val(user.like);
	$('#dislike').val(user.dislike);
	$('#buy_me').val(user.buy_me);
	$('#cheer').val(user.cheer);
	$('#prediction').val(user.prediction);
	$('#twitter').val(user.twitter);
	$('#instagram').val(user.instagram);
	$('#facebook').val(user.facebook);
	$('#youtube').val(user.youtube);
	$('#xray_vision').val(user.xray_vision);
	$('#selectBloodType').html(user.blood_type || "Select" + '<span class="caret"></span>');

	pic1 = user.pic1;
	pic2 = user.pic2;
	pic3 = user.pic3;

	blood_type = user.blood_type;

	$('input[name="show_first_name"][value="' + user.show_first_name + '"]').prop("checked", true);
	$('input[name="show_last_name"][value="' + user.show_last_name + '"]').prop("checked", true);
	$('input[name="show_nick_name"][value="' + user.show_nick_name + '"]').prop("checked", true);
	$('input[name="show_medical_alert"][value="' + user.show_medical_alert + '"]').prop("checked", true);
	$('input[name="show_message"][value="' + user.show_message + '"]').prop("checked", true);
	$('input[name="show_birthday"][value="' + user.show_birthday + '"]').prop("checked", true);
	$('input[name="show_marital"][value="' + user.show_marital + '"]').prop("checked", true);
	$('input[name="show_meeting"][value="' + user.show_meeting + '"]').prop("checked", true);
	$('input[name="show_school"][value="' + user.show_school + '"]').prop("checked", true);
	$('input[name="show_occupation"][value="' + user.show_occupation + '"]').prop("checked", true);
	$('input[name="show_like"][value="' + user.show_like + '"]').prop("checked", true);
	$('input[name="show_dislike"][value="' + user.show_dislike + '"]').prop("checked", true);
	$('input[name="show_buy_me"][value="' + user.show_buy_me + '"]').prop("checked", true);
	$('input[name="show_cheer"][value="' + user.show_cheer + '"]').prop("checked", true);
	$('input[name="show_prediction"][value="' + user.show_prediction + '"]').prop("checked", true);
	$('input[name="show_pic"][value="' + user.show_pic + '"]').prop("checked", true);
	$('input[name="show_twitter"][value="' + user.show_twitter + '"]').prop("checked", true);
	$('input[name="show_instagram"][value="' + user.show_instagram + '"]').prop("checked", true);
	$('input[name="show_facebook"][value="' + user.show_facebook + '"]').prop("checked", true);
	$('input[name="show_youtube"][value="' + user.show_youtube + '"]').prop("checked", true);
	$('input[name="show_xray_vision"][value="' + user.show_xray_vision + '"]').prop("checked", true);
	$('input[name="show_blood_type"][value="' + user.show_blood_type + '"]').prop("checked", true);
}

var pictureUploaded = 0;

var dropZone;

$(document).ready(function(){

	$('#pic').dropzone({
		url: "/image",
		maxFilesize: 1000, 
		autoProcessQueue: true,
		addRemoveLinks: true,
		paramName: "uploadfile",
		maxThumbnailFilesize: 1000,
		dictMaxFilesExceeded: "This file can not be uploaded, because you have 3 files already",
		maxFiles: 3,
		init: function() {

			var self = this;
			dropZone = this;
			self.options.addRemoveLinks = true;

			$.get('/self/pictures', function(data) {
				pictureUploaded = data.pictures.length;
				// self.options.maxFiles = 3 - pictureUploaded;
				adjustPicCapacity();
				synPicDbRecordWithStorage(data.pictures);
				for (var i = 0; i < data.pictures.length; i++) {
					var mockFile = {
						name: data.pictures[i],
						type: 'image/jpeg',
					};
					self.options.addedfile.call(self, mockFile);
					self.options.thumbnail.call(self, mockFile, `/client/${user.member_id}/pic/${data.pictures[i]}`);
				}
			});

			this.on('success', function(file, json) {
				fileAdded(json.file.name);
			});

			this.on('removedfile', function(file, json){
				var fileName = file.xhr ? JSON.parse(file.xhr.response).file.name : file.name;
				fileDeleted(fileName);
			})
		}
	});
})

function fileAdded(name){

	if(pic1 == ''){
		pic1 = name;
		pictureUploaded++;
		adjustPicCapacity();
		return;
	}
	if(pic2 == ''){
		pic2 = name;
		pictureUploaded++;
		adjustPicCapacity();
		return;
	}
	if(pic3 == ''){
		pic3 = name;
		pictureUploaded++;
		adjustPicCapacity();
		return;
	}
};

function fileDeleted(name){

	if(pic1 == name){
		pic1 = '';
		pictureUploaded--;
		adjustPicCapacity();
		return;
	}
	if(pic2 == name){
		pic2 = '';
		pictureUploaded--;
		adjustPicCapacity();
		return;
	}
	if(pic3 == name){
		pic3 = '';
		pictureUploaded--;
		adjustPicCapacity();
		return;
	}
};

function adjustPicCapacity(){
	// mock files don't count as capacity;
	var numberOfMockFiles = pictureUploaded - dropZone.files.length;
	dropZone.options.maxFiles = 3 - numberOfMockFiles;
}

function synPicDbRecordWithStorage(files){
	if(files.length == 0){
		pic1 = '';
		pic2 = '';
		pic3 = '';
	}
	else if(files.length == 1){
		pic1 = files[0];
		pic2 = '';
		pic3 = '';
	}
	else if(files.length == 2){
		pic1 = files[0];
		pic2 = files[1];
		pic3 = '';
	}
	else if(files.length == 3){
		pic1 = files[0];
		pic2 = files[1];
		pic3 = files[2];
	}
}

$('#submit').on('click', function(){

	var message = $('#message').val();
	var numWords = message.split(' ').length;

	if(numWords > 100){
		swal("", "Message can not exceed 100 words", "warning");
		return;
	}

	var youtubeLink = $('#youtube').val();

	if(youtubeLink.length > 0 && !new RegExp('^(http(s)?:\\/\\/)?((w){3}.)?youtu(be|.be)?(\\.com)?\\/.+').test(youtubeLink)){
		swal("", "Please enter a valid youtube link", "warning");
		return;
	}

	var request = {
		first_name : $('#first_name').val(),
		last_name : $('#last_name').val(),
		nick_name : $('#nick_name').val(),
		medical_alert : $('#medical_alert').val(),
		blood_type: blood_type,
		message : message,
		birthday : $('#birthday').val(),
		marital : $('#marital').val(),
		meeting : $('#meeting').val(),
		school : $('#school').val(),
		occupation : $('#occupation').val(),
		like : $('#like').val(),
		dislike : $('#dislike').val(),
		buy_me : $('#buy_me').val(),
		cheer : $('#cheer').val(),
		prediction : $('#prediction').val(),
		twitter : $('#twitter').val(),
		instagram : $('#instagram').val(),
		facebook : $('#facebook').val(),
		youtube : $('#youtube').val(),
		xray_vision : $('#xray_vision').val(),

		pic1 : pic1,
		pic2 : pic2,
		pic3 : pic3,

		show_first_name : $('input[name="show_first_name"]:checked').val(),
		show_last_name : $('input[name="show_last_name"]:checked').val(),
		show_nick_name : $('input[name="show_nick_name"]:checked').val(),
		show_medical_alert : $('input[name="show_medical_alert"]:checked').val(),
		show_blood_type : $('input[name="show_blood_type"]:checked').val(),
		show_message : $('input[name="show_message"]:checked').val(),
		show_birthday : $('input[name="show_birthday"]:checked').val(),
		show_marital : $('input[name="show_marital"]:checked').val(),
		show_meeting : $('input[name="show_meeting"]:checked').val(),
		show_school : $('input[name="show_school"]:checked').val(),
		show_occupation : $('input[name="show_occupation"]:checked').val(),
		show_like : $('input[name="show_like"]:checked').val(),
		show_dislike : $('input[name="show_dislike"]:checked').val(),
		show_buy_me : $('input[name="show_buy_me"]:checked').val(),
		show_cheer : $('input[name="show_cheer"]:checked').val(),
		show_prediction : $('input[name="show_prediction"]:checked').val(),
		show_pic : $('input[name="show_pic"]:checked').val(),
		show_twitter : $('input[name="show_twitter"]:checked').val(),
		show_instagram : $('input[name="show_instagram"]:checked').val(),
		show_facebook : $('input[name="show_facebook"]:checked').val(),
		show_youtube : $('input[name="show_youtube"]:checked').val(),
		show_xray_vision : $('input[name="show_xray_vision"]:checked').val()
	};

	var obj = JSON.stringify(request);

	$.ajax({
		url : '/profile',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		// Log User In
		if(data.success){
			localStorage.user = JSON.stringify(data.user);
			if(!isMembershipActive(data.user.membership_status)){
				return swal({
					title: "",
					html: true,
					text: "<h4>Pay your membership fee ($8.00 per year) to make your shirt active. <a href='/member-activation'>Pay Now</a></h4>",
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					if (isConfirm) {
						window.location.href = "/member";
					}
					else {
						window.location.href = "/member";
					}
				});
			}
			swal({
				title: "",
				text: "User Profile Updated",
				type: "success",
				showCancelButton: false,
				confirmButtonText: "Ok",
				closeOnConfirm: false,
			}, function(isConfirm){
				if (isConfirm) {
					window.location.href = "/member";
				}
				else {
					window.location.href = "/member";
				}
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
				if (isConfirm) {
					window.location.href = "/member";
				}
				else {
					window.location.href = "/member";
				}
			});
		}

	}).fail(function(){
		console.log('AJAX Call Failed');
		window.location.href = "/member";
	});

});
