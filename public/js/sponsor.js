// Intialize dropdown boxes value
var beer = 'null',
	liquor = 'null',
	wine = 'null',
	soft_drink = 'null',
	hotel = 'null',
	airline = 'null';

// Making sure dropdown menus are reflective
$('.dropdown-menu#beer a').on('click', function(){
	$('#selectBeer').html($(this).html() + '<span class="caret"></span>');

	beer = $(this).attr('value');

	if (beer === 'Other'){
		removeOthers('beer');
		addOthers('beer');
	}
	else{
		removeOthers('beer');
	}

});

$('.dropdown-menu#liquor a').on('click', function(){
	$('#selectLiquor').html($(this).html() + '<span class="caret"></span>');

	liquor = $(this).attr('value');

	if (liquor === 'Other'){
		removeOthers('liquor');
		addOthers('liquor');
	}
	else{
		removeOthers('liquor');
	}

});

$('.dropdown-menu#wine a').on('click', function(){
	$('#selectWine').html($(this).html() + '<span class="caret"></span>');

	wine = $(this).attr('value');

	if (wine === 'Other'){
		removeOthers('wine');
		addOthers('wine');
	}
	else{
		removeOthers('wine');
	}

});

$('.dropdown-menu#softDrink a').on('click', function(){
	$('#selectSoftDrink').html($(this).html() + '<span class="caret"></span>');

	soft_drink = $(this).attr('value');

	if (soft_drink === 'Other'){
		removeOthers('soft_drink');
		addOthers('soft_drink');
	}
	else{
		removeOthers('soft_drink');
	}

});

$('.dropdown-menu#hotel a').on('click', function(){
	$('#selectHotel').html($(this).html() + '<span class="caret"></span>');

	hotel = $(this).attr('value');

	if (hotel === 'Other'){
		removeOthers('hotel');
		addOthers('hotel');
	}
	else{
		removeOthers('hotel');
	}
});

$('.dropdown-menu#airline a').on('click', function(){
	$('#selectAirline').html($(this).html() + '<span class="caret"></span>');

	airline = $(this).attr('value');

	if (airline === 'Other'){
		removeOthers('airline');
		addOthers('airline');
	}
	else{
		removeOthers('airline');
	}
});

// For others selections on preference
function addOthers(type){
	$('.input-group.' + type).append('<input class="form-control ' + type + '" type="text", placeholder="Please specify"></input>');
}

function removeOthers(type){
	$('input.' + type).remove();
}


// When submit on clicked
$('#form').on('click', function (event) {
	event.preventDefault();

	if(beer === 'Other'){
		beer = $('input.beer').val();
	}

	if(liquor === 'Other'){
		liquor = $('input.liquor').val();
	}

	if(wine === 'Other'){
		wine = $('input.wine').val();
	}

	if(soft_drink === 'Other'){
		soft_drink = $('input.soft_drink').val();
	}

	if(hotel === 'Other'){
		hotel = $('input.hotel').val();
	}

	if(airline === 'Other'){
		airline = $('input.airline').val();
	}

	var sponsor = {
		beer 			: 	beer,
		liquor 			: 	liquor,
		wine 			: 	wine,
		soft_drink 		: 	soft_drink,
		hotel			: 	hotel,
		airline 		: 	airline
	};

	var obj = JSON.stringify(sponsor);

	$.ajax({
		url : '/sponsor',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		// Log User In
		if(data.success){

			swal({
				title: "",
				text: "Your sponsor information have been updated", 
				type: "success",
				showCancelButton: false,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "OK",
				closeOnConfirm: false
			}, function(){
				window.location.href = '/member';
			});
		}
		else{
			console.log(data.fail);
			console.log('error');
		}

	}).fail(function(){
		console.log('AJAX Call Failed');
		//window.location.href = "/";
	});

});