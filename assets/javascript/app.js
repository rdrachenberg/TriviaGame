// Load document before runing javascript 
$(document).ready(function(){
// questions array
var questions = ["What is the capitol of the US?", 
"What city was General Motors founded in?", 
"What is the three letter code for Los Angeles International Airport?",
"American mobster Al Capone was sentenced to 11 years in federal prison for what crime?",
"The Mexican city of Tijuana boarders what US city?"]


for (i = 0; i < questions.length; i++) {
	$(document).ready(function(){
      	$("div#questions").html(questions[0]);
     	$("div#questions2").html(questions[1]);
     	$("div#questions3").html(questions[2]);
     	$("div#questions4").html(questions[3]);
     	$("div#questions5").html(questions[4]);
    });
}

// correct answer array
var answersCorrect = ["District of Columbia", 
"Flint", 
"LAX", 
"Tax Evasion", 
"San Diego" 
]

var userChoices = ["Washington State",
"District of Columbia", "Philadelphia", "Boston", "Detroit",
"Flint", "Boulder", "Pittsburg", "LAI", "LXA", "LAX", "ILA",
"Murder", "Tax Evasion", "Money Laundering", "Illegal Gambling",
"El Paso", "San Diego", "Dallas", "Austin"
]

for (i = 0; i < userChoices.length; i++) {
	$(document).ready(function() {
		$("#choice1").html(userChoices[0]);
		$("#choice2").html(userChoices[1]);
		$("#choice3").html(userChoices[2]);
		$("#choice4").html(userChoices[3]);
		$("#choice5").html(userChoices[4]);
		$("#choice6").html(userChoices[5]);
		$("#choice7").html(userChoices[6]);
		$("#choice8").html(userChoices[7]);
		$("#choice9").html(userChoices[8]);
		$("#choice10").html(userChoices[9]);
		$("#choice11").html(userChoices[10]);
		$("#choice12").html(userChoices[11]);
		$("#choice13").html(userChoices[12]);
		$("#choice14").html(userChoices[13]);
		$("#choice15").html(userChoices[14]);
		$("#choice16").html(userChoices[15]);
		$("#choice17").html(userChoices[16]);
		$("#choice18").html(userChoices[17]);
		$("#choice19").html(userChoices[18]);
		$("#choice20").html(userChoices[19]);
	});
}

var wins = []
var loss = []


// for (i = 0; i < userChoices.length; i++) {
// 	if counter <= 0; {

// 		{ else {
// 			$(".mainContainer").html("THIS IS WHERE THE WINS/LOSSES GO");
// 			console.log(mainContainer)
// 			}
// 		} 
// 	} 
// }
 

// On click Timer Start and target 1st row
	$("#startClock").click( function(){
	   var counter = 60;
	   setInterval(function() {
	     counter--;
	      if (counter >= 0) {
	         span = document.getElementById("countDownTimer");
	         span.innerHTML = counter;
	      }
	      if (counter === 0) {
	         alert("Out of Time, Click OK to check your score");
	         clearInterval(counter);
	       }
	     }, 1000);
	});

// time left bar 
	$("#startClock").click( function(){
	var timeleft = 60;
	var timeLeftTimerBar = setInterval(function(){
	  document.getElementById("progressBar").value = 60 - --timeleft;
	  if(timeleft <= 0)
	    clearInterval(timeLeftTimerBar);
	},1000);
	});

});


		