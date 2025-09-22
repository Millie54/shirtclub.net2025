
/*
swal({
	title: "Error!",
	text: "Here's my error message!",
	type: "error",
	confirmButtonText: "Cool" 
});*/



$('input[name="board"]').change(function(){
	if ($(this).val() == 'yesBoard') {
		$('div#info').css('display', 'inline');
	}
	else{
		$('div#info').css('display', 'none');
	}
});


$('#form').on('submit', function (event){
	
	event.preventDefault();

	swal("Thank You!", "Redirecting your to home page", "success");
	setTimeout(function(){
		document.location.href= '/';
	},3000);
	
});