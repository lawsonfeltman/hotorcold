
$(document).ready(function(){
	var assignSecretNumber = function () {
		return Math.floor((Math.random() * 100) + 1);
	};
	var createNewGame = function () {
			$('span#count').html(0);
			$('h2#feedback').html("Make Your Guess!");
			$('ul#guessList').html("");
			$('#userGuess').val("");
	};
	var playGuessingGame = function () {
		var guessCounter = 0;
		var secretNumber = assignSecretNumber();
		console.log(secretNumber);
		$('#guessButton').off().on('click', function(event){
			event.preventDefault();
			var userGuess = $('#userGuess').val();
			if (userGuess < 1 || userGuess > 100 || isNaN(+userGuess)) {
				alert("Please only enter a numeric value between 1 and 100");
				$('#userGuess').val("");
			} else {
				userGuess = +userGuess;
				guessCounter++;
				$('span#count').html(guessCounter);
				$('ul#guessList').append('<li>'+userGuess+'</li>');
				var guessDistance = Math.abs(secretNumber - userGuess);
				if (guessDistance >= 50) {
					$('h2#feedback').html("VERY cold");
				} else if (guessDistance >= 30 && guessDistance < 50) {
					$('h2#feedback').html("Cold");
				} else if (guessDistance >= 20 && guessDistance < 30) {
					$('h2#feedback').html("Warm");
				} else if (guessDistance >= 10 && guessDistance < 20) {
					$('h2#feedback').html("Hot");
				} else if (guessDistance >= 1 && guessDistance < 10) {
					$('h2#feedback').html("VERY hot");
				} else if (userGuess = secretNumber) {
					$('h2#feedback').html("You got it!");
				}
			}
		});
	};
	playGuessingGame();
	$(".new").click(function(event) {
		event.stopPropagation();
		createNewGame();
		playGuessingGame();
	});
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});


