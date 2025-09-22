$(document).ready(function() {
  var messageProps = localStorage.getItem("shirtclub/standard_message_purchase");
  $.ajax({
    url : '/createMessage',
    method : 'POST',
    contentType : 'application/json',
    data : messageProps,
    dataType : 'json'
  }).done(function(data){
    //Redirect ot member page
    if(data.success){
      swal({
        title: "",
        text: "You have successfully purchased a Standard Shirt Message: " + data.message_id,
        type: "success",
        showCancelButton: false,
        confirmButtonText: "Ok",
        closeOnConfirm: false,
      }, function(isConfirm){
        window.location.href = "/member";
      });
      localStorage.removeItem("shirtclub/standard_message_purchase");
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
});