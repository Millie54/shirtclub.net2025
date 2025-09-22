$(document).ready(function() {
  console.log(messageID);
  console.log(user);
});

$('button#submit').on('click', function(e){
  e.preventDefault();
  var newLink = $('#input').val();
  $.ajax({
    url : '/api/message',
    method : 'PUT',
    contentType : 'application/json',
    data : JSON.stringify({
      message_id: messageID,
      link: newLink,
    }),
    dataType : 'json'
  }).done(function(data) {
    if (data.success) {
      swal({
        title: "",
        text: `Successfully updated message URL to ${newLink}`,
        type: "success",
        showCancelButton: false,
        confirmButtonText: "Ok",
        closeOnConfirm: false,
      }, function(isConfirm){
        window.location.href = "/member";
      });
    }
    else{
      showError(data.fail);
    }
  }).fail(function(jqXHR, textStatus){
    showError("Error updating the message link, please try again later");
  });
});