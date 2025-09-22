$('#form').on('submit', function (event){

	event.preventDefault();

	swal("Thank You!", "Redirecting your to home page", "success");
	setTimeout(function(){
		document.location.href= '/';
	},3000);
	
});