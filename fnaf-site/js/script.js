var audio = new Audio();
audio.src = "sound/honk.mp3";

function Pannel() {
  var div = document.getElementById("HandUnitDiv");
  var btn = document.getElementById("NavBtn");
  if (div.style.display === "none") {
    div.style.display = "block";
    btn.src = "images/btn2.png"
  } else {
    div.style.display = "none";
    btn.src = "images/btn2up.png"
  }
}

class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Quel est le nom du grand nom du méchant du jeu ?",["Michael Afton","Henri Afton","William Afton","John Afton"],"William Afton"),
    new Question("Quel est le personnage le plus rapide de fnaf 1 ?",["Freddy","Chica","Bonnie","Foxy"],"Foxy"),
    new Question("Sous quelle forme Purple Guy se retrouve-t-il dans fnaf 3 ?",["Spring Trap","Mangle","Toy Freddy","Lesty"],"Spring Trap"),
    new Question("Qui est responsable de la morsure de 83 ?",["Mangle","FredBear","Spring Bonnie","Freddy"],"FredBear"),
    new Question("Qui est la victime de la morsure de 87 ?",["Michael Afton","Un employé","Le Phone Guy","Mangle"],"Un employé"),
    new Question("Qui possèdent les animatroniques de fnaf 1 ?",["La famille Afton","La famille Emily","Les enfants morts","personne"],"Les enfants morts"),
    new Question("Quel animatronique est équipé d'une guitare ?",["Toy Freddy","Bonnie","Ennard","Mr. Hippo"],"Bonnie"),
    new Question("Qui est Circus Baby ?",["Elizabeth Afton","Charlotte Emily","La femme de William Afton","Un enfant inconnu"],"Elizabeth Afton"),
    new Question("Qui possède Michael Afton à la fin de sister location ?",["Molten Freddy","Ennard","Purple Guy","Circus Baby"],"Ennard"),
    new Question("Pourquoi les animatroniques toy sont finalement detruis ?",["Des problèmes d'hygiène dans le restaurant","Suite à la morsure de 87","Suite à la morsure de 83","Le restaurant prend feu"],"Suite à la morsure de 87")
];

  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  

  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
