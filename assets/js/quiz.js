//code taken from https://code-boxx.com/simple-javascript-quiz/ and modified
let quiz = {
  // q-questions, o-answer options, a-correct answer
    data: [
    {
      quest : "<h3>What is the capital of Ethiopia?</h3>",
      opt : [
       "Mekele",
       "Aksum",
       "Addis Ababa",
      ],
      answ : 2 // correct answer is a third position, number 2 in index .
    },
    {
      quest : "<h3>What drink is Ethiopia famous for?</h3>",
      opt : [
        "tea",
        "coffee",
        "beer",
    
      ],
      answ : 1
    },
    {
      quest : "Which animal is endemic fo Ethiopia?",
      opt : [
        "lion",
        "tiger",
        "gelada monkey",
      ],
      answ : 2
    },
    {
      quest : "What is one of the official languages in Ethiopia?",
      opt : [
        "Amharic",
        "Wolof",
        "Twi",
      ],
      answ : 0
    },
    {
      quest : "In which part of Africa lies Ethiopia ?",
      opt : [
        "East Africa",
        "West Africa",
        "South Africa",
        
      ],
      answ : 0
    }
    ],
  
    // (A2) HTML ELEMENTS
    htmlBox: null, // HTML quiz container
    htmlQuestion: null, // HTML question wrapper
    htmlAnswer: null, // HTML answers wrapper
  
    now: 0, // current question
    score: 0, // current score
  
    // (B) INIT QUIZ HTML
    init: function(){
      // (B1) WRAPPER
      quiz.htmlBox = document.getElementById("ethioQuiz");
  
      // (B2) QUESTIONS SECTION
      quiz.htmlQuestion = document.createElement("div");
      quiz.htmlQuestion.id = "quizQuestion";
      quiz.htmlBox.appendChild(quiz.htmlQuestion);
  
      // (B3) ANSWERS SECTION
      quiz.htmlAnswer = document.createElement("div");
      quiz.htmlAnswer.id = "quizAnswer";
      quiz.htmlBox.appendChild(quiz.htmlAnswer);
  
      // (B4) GO!
      quiz.draw();
    },
  
    // (C) DRAW QUESTION
    draw: function(){
      // (C1) QUESTION
      quiz.htmlQuestion.innerHTML = quiz.data[quiz.now].quest;
  
      // (C2) OPTIONS
      quiz.htmlAnswer.innerHTML = "";
      for (let i in quiz.data[quiz.now].opt) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.htmlAnswer.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.data[quiz.now].opt[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", quiz.select);
        quiz.htmlAnswer.appendChild(label);
      }
    },
    
    // (D) OPTION SELECTED
    select: function(){
      // (D1) DETACH ALL ONCLICK
      let all = quiz.htmlAnswer.getElementsByTagName("label");
      for (let label of all) {
        label.removeEventListener("click", quiz.select);
      }
  
      // (D2) CHECK IF CORRECT
      let correct = this.dataset.idx == quiz.data[quiz.now].answ;
      if (correct) { 
        quiz.score++; 
        this.classList.add("correct");
      } else {
        this.classList.add("wrong");
      }
    
      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
      setTimeout(function(){
        if (quiz.now < quiz.data.length) { quiz.draw(); } 
        else {
          quiz.htmlQuestion.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
          quiz.htmlAnswer.innerHTML = "";
        }
      }, 1000);
    }
  };
  window.addEventListener("load", quiz.init);