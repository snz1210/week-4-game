$(document).ready(function(){
// the above code makes it so the game starts after the html page is loaded
// THIS IS WHERE I LIST ALL MY GLOBAL VARIABLES
var c1, c2, c3, c4;
var wins = 0;
var losses = 0;
var totalScore = 0;
var numberGenerator;

// THIS IS WHERE THE RANDOM NUMBERS ARE GENERATED FOR EACH CRYSTAL AND NUMBER GENERATOR

function crystalValue() {

	numberGenerator = Math.floor(Math.random() * 102) + 19;
	console.log(numberGenerator);

	c1 = Math.floor(Math.random() * 12) + 1;
	c2 = Math.floor(Math.random() * 12) + 1;
	c3 = Math.floor(Math.random() * 12) + 1;
	c4 = Math.floor(Math.random() * 12) + 1;


// THIS IS THE CODE THAT PRINTS TO PAGE
	$("#numberWins").text(wins);
	$("#numberLosses").text(losses);
	$("#randomNumber").text(numberGenerator);
	$("#totalScore").text(totalScore);
} 

// THIS DETERMINES WHETHER USER LOSES OR WINS
function score() {

	console.log(totalScore)
	console.log(numberGenerator)

	if (totalScore > numberGenerator) {
		losses++;
		console.log("loss");
		crystalValue();		
	// this makes the crystal values reset when game is lost/won
	}

	if (totalScore === numberGenerator) {
		wins++;
		console.log("win");
		crystalValue();
	}
}

crystalValue(); 
// This makes the random number generator reset

// THIS ADDS CRYSTAL VALUES TOGETHER FOR TOTAL SCORE
$(".crystals").on("click", function() {
	console.log($(this))
	var clicked = $(this).attr("id");
	console.log(clicked);

	if (clicked === "c1") {
		totalScore += c1;
	} else if (clicked === "c2") {
		totalScore += c2;
	} else if (clicked === "c3") {
		totalScore += c3;
	} else if (clicked === "c4") {
		totalScore += c4;
	}

	$("#totalScore").text(totalScore);

	score();
});

});