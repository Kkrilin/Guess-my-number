'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🏆'

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 10; 
document.querySelector('.guess').value = 23; 
console.log(document.querySelector('.guess').value) */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

// When there is no input
if (!guess){
    displayMessage('💀 no number!')
//    document.querySelector('.message').textContent = '💀 no number!';

//    when player wins
} else if (guess === secretNumber){
    displayMessage('Correct Number🏆')
    // document.querySelector('.message').textContent = 'Correct Number🏆';
    document.querySelector('.number').textContent = secretNumber;
document.querySelector('body').style.backgroundColor = '#60b347';

document.querySelector('.number').style.width = '30rem'

       if(score > highscore)   {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
       }

    // when to high 
} else if(guess !== secretNumber) {
if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ?'Too High' : 'Too low';
        displayMessage(guess > secretNumber ?'Too High' : 'Too low')
        score--;
        document.querySelector('.score').textContent = score;
}else {
    displayMessage('You lost the game')
    // document.querySelector('.message').textContent = 'You lost the game'
    document.querySelector('.score').textContent = 0
}



// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too High';
//         score--;
//         document.querySelector('.score').textContent = score;
// }else {
//     document.querySelector('.message').textContent = 'You lost the game'
//     document.querySelector('.score').textContent = 0
// }

// // when to low
// } else if(guess < secretNumber){
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too low';
//         score--;
//         document.querySelector('.score').textContent = score;
// }else {
//     document.querySelector('.message').textContent = 'You lost the game'
//     document.querySelector('.score').textContent = 0
// };
}
});
document.querySelector('.again').addEventListener('click', function(){
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
displayMessage('Start guessing...');
// document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});
