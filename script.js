'use strict';


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let numberInput = document.querySelector('.number-input');
let guessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let backgroundBody = document.querySelector('body');
let soundTrue = new Audio('./audio/verno.mp3');
let soundFalse = new Audio('./audio/oshybka.mp3');
let soundOh = new Audio('./audio/oh.mp3');



document.querySelector('.check').addEventListener('click', function () {
    let guessNumber = Number( numberInput.value); 
   
//input пустой 
    if(!guessNumber){
        guessMessage.textContent = 'Введите число от 1 до 20!';

//Угадал число 
    } else if (guessNumber === secretNumber) {
        guessMessage.textContent = 'Ура! Ну, мегамозг!';  
        question.textContent = secretNumber;
 
        backgroundBody.style.backgroundColor = 'green';
        soundTrue.play();

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


//число не равно secretNumber

    }else if (guessNumber !== secretNumber){
        soundFalse.play();
        soundFalse.volume = 0.2;

        if (score >1 ){
            
            guessMessage.textContent =  guessNumber > secretNumber ?'Слишком много!' : 'Слишком мало!'; 
            
            score-- ;
            document.querySelector('.score').textContent = score;
            
    
    //Проигрыш
            } else {
                guessMessage.textContent = 'Жаль, вы проиграли((('; 
                document.querySelector('.score').textContent = 0;
                backgroundBody.style.backgroundColor = 'red';
                soundOh.play();
                soundOh.volume = 0.3;
                soundFalse.volume = 0.0;
            };
    }

});

document.querySelector('.again').addEventListener('click', function(){

secretNumber = Math.trunc(Math.random() * 20 + 1);
score = 20;

    numberInput.value = "";
    guessMessage.textContent = 'Начни угадывать';
    backgroundBody.style.backgroundColor = 'black';
    document.querySelector('.score').textContent = score;
    question.textContent = '???';
   
});
