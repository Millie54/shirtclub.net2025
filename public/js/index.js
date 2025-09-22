/*
 *
 * User Login AJAX
 * 
 */
$('#form').on('submit', function (event) {

	$('div.login_message').empty();

	event.preventDefault();

	var credential = {

		username : $('input#id').val(),
		password : $('input#password').val(),
		fromRegistration : 'true'
	}

	var _credential = JSON.stringify(credential);

	$.ajax({
		url : '/login',
		method : 'POST',
		contentType : 'application/json',
		data : _credential,
		dataType : 'json',
	}).done(function(data){
		//Redirect ot member page
		if(data.success){
			delete localStorage.user;
			window.location.href = "/member";
		}
		else{
			$('header').append('User Name or Password incorrect');
		}
	}).fail(function(){
		$('header#login').append('<div class="login_message" >User Name or Password incorrect</div>');
	})
});





/*
 *
 *
 * Search for a user ajax
 *
 *
 *
 */

// $('#submit').on('click', function(){
// 	var target = $('#search').val();
// 	if(target == '' || target.indexOf('/') >= 0 || target.indexOf('?') >= 0 ){
// 		swal("", "Please input valid membership number", "warning");
// 	}
// 	else{
// 		window.location.href = '/user/' + target;
// 	}
	
// });

/*
 *
 *
 * Search for a message ajax
 *
 *
 *
 */
$('#submitSearchMessage').on('click', function(){

	var target = $('#searchMessage').val();
	var invalidChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

	target = target.toLowerCase();

	if(target == '' || invalidChars.test(target)){
		swal("", "Please input a valid shirt message", "warning");
		return;
	}

	// var shirtMessageRegex = /^m[0-9]+/g;

	//window.location.href = '/message/' + target;
	
	//confirm by youraws at 09-09-2025
	window.location.href = '/user/' + target;	

	
});