//simple button on landing page that starts game when clicked
//display a timer for 1 minute
//loop through questions array to get the questions
    //display questions in html
    //loop through questions array to get radio buttons
        //display html of buttons on page
//put submit button at the end of the loop

//game ends if timer gets to 0 or user hits submit

//write results to html

//option to reset the game and start over

//variables:
//correct answers
//incorrect answers
//unanswered questions
//variable to hold user selection

//arrays:
//array of objects with 2 arrays: one for questions and one for answers, and the correct answer

//set variables
var userAnswer = [];//will be populated later
var numCorrect = 0;
var numIncorrect = 0;
var missed = 0;
var timer;
var counter = 61;
var intervalID;

var questions = [

    {
        question: "Known best for their glam aesthetic, Twisted Sister got an early start to the hair metal scene. Which popular tune were they NOT responsible for?",
        answers: ["I Wanna Rock", "Were Not Gonna Take It", "I Was Made For Lovin You"],
        correctAnswer: 2
    },

    {
        question: "Who had a hit with the song 'I'll Be There for You'?",
        answers: ["Bon Jovi", "Whitesnake", "Aerosmith"],
        correctAnswer: 0
    },

    {
        question: "Who sang the hit 'Tainted Love'?",
        answers: ["Poison", "Wham", "Soft Cell"],
        correctAnswer: 2
    },

    {
        question: "Prince sang a song about a little _______ corvette?",
        answers: ["gold", "red", "white"],
        correctAnswer: 1
    },

    {
        question: "What is Sting's real name?",
        answers: ["Gordon Matthew Thomas Sumner", "Paul David Hewson", "David Robert Jones"],
        correctAnswer: 0
    }

];

//to get missed answers, fill userAnswer with nulls
for (var i = 0; i < questions.length; i++) {
    userAnswer[i] = null;
}

//Quiz starts here
$(document).ready(function() {

    $("#quizContainer").hide();
    $("#resultsContainer").hide();
    $("#timeLeft").hide();


    $("#startGame").click(function() {
        //attach setInterval to variable so it can be stopped
        intervalID = setInterval(decrement, 1000);
       
        //call jquery to add questions to html
        addQuestions();

        //hide landing page
        $("#startGame").hide();
        console.log("i'm invisible!");
        $("#quizStart").hide();

        $("#timeLeft").show();
        $("#quizContainer").show();
        
        //add submit button
        addSubmitButton();

        $("#submit").click(function() {
            console.log("I've been clicked!");
            addResults();
            $("#quizContainer").hide();
            $("#resultsContainer").show();
            // startOver();

        })

        $("input[type='radio']").click(function () {
            // var radioValue = $("input:checked").val();
            // console.log(radioValue);
            userAnswer = this.value;
            console.log(this.value);
            console.log(userAnswer);
        });


    });

    //loop to go through each question and answer group and display on page

    function addQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $("#quizContent").append(questions[i].question + "<br>" + "<br>");
            //add radio buttons and give them values and names of x and i
            for (var x = 0; x < questions[i].answers.length; x++) {
                $("#quizContent").append("<label class='radio-inline'><input value'" + x + "' type='radio' name='" + i + "'>" + questions[i].answers[x] + "</label>" + "<br>");
                
                console.log(questions[i].answers[x]);
                console.log(x);
            }

            //div to add space between questions
            $("#quizContent").append("<div class='questionPadding'></div>")

        }
    }

    //add submit button to page
    function addSubmitButton() {
        $("#submit").append("<button id='submitAnswers'>Submit</button>");
    }

    //timer from class 
    function decrement() {
        counter--;
        $("#timeLeft").html("<h2 class='timer'> Time Left: " + counter + "</h2>"); //display timer to html
  
        if (counter === 0) { //when timer hits 0:00
  
          stop();
  
          alert("Time's Up!");

          addResults();
        }
      }

    function addResults() {
        //hide quiz content
        $("#quizContent").hide();
        //hide timer
        $("#timeLeft").hide();
        //hide submit button
        $("#submit").hide();

        //determine if user's answers match correct answers
        for (i = 0; i < questions.length; i++) {
            if (questions[i].correctAnswer == userAnswer) {
                numCorrect++;
            } else if (userAnswer[i] === null) {
                missed++;
            } else {
                numIncorrect++
            }
        }

        // $("#quizResults").append("<h3>How'd You Do?</h3>" + "<br>")
        $("#quizResults").append("<p>Correct Answers: " + numCorrect + "</p>")
        $("#quizResults").append("<p>Incorrect Answers: " + numIncorrect + "</p>")
        $("#quizResults").append("<p>Unanswered " + missed + "</p>")

        clearInterval(intervalID);
    }









})
