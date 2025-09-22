var debug = true;


// var pic1 = '';
// var pic2 = '';
// var pic3 = '';
var image = '';

// When post checkout is confirmed; Stripe handling;

var handler = StripeCheckout.configure({
	key: 'pk_live_XkXTQSPDAhn0uFc9fsxfJMox',
	image: 'http://uxrepo.com/static/icon-sets/linecons/svg/t-shirt.svg',
	token: function(token) {
	// Use the token to create the charge with a server-side script.
	// You can access the token ID with `token.id`
	}
});


$('#pay').on('click', function(e) {

	var content = $('#message').val();
	var numWords = content.split(' ').length;
	
	if(numWords > 150){
		swal("", "Message can not exceed 150 words", "warning");
		return;
	}

	var data = {
		content : content,
		link : $('#link').val(),
		image : image,
		// pic2 : pic2,
		// pic3 : pic3
	}

	var data = JSON.stringify(data);

	if(!debug){
		// Open Checkout with further options
		handler.open({
			name: 'ShirtClub.net',
			description: '',
			currency: "cad",
			amount: 15*100
		});
		e.preventDefault();
	}
	else{
		$.ajax({
			url : '/createMessage',
			method : 'POST',
			contentType : 'application/json',
			data : data,
			dataType : 'json'
		}).done(function(data){
			//Redirect ot member page
			if(data.success){
				swal({
					title: "",
					text: "You have successfully created a Shirt Message: " + data.message_id,
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/member";
				});
			}
			else{
				swal({
					title: "",
					text: "Something went wrong",
					type: "warning",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/member";
				});
			}
		}).fail(function(jqXHR, textStatus){
			alert('DB Connection Error');
			window.location.href = "/member";
		});
	}
	
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
	handler.close();
});


function addImage(link){
	if(image == ''){
		image = link;
	}
	// else if(pic2 == ''){
	// 	pic2 = link;
	// }
	// else if(pic3 == ''){
	// 	pic3 = link;
	// }
}

function removeImage(link){
	if(image == link){
		image = '';
	}
	// else if(pic2 == link){
	// 	pic2 = '';
	// }
	// else if(pic3 == link){
	// 	pic3 = '';
	// }
}

//var imagePath = '';
var dropZone;

$(document).ready(function(){

	$('#pic').dropzone({ 
		url: "/image",
		maxFilesize: 100,
		autoProcessQueue: true,
		addRemoveLinks: true,
		paramName: "uploadfile",
		maxThumbnailFilesize: 5,
		dictMaxFilesExceeded: "This file can not be uploaded, because you have 3 files already",
		maxFiles: 1,
		init: function() {

			var self = this;
			dropZone = this;
			// config
			self.options.addRemoveLinks = true;

			/*
			$.get('/image', function(data) {
				var files = JSON.parse(data).files;
				pictureUploaded = files.length;
				adjustPicCapacity();
				synPicDbRecordWithStorage(files);
				for (var i = 0; i < files.length; i++) {
					var mockFile = {
						name: files[i].name,
						size: files[i].size,
						type: 'image/jpeg'
					};
					self.options.addedfile.call(self, mockFile);
					self.options.thumbnail.call(self, mockFile, files[i].url);
				};
			});
			*/

			this.on('success', function(file, json) {
				var path = '/client/' + memberId + '/pic/' + json.file.name;
				addImage(path);
			});

			this.on('addedfile', function(file, json) {
				//console.log(file);
			});

			this.on('drop', function(file) {
			});

			this.on('removedfile', function(file){
				$.ajax({
					url: '/image/' + file.name,
					type: 'DELETE',
					success: function(result) {
						var path = '/client/' + memberId + '/pic/' + file.name;
						removeImage(path);
					}
				});
			})
		}
	});
})