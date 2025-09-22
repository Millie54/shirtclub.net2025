var payload = {
  email : "",
  newPassword: "",
  token: token,
};

$('#submit').on('click', function(e) {
  e.preventDefault();

  payload.email = $('#email').val();
  payload.newPassword = $('#password').val();

  if(payload.email == "" || payload.newPassword == ""){
    return showError("Email or Password cannot be empty");
  }

  var request = JSON.stringify(payload);

  $.ajax({
    url : '/api/reset-password',
    method : 'POST',
    contentType : 'application/json',
    data : request,
    dataType : 'json'
  }).done(function(data){
    if(data.fail){
      return showError(data.fail);
    }
    else{
      return showSuccess("Password Reset Succeeded!")
    }
  });
});