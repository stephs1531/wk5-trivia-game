
$(document).ready(function() {
// create an array with quiz questions and answers
    var questions = [

        {
            question: "Known best for their glam aesthetic, Twisted Sister got an early start to the hair metal scene. Which popular tune were they NOT responsible for?",
            answers: {
                a: 'I Wanna Rock',
                b: 'Were Not Gonna Take It',
                c: 'I Was Made For Lovin You'
            },
            correctAnswer: 'c'
        },

        {
            question: "Who had a hit with the song 'I'll Be There for You'?",
            answers: {
                a: 'Bon Jovi',
                b: 'Whitesnake',
                c: 'Aerosmith'
            },
            correctAnswer: 'a'
        },

        {
            question: "Who sang the hit 'Tainted Love'?",
            answers: {
                a: 'Poison',
                b: 'Wham',
                c: 'Soft Cell'
            },
            correctAnswer: 'c'
        },

        {
            question: "Prince sang a song about a little _______ corvette?",
            answers: {
                a: 'gold',
                b: 'red',
                c: 'white'
            },
            correctAnswer: 'b'
        },

        {
            question: "What is Sting's real name?",
            answers: {
                a: 'Gordon Matthew Thomas Sumner',
                b: 'Paul David Hewson',
                c: 'David Robert Jones'
            },
            correctAnswer: 'a'
        }

    ];

    console.log(questions);
    console.log(questions[1].question); //this is how to target a specific question -- using the index of the question you want

//get references to the divs you'll need to add stuff to later
    var questionContainer = $("#game-content");
    var resultsContainer = $("#results");
    var submitButton = $("#submit");

//create a function to generate the quiz on the page
function startQuiz(questions, questionContainer, resultsContainer, submitButton) {

    //create a function to display the questions
 function showQuestions(questions, questionContainer) {
    //create a variable to store the questions and answer choices
    var output = [];
    var answers;

    //create for loop to get each available answer in the question objects, add radio buttons so only one can be selected, and push them to the answer variable
    
    for (var i = 0; i < questions.length; i++) {
        //reset the list of answers for each question
        answers = [];
    
        for (letter in questions[i].answers){ //sorts through each letter in the answer object
            //add html radio button
            answers.push(
                '<label>' + '<input type="radio" name="question' + i + '" value="' + letter + '">' + letter + ': ' + questions[i].answers[letter] + '</label>'
             );
        }

         //add question and its answers to the output array so it will be displayed on the page
        output.push(
            '<div class="questions">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
        ) //.join combines the array elements so that they are not shown separated by a comma

        console.log(output);
        console.log(answers);

    }

    //combine output into one list and push to html
    questionContainer.innerHTML = output.join('');
}

function showResults(questions, questionContainer, resultsContainer){
    //get answer container from quiz
    var answerContainer = questionContainer.querySelectorAll('.answers');

    //record user's answers
    var userAnswer = '';
    var numCorrect = 0; //set correct answers to 0 to start
    var numIncorrect = 0;

    //create a for loop to record the correctness of each question
    for(var i = 0; i < questions.length; i++) {

        //find selected answer
        userAnswer = (answerContainer[i].querySelectorAll('input[name=question' + i + ']:checked')|| {}).value;

        //if answer is correct
        if (userAnswer === questions[i].correctAnswer){
            numCorrect++;

        } else {
            numIncorrect++;
        }
    }

    //show number of correct answers
    resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
}



//run showQuestions
showQuestions(questions, questionContainer);

}

});