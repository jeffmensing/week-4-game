
//Set up global variables
var wins = 0;
var losses = 0;
var playerTotal = 0;
var jewelNumbers = [];
var randomNum = 0;

// Initiate game for the first time
$(document).ready(function(){


//Functions
function startGame() {
	$('#losses').text(losses);
	$('#score').text(playerTotal);
	randomNum = Math.floor(Math.random()*120+19);
	$('#scoreToMatch').text(randomNum);
	$('#wins').text(wins);
	$('#losses').text(losses);
};

function generateJewelNumbers() {
	for (var i = 0; i < 4; i++) {
	var num = Math.floor(Math.random()*12+1);
	jewelNumbers.push(num);
	}
	console.log(jewelNumbers);
};

function checkScore() {
	if (playerTotal == randomNum){
		wins++;
		alert("You Win!!!!");
		gameReset();
		}
	else if (playerTotal > randomNum){
		losses++;
		alert("You Loser!!!");
		gameReset();
		}
};

function playGame() {
	$('#jewel1').on ('click', function(){
	playerTotal = playerTotal + jewelNumbers[0];
	$('#score').text(playerTotal);
	checkScore();
})
	$('#jewel2').on ('click', function(){
	playerTotal = playerTotal + jewelNumbers[1];
	$('#score').text(playerTotal);
	checkScore();
})
	$('#jewel3').on ('click', function(){
	playerTotal = playerTotal + jewelNumbers[2];
	$('#score').text(playerTotal);
	checkScore();
})
	$('#jewel4').on ('click', function(){
	playerTotal = playerTotal + jewelNumbers[3];
	$('#score').text(playerTotal);
	checkScore();
})

};

function gameReset() {
	playerTotal = 0;
	jewelNumbers = [];
	randomNum = Math.floor(Math.random()*120+19);
	$('#scoreToMatch').text(randomNum);
	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#score').text(playerTotal);
	generateJewelNumbers();

};

startGame();
generateJewelNumbers();
playGame();
});



