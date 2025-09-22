var image = '';
var stripe = Stripe('pk_live_8uqHLTYZ9gn0fUMHTJkhH5FW');

$('#pay').on('click', function(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Warning',
    text: "Check to make sure that all information in your Standard Message is correct before purchasing. Standard Message content CAN ONLY BE EDITED once purchased by paying Enhanced Message fees.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, I am sure. Proceed to checkout!',
    cancelButtonText: 'Let me go back and modify'
  }).then((result) => {
    if (result.value) {
      renderPayment();
    }
  })
});

function renderPayment(){
  var content = $('#message').val();
  var numWords = content.split(' ').length;

  if(numWords > 150){
    showError("Message can not exceed 150 words");
    return;
  }

  var data = {
    content : content,
    link : $('#link').val(),
    image : image,
  }

  localStorage.setItem("shirtclub/standard_message_purchase", JSON.stringify(data));

  $.ajax({
    url : '/api/transaction',
    method : 'POST',
    contentType : 'application/json',
    dataType : 'json'
  }).done(function(data) {
    if (data.success) {
      var host = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_1HNq7LBOfxFhYn1aZa3dXorj', quantity: 1}],
        mode: 'payment',
        successUrl: `${host}/checkout/standard-message?member_id=${user.member_id}&hash=${data.hash}`,
        cancelUrl: `${host}/purchase-standard-message`,
      }).then(function (result) {
        if (result.error) {
          showError(result.error.message);
        }
      });
    }
    else{
      showError(data.fail);
    }
  }).fail(function(jqXHR, textStatus){
    showError("Error updating the message link, please try again later");
  });
}

function addImage(link){
  if(image == ''){
    image = link;
  }
}

function removeImage(link){
  if(image == link){
    image = '';
  }
}

var dropZone;

$(document).ready(function(){

  $('#pic').dropzone({
    url: "/image",
    maxFilesize: 10,
    autoProcessQueue: true,
    addRemoveLinks: true,
    paramName: "uploadfile",
    maxThumbnailFilesize: 10,
    dictMaxFilesExceeded: "This file can not be uploaded, because you have 3 files already",
    maxFiles: 1,
    init: function() {

      var self = this;
      dropZone = this;
      // config
      self.options.addRemoveLinks = true;

      this.on('success', function(file, json) {
        var path = '/client/' + user.member_id + '/pic/' + json.file.name;
        addImage(path);
      });

      this.on('addedfile', function(file, json) {
        //console.log(file);
      });

      this.on('drop', function(file) {
      });

      this.on('removedfile', function(file){
        $.ajax({
          url: '/image/' + file.name,
          type: 'DELETE',
          success: function(result) {
            var path = '/client/' + memberId + '/pic/' + file.name;
            removeImage(path);
          }
        });
      })
    }
  });
})
