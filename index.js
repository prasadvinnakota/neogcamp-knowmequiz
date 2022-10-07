//Accessing the package readline-sync 
var readlineSync = require("readline-sync")

//Global variable initiaization
var score = 0

//Take input from the user
var userName = readlineSync.question("Please enter your name")

console.log("Welcome "+ userName + " Do you know me")

//Function that takes the parameters question and answer 
function knowMe(question, answer)
  {
    //Take answer from user
    var userAnswer = readlineSync.question(question)
    //checking the condition is true/false using branch
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("right!")
      score = score+1
    }
    else
    {
      console.log("Wrong!")
    }
    console.log("Current Score: ", score)
    console.log("--------------------")

  }

//array of objects containing questions and aswers
var questions = [
  {
    question:"Do i like programming Yes/No?",
    answer:"Yes"
  },
  {
    question:"Which programming Language i like?",
    answer:"Javascript"
  },
  {
    question:"Who is my favourite actor?",
    answer:"Pavan Kalyan"
  },
  {
    question:"Do i belive in love Yes/No?",
    answer:"Yes"
  },
  {
    question:"Do i love someone Yes/No?",
    answer:"Yes"
  }
]

var topScores=[
  {
    name:"Vikas",
    score:5
  },
  {
    name:"Ram",
    score:4
  }
]

//Running loop over the array
for(var i=0; i<questions.length; i++)
  {
    knowMe(questions[i].question, questions[i].answer)
    
  }

console.log("Your Final Score Is: ", score)
console.log("Top Scored Guys: ")
for(var i=0; i<topScores.length;i++)
  {
    console.log(topScores[i].name+" "+ topScores[i].score)
  }
console.log("You scored higher? Please send the screen shot ")
