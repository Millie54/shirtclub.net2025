
var sb = $('button.selectShuffleboard');
var hc = $('button.selectHorseCollar');
var sg = $('button.selectSingle');
var mt = $('button.selectMulti');


var gameType = null;
var gameMode = null;
var thisGame = null;

var table = null;

var p1 = null;
var p2 = null;
var p3 = null;
var p4 = null;
var p5 = null;
var p6 = null;
var p7 = null;
var p8 = null;

var s1 = null;
var s2 = null;
var s3 = null;
var s4 = null;
var s5 = null;
var s6 = null;
var s7 = null;
var s8 = null;

var team1 = '';
var team2 = '';

var team1s = null;
var team2s = null;

var winner = null;
var loser = null;


var multiTeam1PlayerDisplay = 2;
var multiTeam2PlayerDisplay = 2;
var horsePlayerDisplay = 2;



$('button.gameType').on('click', function(){
	toggleStyle(sb, 'off');
	toggleStyle(hc, 'off');
	toggleStyle($(this), 'on');
});



$('button.gameMode').on('click', function(){
	toggleStyle(sg, 'off');
	toggleStyle(mt, 'off');
	toggleStyle($(this), 'on');
});

function toggleStyle(obj, power){
	if(power === 'on'){
		obj.css('background-color', '#337ab7');
		obj.css('color', 'white');
	}
	else if(power === 'off'){
		obj.css('background-color', '#fff');
		obj.css('color', 'black');
	}
}

/*
 *
 * Insert Single Game
 *
 */
function singleGame(){
	$('div.signleController').css('display', 'inline');
}

/*
 * A game type is selected
 */
$('button.gameType').on('click', function(){

	toggleStyle(sb, 'off');
	toggleStyle(hc, 'off');
	toggleStyle($(this), 'on');

	gameType = $(this).val();
	if(gameType === 'ShuffleBoard'){
		toggleGameModeController('on');
		toggleHorseGameController('off');
	}

	else if(gameType === 'HorseCollar'){
		toggleGameModeController('off');
		toggleHorseGameController('on');
		addOneMoreHorsePlayerOption();
	}

});

/*
 * A game mode is selected
 */

$('button.gameMode').on('click', function(){

	toggleStyle(sg, 'off');
	toggleStyle(mt, 'off');
	toggleStyle($(this), 'on');

	gameMode = $(this).val();
	if(gameMode === 'Single'){
		toggleSingleGame('on');
		toggleMultiGame('off');
	}

	else if(gameMode === 'Multi'){
		toggleMultiGame('on');
		toggleSingleGame('off');
		addOneMoreMultiPlayerOption();
	}
});

function addOneMoreMultiPlayerOption(){

	$('.multiAddPlayerTeam1').on('click', function(){

		if(multiTeam1PlayerDisplay === 2){
			// Add third persion to team one
			$('.multiDisplayP3').css('display', 'inline');
		}
		if(multiTeam1PlayerDisplay === 3){
			// Add forth persion to team one
			$('.multiDisplayP4').css('display', 'inline');
			// Remove the add team 1 button
			$('.multiAddPlayerTeam1').css('display', 'none');
		}
		multiTeam1PlayerDisplay ++;
	});

	$('.multiAddPlayerTeam2').on('click', function(){

		if(multiTeam2PlayerDisplay === 2){
			// Add third persion to team one
			$('.multiDisplayP7').css('display', 'inline');
		}
		if(multiTeam2PlayerDisplay === 3){
			// Add forth persion to team one
			$('.multiDisplayP8').css('display', 'inline');
			// Remove the add team 2 button
			$('.multiAddPlayerTeam2').css('display', 'none');
		}
		multiTeam2PlayerDisplay ++;
	});
}

function addOneMoreHorsePlayerOption(){

	$('.addHorsePlayer').on('click', function(){

		if(horsePlayerDisplay === 2){
			$('.horseDisplayPlayer3').css('display', 'block');
		}
		else if(horsePlayerDisplay === 3){
			$('.horseDisplayPlayer4').css('display', 'block');
		}
		else if(horsePlayerDisplay === 4){
			$('.horseDisplayPlayer5').css('display', 'block');
		}
		else if(horsePlayerDisplay === 5){
			$('.horseDisplayPlayer6').css('display', 'block');
		}
		else if(horsePlayerDisplay === 6){
			$('.horseDisplayPlayer7').css('display', 'block');
		}
		else if(horsePlayerDisplay === 7){
			$('.horseDisplayPlayer8').css('display', 'block');
			$('.addHorsePlayer').css('display', 'none');
		}

		horsePlayerDisplay ++;
	});

}


function toggleGameModeController(power){
	if(power === 'on'){
		$('.gameModeController').css('display', 'inline');
	}
	else if (power === 'off'){
		$('.gameModeController').css('display', 'none');
	}
}

function toggleSingleGame(power){
	if(power === 'on'){
		$('.signleController').css('display', 'inline');
	}
	else if (power === 'off'){
		$('.signleController').css('display', 'none');
	}
}

function toggleMultiGame(power){
	if(power === 'on'){
		$('.multiController').css('display', 'inline');
	}
	else if (power === 'off'){
		$('.multiController').css('display', 'none');
	}
}

function toggleHorseGameController(power){
	if(power === 'on'){
		$('.horseGameController').css('display', 'inline');
	}
	else if (power === 'off'){
		$('.horseGameController').css('display', 'none');
	}
}

/*
 * A game started
 */
$('button.startGame').on('click', function(){
	
	thisGame = $(this).val();
	
	// Initialize a Single Game
	if(thisGame === 'SingleGameStarted'){

		// Collect Information
		p1 = team1 = $('i.singleP1').attr('value');
		p2 = team2 = $('input.singleP2').val();

		// Collect Table Information
		table = $('input#SingleTable').val();

		userInputCheck(table, function(){
			
			// Render UI
			$('.singleGameStarted').css('display', 'inline');
			$('.player2.singleGame').append('<h4>' + p2 + '</h4>');
		});
	}
	// Initialize a Multi Game
	else if (thisGame === 'MultiGameStarted'){
		// Collect Player Information
		p1 = $('i.multiP1').attr('value');
		p2 = $('input.multiP2').val();
		p3 = $('input.multiP3').val();
		p4 = $('input.multiP4').val();
		p5 = $('input.multiP5').val();
		p6 = $('input.multiP6').val();
		p7 = $('input.multiP7').val();
		p8 = $('input.multiP8').val();

		// Collect Table Information
		table = $('input#MultiTable').val();

		userInputCheck(table, function(){

			// Collect Team Information
			if( p1 !== '' ){
				team1 += p1;
			}
			if( p2 != '' ){
				team1 += ',' + p2;
			}
			if( p3 != ''){
				team1 += ',' + p3;
			}
			if( p4 != ''){
				team1 += ',' + p4;
			}
			if( p5 != ''){
				team2 += p5;
			}
			if( p6 != ''){
				team2 += ',' + p6;
			}
			if( p7 != ''){
				team2 += ',' + p7; 
			}
			if( p8 != ''){
				team2 += ',' + p8;
			}
			
			//Render UI
			$('.multiGameStarted').css('display', 'inline');
		});
	}
	// Initialize a Horse Game
	else if (thisGame === 'HorseGameStarted'){

		// Collect Player Information
		p1 = $('i.horseP1').attr('value');
		p2 = $('input.horseP2').val();
		p3 = $('input.horseP3').val();
		p4 = $('input.horseP4').val();
		p5 = $('input.horseP5').val();
		p6 = $('input.horseP6').val();
		p7 = $('input.horseP7').val();
		p8 = $('input.horseP8').val();


		// Collect Table Information
		table = $('input#HorseTable').val();

		userInputCheck(table, function(){
			// Render UI
			$('.horseGameStarted').css('display', 'inline');
			// Control UI
			horseGameStartedUIControl();

		});
	}
	// Prompt User to restart selection
	else{
		window.location.href = "/start";
	}
});


function horseGameStartedUIControl(){

	if( p1 !== '' ){
		$('.displaytoCollectP1').css('display', 'block');
	}
	if( p2 !== '' ){
		$('.horsedisplaytoCollectP2').css('display', 'block');
		$('.horseP2CollectScore').append('<h4>' + p2 + '</h4>');
	}
	if( p3 !== ''){
		$('.horsedisplaytoCollectP3').css('display', 'block');
		$('.horseP3CollectScore').append('<h4>' + p3 + '</h4>');
	}
	if( p4 !== ''){
		$('.horsedisplaytoCollectP4').css('display', 'block');
		$('.horseP4CollectScore').append('<h4>' + p4 + '</h4>');
	}
	if( p5 !== ''){
		$('.horsedisplaytoCollectP5').css('display', 'block');
		$('.horseP5CollectScore').append('<h4>' + p5 + '</h4>');
	}
	if( p6 !== ''){
		$('.horsedisplaytoCollectP6').css('display', 'block');
		$('.horseP6CollectScore').append('<h4>' + p6 + '</h4>');
	}
	if( p7 !== ''){
		$('.horsedisplaytoCollectP7').css('display', 'block');
		$('.horseP7CollectScore').append('<h4>' + p7 + '</h4>');
	}
	if( p8 !== ''){
		$('.horsedisplaytoCollectP8').css('display', 'block');
		$('.horseP8CollectScore').append('<h4>' + p8 + '</h4>');
	}
}

/*
 * A Single Game has completed
 */
$('button.SubmitSingle').on('click', function(){

	s1 = team1s = parseInt($('input#Player1S').val());
	s2 = team2s = parseInt($('input#Player2S').val());

	if(s1 > 15 || s2 > 15){
		return swal("", "Scores can not be greater than 15", "warning");
	}

	// Check if winner hits enough score
	if(Math.max(s1, s2) < 15){
		swal("Warning", "You did not reach a winning score", "warning");
		return;
	}
	if(s1>s2){
		winner = p1;
		loser = p2;
	}
	else if(s1<s2){
		winner = p2;
		loser = p1;
	}
	else if(s1===s2){
		winner = 'tie'
		loser = 'tie'
	}
	
	//debug();
	submitGameResult();
});

/*
 * A Multi Game has completed
 */
$('button.SubmitMulti').on('click', function(){

	team1s = parseInt($('input#Team1S').val());
	team2s = parseInt($('input#Team2S').val());

	if(team1s > 21 || team2s > 21){
		return swal("", "Scores can not be greater than 21", "warning");
	}

	// Check if winner hits enough score
	if(Math.max(team1s, team2s) < 21){
		swal("Warning", "You did not reach a winning score", "warning");
		return;
	}

	if(team1s>team2s){
		winner = team1;
		loser = team2;
	}
	else if(team1s<team2s){
		winner = team2s;
		loser = team1;
	}
	else if(s1===s2){
		winner = 'tie'
		loser = 'tie'
	}
	
	//debug();
	submitGameResult();
});


/*
 * A Horse Game has completed
 */
$('button.SubmitHorse').on('click', function(){
	
	s1 = $('input#Horse1S').val();
	s2 = $('input#Horse2S').val();
	s3 = $('input#Horse3S').val();
	s4 = $('input#Horse4S').val();	
	s5 = $('input#Horse5S').val();
	s6 = $('input#Horse6S').val();	
	s7 = $('input#Horse7S').val();
	s8 = $('input#Horse8S').val();		

	var map = {};

	if(s1 !== ''){
		map.s1 = s1;
	}
	if(s2 !== ''){
		map.s2 = s2;
	}
	if(s3 !== ''){
		map.s3 = s3;
	}
	if(s4 !== ''){
		map.s4 = s4;
	}
	if(s5 !== ''){
		map.s5 = s5;
	}
	if(s6 !== ''){
		map.s6 = s6;
	}
	if(s7 !== ''){
		map.s7 = s7;
	}
	if(s8 !== ''){
		map.s8 = s8;
	}
	
	// Find Max Scores
	var max = Math.max(s1, s2, s3, s4, s5, s6, s7, s8);

	// Check if winner hits enough score
	if(max < 31){
		swal("Warning", "You did not reach a winning score", "warning");
		return;
	}

	// Get winner array
	var winners = getKeyByValue(map, max.toString());

	// Assign winners to global object
	var winnerArray = [];
	for(var prop in winners){
		var player = prop.replace('s','p');
		winnerArray.push(window[player]);
	}
	winner = winnerArray.join(',');

	// Assign losers to global object
	var loserArray = [];
	for(var prop in map){
		if(winners.hasOwnProperty(prop)){
			// This is the winner
		}
		else{
			// This is the loser
			var player = prop.replace('s','p');
			loserArray.push(window[player]);
		}
	}
	loser = loserArray.join(',');
	
	//debug();
	submitGameResult();
});



function getKeyByValue( obj, value ) {
	var winners = {};
    for( var prop in obj ) {
        if( obj.hasOwnProperty( prop ) ) {
			if( obj[ prop ] === value ){
				winners[prop] = true;
			}
        }
    }
    return winners;
}


function submitGameResult(){

	var gameResult = {

		game_type : gameType,
		game_mode : gameMode,
		table_id : table,

		p1 : p1,
		p2 : p2,
		p3 : p3,
		p4 : p4,
		p5 : p5,
		p6 : p6,
		p7 : p7,
		p8 : p8,

		s1 : s1,
		s2 : s2,
		s3 : s3,
		s4 : s4,
		s5 : s5,
		s6 : s6,
		s7 : s7,
		s8 : s8,

		team1 : team1,
		team2 : team2,
		team1s : team1s,
		team2s : team2s,

		winner : winner,
		loser : loser
	};

	var obj = JSON.stringify(gameResult);

	$.ajax({
		url : '/game',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		if(data.success === 'success'){
			window.location.href = "/thanks";
		}
		else{
			console.log(data.fail);
		}
	}).fail(function(){
		console.log('AJAX Call Failed');
		window.location.href = "/";
	})

}

function userInputCheck(tableId, cb){

	var users = []

	if(p1 !== null && p1 !== ''){
		users.push(p1);
	}
	if(p2 !== null && p2 !== ''){
		users.push(p2);
	}
	if(p3 !== null && p3 !== ''){
		users.push(p3);
	}
	if(p4 !== null && p4 !== ''){
		users.push(p4);
	}
	if(p5 !== null && p5 !== ''){
		users.push(p5);
	}
	if(p6 !== null && p6 !== ''){
		users.push(p6);
	}
	if(p7 !== null && p7 !== ''){
		users.push(p7);
	}
	if(p8 !== null && p8 !== ''){
		users.push(p8);
	}
	
	var obj = JSON.stringify( { users : users } )


	$.ajax({
		url : '/user/group',
		method : 'POST',
		contentType : 'application/json',
		data : obj
	}).done(function(data){
		if(data.success){
			$.ajax({
				url : '/table',
				method : 'POST',
				contentType : 'application/json',
				data : JSON.stringify( { tableId : tableId } )
			}).done(function(data){
				if(data.success){
					if (typeof(cb) == 'function') {
						cb();
						$('.selectionController').empty();
					}
				}
				else{
					return swal("", "Table Number Incorrect", "warning");
				}
				
			}).fail(function(){
				console.log('AJAX Call Failed');
				window.location.href = "/";
			})
		}
		else{
			return swal("", "One or more user names entered are incorrect", "warning");
		}
	}).fail(function(){
		console.log('AJAX Call Failed');
		window.location.href = "/";
	});
	
}

var debug = function(){

	console.log('gameType = ' + gameType);
	console.log('gameMode = ' + gameMode);
	console.log('table = ' + table);

	console.log('p1 = ' + p1);
	console.log('p2 = ' + p2);
	console.log('p3 = ' + p3);
	console.log('p4 = ' + p4);
	console.log('p5 = ' + p5);
	console.log('p6 = ' + p6);
	console.log('p7 = ' + p7);
	console.log('p8 = ' + p8);
	console.log('s1 = ' + s1);
	console.log('s2 = ' + s2);
	console.log('s3 = ' + s3);
	console.log('s4 = ' + s4);
	console.log('s5 = ' + s5);
	console.log('s6 = ' + s6);
	console.log('s7 = ' + s7);
	console.log('s8 = ' + s8);

	console.log('team1 = ' + team1);
	console.log('team2 = ' + team2);

	console.log('team1s = ' + team1s);
	console.log('team2s = ' + team2s);

	console.log('winner = ' + winner);
	console.log('loser = ' + loser);
}
