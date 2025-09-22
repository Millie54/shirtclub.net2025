var stripe = Stripe('pk_live_8uqHLTYZ9gn0fUMHTJkhH5FW');

$('#checkout').on('click', function(e){
   e.preventDefault();
    var host = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
    stripe.redirectToCheckout({
        lineItems: [{price: 'sku_HJJ56NSvuJFxYT', quantity: 1}],
        mode: 'payment',
        successUrl: host + '/checkout/membership?member_id=' + user.member_id,
        cancelUrl: host + '/member',
    }).then(function (result) {
        if (result.error) {
            showError(result.error.message);
        }
    });
});


// function sendConfirmationEmail(){
//     var email = `
//         <html>
//             <h3>Thank you for becoming a Shirt Club member.</h3>
//             <h3>It is time to start having Fun With Shirts!</h3>
//             <div>Please do the following things:</div>
//             <div>1. Download the Shirt Club app: <a href="https://apps.apple.com/us/app/shirtclub/id1451543103?ls=1" target="_blank">iOS</a> <a href="https://play.google.com/store/apps/details?id=com.shirtclubmobile&hl=en" target="_blank">Android</a></li></div>
//             <div>2. Tell 2 friends about Shirt Club and ask the 2 friends to tell 2 friends, etc.</div>
//             <div>3. Know the <a href="https://shirtclub.net/about" target="_blank">"Shirt Club Convention"</a>.</div>
//             <div>4. Visit - <a href="https://shirtclub.store">https://shirtclub.store</a></div>
//             <div>5. Like us on Facebook</div>
//             <div>6. Show us your shirts on Instagram.</div>
//             <div>7. Most Important: Have fun with your shirts!</div>
//         </html>
//     `;
//
//     var request = JSON.stringify({
//         email : {
//             recipient: user.email,
//             subject: "[ShirtClub.net] Order Confirmation",
//             body: email,
//         }
//     });
//
//     $.ajax({
//         url : 'api/send-email',
//         method : 'POST',
//         contentType : 'application/json',
//         data : request,
//         dataType : 'json'
//     }).done(function(data){
//         //Redirect ot member page
//         if(data.success){
//             //nada
//         }
//         else{
//             console.log("email sent failed!")
//         }
//     }).fail(function(jqXHR, textStatus){
//         //nada
//     });
// }
