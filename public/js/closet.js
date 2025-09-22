// var loadedShirt = {};
var shirtIDMap = {};
var editDropzoneInstance = {};

$(document).ready(function(){

	var newImagePath = "";
	var editShirtNewImagePath = "";
	var privacy = user.show_closet ? "public" : "private";

	// check privacy
	if(user.show_closet) {
		$("#privacy_public").prop("checked", true);
	} else {
		$("#privacy_private").prop("checked", true);
	}

	$('input:radio').on('click', function() {
		if($(this).val() == privacy){
			return;
		}
		privacy = $(this).val();
		$.ajax({
			url : '/api/closet/privacy',
			method : 'PUT',
			contentType : 'application/json',
			data : JSON.stringify({
				show_closet: privacy === "private" ? 0 : 1,
			}),
			dataType : 'json'
		}).done(function(data){
			if(data.success){
				swal({
					title: "",
					text: "Update Successful!",
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/closet";
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
					window.location.href = "/closet";
				});
			}
		}).fail(function(jqXHR, textStatus){
			alert('DB Connection Error');
			window.location.href = "/closet";
		});
	});


	// Fetch all shirts
	$.ajax({
		url : '/api/closet/shirt/all',
		method : 'GET'
	}).done(function(data){
		if(!data.success){
			showError("Failed to fetch closet shirts");
		}
		var tableData = data.shirts.length > 0 ? "<tr><th>Edit Shirt</th><th>Delete Shirt</th><th>Symbol</th><th>Message Number</th><th>Description</th><th>Picture</th></tr>" : "";
		for(var i = 0; i < data.shirts.length; i++){
			var shirt = data.shirts[i];
			shirtIDMap[shirt.id] = shirt;
			tableData += ("<tr>");
			tableData += (`<td><button id="edit-shirt-button" shirt-id="${shirt.id}">Edit</button></td>`);
			tableData += (`<td><button id="delete-shirt-button" shirt-id="${shirt.id}">Delete</button></td>`);
			tableData += (`<td><div class="shirt-symbol">${shirt.symbol}</div></td>`);
			tableData += (`<td><div>${shirt.message_number}</div></td>`);
			tableData += (`<td><div>${shirt.description}</div></td>`);
			if(shirt.pic){
				tableData += (`<td><img style="max-width: 100px;" src="/client/${user.member_id}/pic/${shirt.pic}" /></td>`);
			} else {
				tableData += (`<td>No Pic</td>`);
			}
			tableData += (`</tr>`);
		}
		$('table#existing-shirts').html(tableData);
	}).fail(function(jqXHR, textStatus){
		alert('DB Connection Error');
		window.location.href = "/closet";
	});

	// Add new shirt pic dropzone
	$('#new-pic').dropzone({
		url: "/image",
		maxFilesize: 10,
		autoProcessQueue: true,
		addRemoveLinks: true,
		paramName: "uploadfile",
		maxThumbnailFilesize: 10,
		dictMaxFilesExceeded: "Max 1 File",
		maxFiles: 1,
		init: function() {
			var self = this;
			// dropZone = this;
			self.options.addRemoveLinks = true;

			this.on('success', function(file, json) {
				newImagePath = json.file.name;
			});

			this.on('removedfile', function(file){
				$.ajax({
					url: '/image/' + file.name,
					type: 'DELETE',
					success: function(result) {
						if(newImagePath == file.name){
							newImagePath = "";
						}
					}
				});
			});
		}
	});


	// Delete shirt button clicked
	$('body').on('click', '#delete-shirt-button', function() {
		var shirtID = $(this).attr('shirt-id');
		$.ajax({
			url : '/api/closet/shirt/' + shirtID,
			method : 'DELETE'
		}).done(function(data){
			if(data.success){
				swal({
					title: "",
					text: "Delete Successful!",
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/closet";
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
					window.location.href = "/closet";
				});
			}
		}).fail(function(jqXHR, textStatus){
			alert('DB Connection Error');
			window.location.href = "/closet";
		});
	});

	// Confirm edit shirt button clicked
	$('body').on('click', '#edit-shirt-update-button', function() {
		var newDescription = $('#edit-shirt-description').val();
		if(newDescription.length > 100){
			return new showError(`Description should be less than 100 characters, you have entered ${newDescription.length} characters`);
		}
		var shirtID = $(this).attr('shirt-id');
		var requestData = JSON.stringify({
			id: shirtID,
			symbol: $('#edit-shirt-symbol option:selected').val(),
			description: newDescription,
			pic: editShirtNewImagePath,
			message_number: $('#edit-message-number').val()
		});

		$.ajax({
			url : '/api/closet/shirt',
			method : 'PUT',
			contentType : 'application/json',
			data : requestData,
			dataType : 'json'
		}).done(function(data){
			if(data.success){
				swal({
					title: "",
					text: "Update Successful!",
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/closet";
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
					window.location.href = "/closet";
				});
			}
		}).fail(function(jqXHR, textStatus){
			alert('DB Connection Error');
			window.location.href = "/closet";
		});

	});

	$('#edit-shirt-modal').on('hidden.bs.modal', function () {
		editDropzoneInstance.removeAllFiles();
		editDropzoneInstance.destroy();
		$('div.dz-preview').remove();
	});

	// Edit shirt button clicked
	$('body').on('click', '#edit-shirt-button', function () {
		var shirtID = $(this).attr('shirt-id');
		var curShirt = shirtIDMap[shirtID];
		$(`#edit-shirt-symbol > option[value="${curShirt.symbol}"]`).attr('selected', 'selected');
		$(`#edit-shirt-description`).val(curShirt.description);
		$(`#edit-message-number`).val(curShirt.message_number);
		$(`#edit-shirt-update-button`).attr('shirt-id', shirtID);
		editDropzoneInstance = new Dropzone('#edit-shirt-pic', {
		// $('#edit-shirt-pic').dropzone({
			url: "/image",
			maxFilesize: 10,
			autoProcessQueue: true,
			addRemoveLinks: true,
			paramName: "uploadfile",
			maxThumbnailFilesize: 10,
			dictMaxFilesExceeded: "Max 1 File",
			maxFiles: 1,
			init: function() {
				console.log('init');
				var self = this;
				self.options.addRemoveLinks = true;
				if(curShirt.pic){
					var mockFile = {
						name: curShirt.pic,
						type: 'image/jpeg',
					};
					self.options.maxFiles = 0;
					console.log(self);
					self.options.addedfile.call(self, mockFile);
					self.options.thumbnail.call(self, mockFile, `/client/${user.member_id}/pic/${curShirt.pic}`);
					editShirtNewImagePath = curShirt.pic;
				}

				this.on('success', function(file, json) {
					editShirtNewImagePath = json.file.name;
				});

				this.on('removedfile', function(file){
					$.ajax({
						url: '/image/' + file.name,
						type: 'DELETE',
						success: function(result) {
							self.options.maxFiles = 1;
							if(editShirtNewImagePath == file.name){
								editShirtNewImagePath = "";
							}
						}
					});
				});
			}
		});

		$('#edit-shirt-modal').modal({ show: true});
	});

	// Add new shirt button clicked
	$('#add-new-shirt').on('click', function() {
		$('div#new-shirt-section').css('display', 'inline');
	});

	// Confirm new shirt button clicked
	$('#create-new-shirt-button').on('click', function() {

		var newShirtDescription = $('#description-text').val();
		if(newShirtDescription.length > 100){
			return new showError(`Description should be less than 100 characters, you have entered ${newShirtDescription.length} characters`);
		}

		var requestData = JSON.stringify({
			symbol: $('#new-symbol option:selected').val(),
			description: $('#description-text').val(),
			message_number: $('#new-message-number').val(),
			pic: newImagePath,
		});
		$.ajax({
			url : '/api/closet/shirt',
			method : 'POST',
			contentType : 'application/json',
			data : requestData,
			dataType : 'json'
		}).done(function(data){
			if(data.success){
				swal({
					title: "",
					text: "You have successfully created a shirt in your closet",
					type: "success",
					showCancelButton: false,
					confirmButtonText: "Ok",
					closeOnConfirm: false,
				}, function(isConfirm){
					window.location.href = "/closet";
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
					window.location.href = "/closet";
				});
			}
		}).fail(function(jqXHR, textStatus){
			alert('DB Connection Error');
			window.location.href = "/closet";
		});
	});
});
