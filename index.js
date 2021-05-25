var input = require('readline-sync');
var score = 0;

var questions = [{
  question: "What is my Date of Birth?(DD-MM-YYYY) : ",
  answer: "22-03-1997",
},{
  question: "In which state I live? : ",
  answer: "Delhi",
},{
  question: "How many siblings do I have?One/Two? : ",
  answer: "Two",
},{
  question:"What is my favourite sport? : ",
  answer: "Cricket",
},{
  question: "which is the organisation I am working for? : ",
  answer: "Wipro",
},{
  question : "What is my nick? : ",
  answer : "mohitsinghal22",
},]

function funcScore(){
  for(var i = 0; i<questions.length; i++){
      var enteredAnswer = input.question(questions[i].question)
      if(enteredAnswer === questions[i].answer){
        console.log("Congrats! Right Answer. Your Score is : " + ++score)
      }else{
        console.log("OOPS! Wrong Answer. Right Answer is : " + questions[i].answer)
      }
      console.log("----------------------------------")
  }
  console.log("Our relationship score is : " + score);
}

console.log("Hi there! This game is to check our relationship score. This program will ask you few questions and you will hvae to answer them.")
funcScore()