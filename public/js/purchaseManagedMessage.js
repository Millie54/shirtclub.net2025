var stripe = Stripe('pk_live_8uqHLTYZ9gn0fUMHTJkhH5FW');

$('#pay').on('click', function(e) {
  e.preventDefault();
  renderPayment();
});

function renderPayment(){
  $.ajax({
    url : '/api/transaction',
    method : 'POST',
    contentType : 'application/json',
    dataType : 'json'
  }).done(function(data) {
    if (data.success) {
      var host = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_1HNq7PBOfxFhYn1aBsgGMvao', quantity: 1}],
        mode: 'payment',
        successUrl: `${host}/checkout/managed-message?member_id=${user.member_id}&hash=${data.hash}`,
        cancelUrl: `${host}/purchase-managed-message`,
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
