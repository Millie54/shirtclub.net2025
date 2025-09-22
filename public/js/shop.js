$(document).ready(function(){
  // $.get( "/api/message/shirt/all", function(allMessages) {
  //   console.log(allMessages);
  // });

  $('.memberId').text(user.member_id);
});

var debug = true;

var cart = {
  print_id_type: undefined,
  print_id: undefined,
  gender: undefined,
  symbol: undefined,
  product: undefined,
  type: undefined,
  size: undefined,
  quantity: undefined,
  unit_price: undefined,
  total_price: undefined,
}
// Shopping item map

// var items = {
// 	woman : {
// 		vnt : 'w_vnt.jpg',
// 		cnt : 'w_cnt.jpg',
// 		lsc : 'w_lsc.jpg',
// 		pol : 'w_pol.jpg',
// 		sst : 'w_sst.jpg',
// 		hoo : 'w_hoo.jpg'
// 	},
// 	man : {
// 		vnt : 'm_vnt.jpg',
// 		cnt : 'm_cnt.jpg',
// 		lsc : 'm_lsc.jpg',
// 		pol : 'm_pol.jpg',
// 		sst : 'm_sst.jpg',
// 		hoo : 'm_hoo.jpg'
// 	}
// }

// // Shopper variables

// var gender = '',
// 	brand = '',
// 	type = '',
// 	size = '',
// 	color = '',
// 	position = {},
// 	messagePurchase = '',
// 	messageNumber = '',
// 	messagePosition = {},
// 	total = 0,
// 	image = '';


// Setting up selections and Making sure dropdown displays are reflective

$('.buttonSelectorChild').on('click', function(){
  var cartProperty = $(this).attr('cart-property');
  var value = $(this).attr('value');
  cart[cartProperty] = value;
  $(this).parent().parent().children().children().css('background-color', 'white');
  $(this).css('background-color', 'lightgrey');

  if(cartProperty === "print_id_type"){
    $('.printIdType').css("display", "none");
    if(value === "member_id"){
      cart.print_id = $(".memberId").html();
      $(".memberIdOption").css("display", "inline");
    }
    else if(value === "message_id"){
      $(".messageIdOption").css("display", "inline");
      cart.print_id = undefined;
    }
  }
});

$('.dropdown-menu a').on('click', function(){
  $(this).parent().parent().siblings().html($(this).html() + '<span class="caret"></span>');
  var cartProperty = $(this).parent().attr('cart-property');
  var value = $(this).attr('value');
  cart[cartProperty] = value;

  // if(cartProperty === "type"){
  //   cart.unit_price = $(this).attr('price');
  // }
});

$('.shirtSelection').on('click', function(){
  var productId = $(this).attr("value")
  cart.product = productId;
  $('.shirtSelection').each(function() {
    $(this).removeClass("selectedShirt");
  });
  $(this).addClass("selectedShirt");
  $('#selectedProductImage').attr("src", "/images/" + productId + ".jpg")
  cart.unit_price = $(this).attr('price');
});


// Search message function
$('#searchMessage').on('click', function(){
  var messageId = $('#searchMessageInput').val();
  $.get( "/api/message/" + messageId, function(result) {
    if(!result.message || result.message.type != "message"){
      swal("", "Message Not Found", "warning");
    }
    else{
      cart.print_id = result.message.message_id;
      $('.searchedMessageId').html(result.message.message_id);
      $('.searchedMessageContent').html(result.message.content);
      $('.searchedMessageLink').html(result.message.link);
      $('.searchedMessageImage').attr("src", result.message.image);
      $('#searchedMessageInfo').css("display", "inline");
    }
  });
});

// To display image of selected item

// function displayItemImage(){
// 	if(type === '' || brand === '' || gender === ''){
// 		return;
// 	}

// 	var $target = $('#itemImage');
// 		$target.empty();
// 	var $templateStart = '<img width="300px" src="/images/';
// 	var $templateEnd = '" />';

// 	if(gender === 'woman'){
// 		if(type === 'V-Neck_T-Shirt'){
// 			$target.append($templateStart + items.woman.vnt + $templateEnd);
// 			image = items.woman.vnt;
// 		}
// 		else if(type === 'Crew_Neck_T-Shirt'){
// 			$target.append($templateStart + items.woman.cnt + $templateEnd);
// 			image = items.woman.cnt;
// 		}
// 		else if(type === 'Long_Sleeve_Crewneck'){
// 			$target.append($templateStart + items.woman.lsc + $templateEnd);
// 			image = items.woman.lsc;
// 		}
// 		else if(type === 'Polo'){
// 			$target.append($templateStart + items.woman.pol + $templateEnd);
// 			image = items.woman.pol;
// 		}
// 		else if(type === 'Sweat_shirt'){
// 			$target.append($templateStart + items.woman.sst + $templateEnd);
// 			image = items.woman.sst;
// 		}
// 		else if(type === 'Hoodie'){
// 			$target.append($templateStart + items.woman.hoo + $templateEnd);
// 			image = items.woman.hoo;
// 		}
// 	}
// 	else if(gender === 'man'){
// 		if(type === 'V-Neck_T-Shirt'){
// 			$target.append($templateStart + items.man.vnt + $templateEnd);
// 			image = items.man.vnt;
// 		}
// 		else if(type === 'Crew_Neck_T-Shirt'){
// 			$target.append($templateStart + items.man.cnt + $templateEnd);
// 			image = items.man.cnt;
// 		}
// 		else if(type === 'Long_Sleeve_Crewneck'){
// 			$target.append($templateStart + items.man.lsc + $templateEnd);
// 			image = items.man.lsc;
// 		}
// 		else if(type === 'Polo'){
// 			$target.append($templateStart + items.man.pol + $templateEnd);
// 			image = items.man.pol;
// 		}
// 		else if(type === 'Sweat_shirt'){
// 			$target.append($templateStart + items.man.sst + $templateEnd);
// 			image = items.man.sst;
// 		}
// 		else if(type === 'Hoodie'){
// 			$target.append($templateStart + items.man.hoo + $templateEnd);
// 			image = items.man.hoo;
// 		}
// 	}
// }



// When purchase a message is checked

// $('input.purchase').on('click', function(){
// 	if($('.yes').is(':checked')){
// 		messagePurchase = 'true';
// 		$('.toPurchase').css('display', 'inline');
// 		$('#messagePositionYesPurchase').css('display', 'inline');
// 		$('#messagePositionNoPurchase').css('display', 'none');
// 	}
// 	else if($('.no').is(':checked')){
// 		messagePurchase = 'false';
// 		$('.toPurchase').css('display', 'none');
// 		$('#messagePositionNoPurchase').css('display', 'inline');
// 		$('#messagePositionYesPurchase').css('display', 'none');
// 	}
// });


// When message yes purchase is selected, and when user selects where to print member number & message number

// // For Right
// $('input.yesPurchaseRight').on('click', function(){
// 	if($('.memberRight').is(':checked')){
// 		messagePosition.right = 'member';
// 	}
// 	else if($('.messageRight').is(':checked')){
// 		messagePosition.right = 'message';
// 	}
// 	else if($('.noRight').is(':checked')){
// 		messagePosition.right = 'no';
// 	}
// });

// // For Left
// $('input.yesPurchaseLeft').on('click', function(){
// 	if($('.memberLeft').is(':checked')){
// 		messagePosition.left = 'member';
// 	}
// 	else if($('.messageLeft').is(':checked')){
// 		messagePosition.left = 'message';
// 	}
// 	else if($('.noLeft').is(':checked')){
// 		messagePosition.left = 'no';
// 	}
// });

// // For Front
// $('input.yesPurchaseFront').on('click', function(){
// 	if($('.memberFront').is(':checked')){
// 		messagePosition.front = 'member';
// 	}
// 	else if($('.messageFront').is(':checked')){
// 		messagePosition.front = 'message';
// 	}
// 	else if($('.noFront').is(':checked')){
// 		messagePosition.front = 'no';
// 	}
// });

// // For Back
// $('input.yesPurchaseBack').on('click', function(){
// 	if($('.memberBack').is(':checked')){
// 		messagePosition.back = 'member';
// 	}
// 	else if($('.messageBack').is(':checked')){
// 		messagePosition.back = 'message';
// 	}
// 	else if($('.noBack').is(':checked')){
// 		messagePosition.back = 'no';
// 	}
// });

// When message no purchase is selected, and when user selects where to print member number

// $('input.noPurchasePosition').on('click', function(){

// 	if($('.right').is(':checked')){
// 		position.right = true;
// 	}
// 	else{
// 		position.right = false;
// 	}

// 	if($('.left').is(':checked')){
// 		position.left = true;
// 	}
// 	else{
// 		position.left = false;
// 	}

// 	if($('.front').is(':checked')){
// 		position.front = true;
// 	}
// 	else{
// 		position.front = false;
// 	}

// 	if($('.back').is(':checked')){
// 		position.back = true;
// 	}
// 	else{
// 		position.back = false;
// 	}

// });

function updateSummary(){
  $('#summaryProduct').text(cart.product);
  $('#summaryGender').text(cart.gender);
  $('#summarySize').text(cart.size);
  $('#summaryQuantity').text(cart.quantity);
  $('#summarySymbol').text(cart.symbol);
  $('#summaryPrintId').text(cart.print_id);
  $('#summaryPrice').text(cart.unit_price);
  var totalPrice = parseInt(cart.unit_price) * parseInt(cart.quantity);
  $('.summaryTotalPrice').text(totalPrice);
  cart.total_price = totalPrice.toString();
}

function validateStepOne(){
  if(cart.print_id_type === undefined){
    swal("", "Please Select a Member ID or Shirt Message to be Printed", "warning");
    return false;
  }

  if(cart.print_id === undefined){
    if(print_id_type == "member_id"){
      swal("", "Please Select a Member ID");
    }
    else if(print_id_type == "message_id"){
      swal("", "Please Select a Shirt Message to be Printed", "warning");
    }
    return false;
  }

  if(cart.gender === undefined){
    swal("", "Please Select a Gender: Women or Men", "warning");
    return false;
  }

  if(cart.symbol === undefined){
    swal("", "Please Select a Symbol", "warning");
    return false;
  }

  return true;
}

function validateStepTwo(){
  if(cart.product === undefined){
    swal("", "Please Select a Shirt Product", "warning");
    return false;
  }
  return true;
}

function validateStepThree(){

  // if(cart.type === undefined){
  //   swal("", "Please Select a Shirt Type", "warning");
  //   return false;
  // }

  if(cart.size === undefined){
    swal("", "Please Select a Shirt Size", "warning");
    return false;
  }

  if(cart.quantity === undefined){
    swal("", "Please Select a Shirt Quantity", "warning");
    return false;
  }

  return true;
}

$('.nextController').on('click', function(){

  var nextStep = $(this).attr("step");

  if(nextStep == 'two'){
    if(!validateStepOne()){
      return;
    }

    disableShopStep('One');
    enableShopStep('Two');
  }
  else if(nextStep == 'three'){
    if(!validateStepTwo()){
      return;
    }

    disableShopStep('Two');
    enableShopStep('Three');
  }


});

// When Pre Checkout is confirmed
$('#nextToConfirm').on('click', function(){

  if(!validateStepThree()){
    return;
  }

  updateSummary();

	// Decorate UI
	$('.shopStepThreeSection').css('opacity', '0.5');
	$('.shopStepThreeSection *').css('pointer-events', 'none');
	$('.summarySection').css('display', 'inline');
});

// When post checkout is confirmed; Stripe handling;

var handler = StripeCheckout.configure({
	key: 'pk_live_XkXTQSPDAhn0uFc9fsxfJMox',
	image: 'http://uxrepo.com/static/icon-sets/linecons/svg/t-shirt.svg',
	token: function(token) {
	// Use the token to create the charge with a server-side script.
	// You can access the token ID with `token.id`
	}
});


var cart = {
  print_id_type: undefined,
  print_id: undefined,
  gender: undefined,
  symbol: undefined,
  type: undefined,
  size: undefined,
  quantity: undefined,
  unit_price: undefined,
  total_price: undefined,
}

function disableShopStep(step){
  $('.shopStep' + step + 'Section').css("display", "none");
}

function enableShopStep(step){
  $('.shopStep' + step + 'Section').css("display", "block");
}

function emailBodyBuilder(header, footer){
  var body = "<html>";
  body += header ? ("<h3>" + header + "</h3>") : "";
  body += "<h3>Order Summary:</h3>";
  body += "<div>Print Type: " + cart.print_id_type + "</div>";
  body += "<div>Print: " + cart.print_id + "</div>";
  body += "<div>Shirt Product: " + cart.product + "</div>";
  body += "<div>Gender: " + cart.gender + "</div>";
  body += "<div>Size: " + cart.size + "</div>";
  body += "<div>Symbol: " + cart.symbol + "</div>";
  body += "<div>Quantity: " + cart.quantity + "</div>";
  body += "<div>Unit Price: " + cart.unit_price + "</div>";
  body += "<hr />";
  body += "<div>Total: " + cart.total_price + "</div>";
  body += footer ? ("<h3>" + footer + "</h3>") : "";
  body += "</html>";
  return body;
}

function sendEmail(subject, recipient, body){

  var request = JSON.stringify({
    email : {
      recipient: recipient,
      subject: subject,
      body: body,
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
      //nada
    }
    else{
      console.log("email sent failed!")
    }
  }).fail(function(jqXHR, textStatus){
    alert('DB Connection Error');
    window.location.href = "/member";
  });
}

function sendEmails(){
  var customerBody = emailBodyBuilder("Thank you for your order at ShirtClub.net!");
  var merchantBody = emailBodyBuilder();

  var merchantEmail = "info@delcoin.com";
  var customerEmail = user.email;

  sendEmail("[ShirtClub.net] Customer Placed an Order", merchantEmail, merchantBody);
  sendEmail("[ShirtClub.net] Order Confirmation", customerEmail, customerBody);

  swal({
    title: "",
    text: "Thank you for your order.",
    type: "success",
    showCancelButton: false,
    confirmButtonText: "Ok",
    closeOnConfirm: false,
  }, function(isConfirm){
    window.location.href = "/member";
  });

}


$('#pay').on('click', function(e) {

	var request = JSON.stringify({cart : cart});

  $.ajax({
    url : 'api/order',
    method : 'POST',
    contentType : 'application/json',
    data : request,
    dataType : 'json'
  }).done(function(data){
    //Redirect ot member page
    if(data.success){
      sendEmails();
      swal({
        title: "",
        text: "You have successfully bought the shirt",
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

	// if(!debug){
	// 	// Open Checkout with further options
	// 	handler.open({
	// 		name: 'ShirtClub.net',
	// 		description: '',
	// 		currency: "cad",
	// 		amount: total*100
	// 	});
	// 	e.preventDefault();
	// }
	// else{
	// 	$.ajax({
	// 		url : '/shop',
	// 		method : 'POST',
	// 		contentType : 'application/json',
	// 		data : request,
	// 		dataType : 'json'
	// 	}).done(function(data){
	// 		//Redirect ot member page
	// 		if(data.success){
	// 			swal({
	// 				title: "",
	// 				text: "You have successfully bought the shirt",
	// 				type: "success",
	// 				showCancelButton: false,
	// 				confirmButtonText: "Ok",
	// 				closeOnConfirm: false,
	// 			}, function(isConfirm){
	// 				window.location.href = "/member";
	// 			});
	// 		}
	// 		else{
	// 			swal({
	// 				title: "",
	// 				text: "Something went wrong",
	// 				type: "warning",
	// 				showCancelButton: false,
	// 				confirmButtonText: "Ok",
	// 				closeOnConfirm: false,
	// 			}, function(isConfirm){
	// 				window.location.href = "/member";
	// 			});
	// 		}
	// 	}).fail(function(jqXHR, textStatus){
	// 		alert('DB Connection Error');
	// 		window.location.href = "/member";
	// 	});
	// }
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
	handler.close();
});

// When calcel is selected;

$('#restart').on('click', function(){
	window.location.href = "/shop";
});
