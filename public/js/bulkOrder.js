var form = {};

$('.dropdown-menu a').on('click', function(){
  $(this).parent().parent().siblings().html($(this).html() + '<span class="caret"></span>');
  var formProperty = $(this).parent().attr('form-property');
  var value = $(this).attr('value');
  form[formProperty] = value;
});

function emailBodyBuilder(){
  var body = "<html>";
  for(var key in form){
    body += "<div>";
    body += "<span>" + key + ": </span>";
    body += "<span>" + form[key] + "</span>";
    body += "</div>";
  }
  body += "</html>";
  return body;
}

$('button#form').on('click', function(){
  $('.textInput').each(function(){
    var formProperty = $(this).attr('form-property');
    var value = $(this).val();
    form[formProperty] = value;
  });

  var recipient = 'info@delcoin.com';
  var subject = '[ShirtClub.net] Bulk Order Request'

  var request = JSON.stringify({
    email : {
      recipient: recipient,
      subject: subject,
      body: emailBodyBuilder(),
    }
  });

  $.ajax({
    url : 'api/send-email',
    method : 'POST',
    contentType : 'application/json',
    data : request,
    dataType : 'json'
  }).done(function(data){
    //Redirect ot member page
    if(data.success){
      swal({
        title: "",
        text: "Thank you. A Shirt Club representative will contact you soon to assist with your order.",
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
});