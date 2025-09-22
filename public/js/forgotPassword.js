var payload = {
  email: "",
};

$('#submit').on('click', function(e) {
  e.preventDefault();
  payload.email = $('#email').val();

  if(payload.email == ""){
    return showError("Email  cannot be empty");
  }

  var request = JSON.stringify(payload);

  $.ajax({
    url : '/api/password-recovery-email',
    method : 'POST',
    contentType : 'application/json',
    data : request,
    dataType : 'json'
  }).done(function(data){
    if(data.fail){
      return showError(data.fail);
    }
    else{
      return showSuccess("We have sent an email to " + payload.email + ". Please also make sure to check your junk mailbox.")
    }
  });
});