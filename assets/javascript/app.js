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

// correct answer array
var answersCorrect = ["District of Columbia", 
"Flint", 
"LAX", 
"Tax Evasion", 
"San Diego" 
]

var count=60;
//1000 will  run it every 1 second
var counter=setInterval(timer, 1000); 

	function timer() {
  	count=count-1;
  	if (count <= 0)
  	{
    clearInterval(counter);
     //counter ended, do something here
     return("Game Over");
     console
  }

  //Do code for showing the number of seconds here
  function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}
} 

 $(document).ready(function(){
         function getdate(){
                var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
             if(s<10){
                 s = "0"+s;
             }

            $("h1").text(h+" : "+m+" : "+s);
             setTimeout(function(){getdate()}, 500);
            }

        $("button").click(getdate);
    });

});


		