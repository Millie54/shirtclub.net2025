$('#form').on('submit', function(event){
	
	event.preventDefault();

	$('div#single').css('display', 'none');
	$('div#horse').css('display', 'none');
	$('div#team').css('display', 'none');

	$('div.singleContents div').empty();
	$('div.horseContents div').empty();
	$('div.multiContents div').empty();

	var p1 = $('input#p1').val();
	var p2 = $('input#p2').val();

	if( p1 === '' ){
		swal("Warning", "Must Enter Player Name", "warning");
		return;
	}
	else if( p2 === '' ){
		singleEntry(p1);
	}
	else{
		teamEntry(p1, p2);
	}

});

function singleEntry(p1){

	var obj = JSON.stringify({ p1 : p1, p2 : 0 });

	$.ajax({
		url : '/standings/statistic',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		
		if(data.success){
			
			// ShuffleBoard Single
			if(data.singleResults.length > 0){

				var results = data.singleResults;
				var gamesPlayed = results.length;
				var gamesWon = 0;
				var winPercentage = 0;
				var totalPointsScored = 0;
				var scoringAverage = 0;

				for(var i = 0; i < gamesPlayed; i++){

					var s1 = parseInt(results[i].s1);
					var s2 = parseInt(results[i].s2);
					var winner = results[i].winner;

					if(winner !== null && !isNaN(s1) && !isNaN(s2) && s1!== null && s2!== null){

						if(p1 === results[i].p1){
							totalPointsScored += s1;
							gamesWon = winner === p1 ? gamesWon+1 : gamesWon+0;

						}
						else if( p1 === results[i].p2){
							totalPointsScored += s2;
							gamesWon = winner === p2 ? gamesWon+1 : gamesWon+0;
						}

					}
				}

				winPercentage = (((gamesWon/gamesPlayed)*100).toFixed(3)).toString() + '%';
				scoringAverage = ((totalPointsScored/gamesPlayed).toFixed(3)).toString();

				
				$('#singlePlayer').html('Player: ' + p1);
				$('#singleGamesPlayed').html('Games Played: ' + gamesPlayed);
				$('#singleGamesWon').html('Games Won: ' + gamesWon);
				$('#singleWinPercentage').html('Win Percentage: ' + winPercentage);
				$('#singleTotalPointsScored').html('Total Points Scored: ' + totalPointsScored);
				$('#singleScoringAverage').html('Scoring Average: ' + scoringAverage);
			}
			else{
				$('div.singleMessage').html('No Games Found');
			}

			$('div#single').css('display', 'inline');


			// Horse Collar
			if(data.horseResults.length > 0){

				var thisPlayer = p1;
				var results = data.horseResults;
				var gamesPlayed = results.length;
				var gamesWon = 0;
				var winPercentage = 0;
				var totalPointsScored = 0;
				var scoringAverage = 0;

				for(var i = 0; i < gamesPlayed; i++){

					var thisGame = results[i];

					if(thisGame.winner.split(',').indexOf(thisPlayer) > -1){
						gamesWon++;
					}
					
					var playerNumber; 

					for(var j = 1; j <= 8; j++ ){
						if(thisGame['p' + j] === thisPlayer);
						playerNumber = j;
						break;
					}

					var playerPoints = parseInt(thisGame['s' + playerNumber]);

					if(!isNaN(playerPoints) && playerPoints!== null){
						totalPointsScored += playerPoints;
					}
				}

				winPercentage = (((gamesWon/gamesPlayed)*100).toFixed(3)).toString() + '%';
				scoringAverage = ((totalPointsScored/gamesPlayed).toFixed(3)).toString();

				
				$('#horsePlayer').html('Player: ' + p1);
				$('#horseGamesPlayed').html('Games Played: ' + gamesPlayed);
				$('#horseGamesWon').html('Games Won: ' + gamesWon);
				$('#horseWinPercentage').html('Win Percentage: ' + winPercentage);
				$('#horseTotalPointsScored').html('Total Points Scored: ' + totalPointsScored);
				$('#horseScoringAverage').html('Scoring Average: ' + scoringAverage);
			}
			else{
				$('div.horseMessage').html('No Games Found');
			}

			$('div#horse').css('display', 'inline');

		}
		else{
			console.log('failed')
		}

	}).fail(function(){
		console.log('failed')
	});

};


function teamEntry(p1, p2){

	var obj = JSON.stringify({ p1 : p1, p2 : p2 });

	$.ajax({
		url : '/standings/statistic',
		method : 'POST',
		contentType : 'application/json',
		data : obj,
		dataType : 'json',
	}).done(function(data){
		console.log('gg');
		if(data.success){
			
			// ShuffleBoard Multi
			if(data.multiResults.length > 0){

				var results = data.multiResults;
				var gamesPlayed = results.length;
				var gamesWon = 0;
				var winPercentage = 0;
				var totalPointsScored = 0;
				var scoringAverage = 0;
				var thisPlayer1 = p1;
				var thisPlayer2 = p2;

				for(var i = 0; i < gamesPlayed; i++){

					var thisGame = results[i];
					var player1Number = thisGame.player1Number;
					var player2Number = thisGame.player2Number
					var teamScore;

					if(player1Number <= 4){
						teamScore = thisGame.team1s;
					}
					else{
						teamScore = thisGame.team2s;
					}

					if( !isNaN(teamScore) && teamScore !== null){
						totalPointsScored += teamScore;
					}

					if(thisGame.winner.split(',').indexOf(thisPlayer1) > -1){
						gamesWon++;
					}
				}

				winPercentage = (((gamesWon/gamesPlayed)*100).toFixed(3)).toString() + '%';
				scoringAverage = ((totalPointsScored/gamesPlayed).toFixed(3)).toString();

				
				$('#multiPlayer1').html('Player1: ' + thisPlayer1);
				$('#multiPlayer2').html('Player2: ' + thisPlayer2);
				$('#multiGamesPlayed').html('Games Played: ' + gamesPlayed);
				$('#multiGamesWon').html('Games Won: ' + gamesWon);
				$('#multiPercentage').html('Win Percentage: ' + winPercentage);
				$('#multiTotalPointsScored').html('Total Points Scored: ' + totalPointsScored);
				$('#multiScoringAverage').html('Scoring Average: ' + scoringAverage);
			}
			else{
				$('div.multiMessage').html('No Games Found');
			}

			$('div#team').css('display', 'inline');
		}
		else{
			console.log('failed')
		}

	}).fail(function(){
		console.log('failed')
	});

};
