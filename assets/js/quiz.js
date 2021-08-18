const questionArray =  [
    {
      quest : "What is the capital of Ethiopia?",
      opt : [
       "Mekele",
       "Aksum",
       "Addis Ababa",
      ],
      answ : 2 // correct answer is a third position, number 2 in index .
    },
    {
      quest : "What drink is Ethiopia famous for?",
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
    },
    { 
        quest: "How many months are there in Ethiopian calendar?",
        opt: [
            "12",
            "10", 
            "13"
        ],
    answ: 2
    },
    {quest: "What country almost managed to colonize Ethiopia?",
      opt: ["France",
             "Italy",
             "United Kingdom",
            ],
             answ: 1
    },
    {quest: "What is the name of Ethiopian bread?",
     opt: ["doughnut",
           "croissant",
           "injera",
          ],
           answ: 2
    },
      {quest: "What is the population of Ethiopia?",
      opt: ["50 million",
            "110 million",
            "75 million"],
           answ: 1
    },
    {  quest : "What is the name of the popular Ethiopian dance?",
        opt:["Eskesta",
            "Rumba",
            "Azonto"],
            answ: 0
    },
    { quest : "What is the name of the Ethiopian honey wine?",
    opt:["Tej",
        "Pinot-Grigio",
        "Merlot"],
        answ: 0
    },

    { quest : "Which year is currently in Ethiopia?",
    opt:["2021",
        "2005",
        "2014"],
        answ: 2 
    },
    { quest : "Which sport is Ethiopia famous for?",
    opt:["Basketball",
        "Running",
        "Tennis"],
        answ: 1
    },
    { quest : "What was the name of the last emperor of Ethiopia?",
    opt:["Emperor Tewodros",
        "Haile Selasie",
        "Empress Zawditu"],
        answ: 2
    },
    { quest : "What is Lalibela famous for?",
    opt:["Rock Hewn Churches",
        "National Museum",
        "Axumite Civilization"],
        answ: 0
    },
    { quest : "What is the name of a popular Ethiopian musician?",
    opt:["Fela Kuti",
        "Teddy Afro",
        "Toumani Diabate"],
        answ: 1
    },
    { quest : "What is the name of the Ethiopian Jewish community?",
    opt:["Falashas",
        "Afar people",
        "Tuaregs"],
        answ: 0
    },
    { quest : "What is the name of the hottest place on earth/Ethiopia?",
    opt:["Sahara",
        "Gobi",
        "Danakil"],
        answ: 2
    },
    { quest : "When Ethiopians celebrate their new year?",
    opt:["July",
        "September",
        "January"],
        answ: 1
    },
    { quest : "Which of the countries below is not Ethiopia's neighbour?",
    opt:["Botswana",
        "Eritrea",
        "Kenia"],
        answ: 0
    },
];
let randomizedQuestionsArray = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let restartButton = document.getElementById('refresh');

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
   
  
    return array;
}

function displayQuestion(question){
  const questionNumber = currentQuestionIndex + 1;
  document.getElementById('quizQuestion').innerHTML = questionNumber + '- ' + question.quest;
  document.getElementById('option1').innerHTML = question.opt[0];
  document.getElementById('option2').innerHTML = question.opt[1];
  document.getElementById('option3').innerHTML = question.opt[2];
}

function checkIfGameFinished(){
  if (currentQuestionIndex >= randomizedQuestionsArray.length){
    console.log('Game over');
    if (currentScore >= 12){
      alert('Congratulations! You exploration is succesful!')
    }
    else{
      alert('Oops! Try one more time!');
    }
  }
  
}

function validateAnswer(event){
  const answer = event.target.getAttribute('data-index');
  const currentQuestion =  randomizedQuestionsArray[currentQuestionIndex];
  if (parseInt(answer) === parseInt(currentQuestion.answ)){
    currentScore = currentScore + 1 ;
  }
  else{
    console.log('wrong answer');
  }
  document.getElementById('quizScore').innerHTML = currentScore;
  currentQuestionIndex = currentQuestionIndex + 1;
  if (currentQuestionIndex <  randomizedQuestionsArray.length){
    displayQuestion(randomizedQuestionsArray[currentQuestionIndex]);
  }
  checkIfGameFinished();
}

window.addEventListener("load",function (){
  let answersArray = document.querySelectorAll(".answer");
  answersArray.forEach(function(elem) {
    elem.addEventListener("click", validateAnswer);
  });

  randomizedQuestionsArray = shuffle(questionArray);
  displayQuestion(randomizedQuestionsArray[currentQuestionIndex]);
});

restartButton.addEventListener('click', function(e) {
  location.reload();
}, false);

