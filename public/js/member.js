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

	// removed by youraws
	//window.location.href = '/message/' + target;
	//confirm by youraws at 09-09-2025
	window.location.href = '/user/' + target;	
});


console.log(user);

var profileFilled = isProfiledFilled(user);
var memberActive = isMembershipActive(user.membership_status);
// Show hints
if(!profileFilled || !memberActive){
	var $display = $('div#display-hints');
	$display.append(`<h4>Next Step:</h4>`);
	if(!profileFilled){
		$display.append(`<h4>- Go to <a href="/profile">Manage Your Shirt</a> and fill in your Dynamic Form</h4>`);
	}
	if(!memberActive){
		$display.append(`<h4>- <a href="/member-activation">Pay your membership fee ($8.00 per year) to make your shirt active.</a></h4>`);
	}
	$display.append(`<hr />`);
}