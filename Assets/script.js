var index = -1
document.querySelector("#start-button")
.addEventListener("click", function(){
    setTime() 
    index++ 
    document.querySelector("#opener").style="display: none"
    document.querySelector("#quiz").style="display: block"
    document.querySelector("#question").textContent=questions[index].Question
    document.querySelector("#btn1").textContent=questions[index].Option1
    document.querySelector("#btn2").textContent=questions[index].Option2
    document.querySelector("#btn3").textContent=questions[index].Option3
    document.querySelector("#btn4").textContent=questions[index].Option4
    document.querySelector("#btn1").addEventListener("click", nextQuestion)
    document.querySelector("#btn2").addEventListener("click", nextQuestion)
    document.querySelector("#btn3").addEventListener("click", nextQuestion)
    document.querySelector("#btn4").addEventListener("click", nextQuestion)
});

var timeEl = document.querySelector("#timer")
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until the game ends.";

    if(secondsLeft === -1) {
      secondsLeft = 0
      // Stops execution of action at set interval
      timeEl.textContent = secondsLeft + " seconds left until the game ends.";

      clearInterval(timerInterval);
      var initials = prompt("initials")
    //hide quiz and show highscore and set highscore value to initials + seconds left
    document.querySelector("#score").style="display: block"
    document.querySelector("#quiz").style="display: none"
    document.querySelector("#userScore").textContent = initials + ": " + secondsLeft
    }

  }, 1000);
}

var questions = [
    {
        Question: "Arrays in JavaScript can be used to store ______.",
        Option1: "String and Numbers",
        Option2: "Other arrays",
        Option3: "Booleans",
        Option4: "All of the above",
        CorrectAnswer: "All of the above",
    },
    {
        Question: "Commonly used data types do not include ______.",
        Option1: "String",
        Option2: "Alerts",
        Option3: "Booleans",
        Option4: "Numbers",
        CorrectAnswer: "Alerts",
    },
    {
      Question: "Objects are a collection of ______.",
      Option1: "Properties",
      Option2: "Arrays",
      Option3: "Booleans",
      Option4: "All of the above",
      CorrectAnswer: "Properties",
    },
    {
      Question: "Logical operators take in two or more expressions and return ______.",
      Option1: "True",
      Option2: "False",
      Option3: "Both A and B",
      Option4: "None of the above",
      CorrectAnswer: "Both A and B",
    },
    {
      Question: "To access a value stored in a variable, use the variable's ______.",
      Option1: "Age",
      Option2: "Name",
      Option3: "Birthday",
      Option4: "Array",
      CorrectAnswer: "Name",
    },
    {
      Question: "To log a single element, in an array, we use the name of the array with the index in ______.",
      Option1: "Square Brackets",
      Option2: "Back Ticks",
      Option3: "Parenthesis",
      Option4: "Curly Brackets",
      CorrectAnswer: "Square Brackets",
    }
]

function nextQuestion () {
  console.log(this.textContent)
  console.log(questions[index].CorrectAnswer)
  console.log(this.textContent != questions[index].CorrectAnswer)
  if (this.textContent != questions[index].CorrectAnswer){
      secondsLeft-=10 
  }
  index++
  if(secondsLeft<0){
    secondsLeft=0
  }
  if(index == questions.length || secondsLeft == 0){
    var initials = prompt("initials")
    //hide quiz and show highscore and set highscore value to initials + seconds left
    document.querySelector("#score").style="display: block"
    document.querySelector("#quiz").style="display: none"
    document.querySelector("#userScore").textContent = initials + ": " + secondsLeft
  }
  
    
    document.querySelector("#question").textContent=questions[index].Question
    document.querySelector("#btn1").textContent=questions[index].Option1
    document.querySelector("#btn2").textContent=questions[index].Option2
    document.querySelector("#btn3").textContent=questions[index].Option3
    document.querySelector("#btn4").textContent=questions[index].Option4
}

document.querySelector("#restart").addEventListener("click", function() {
  document.location.reload()
})    