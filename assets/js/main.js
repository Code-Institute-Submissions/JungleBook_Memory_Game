class AudioController {
    constructor() {
        this.muted = false;
        this.bgMusic = new Audio("assets/Audio/background-main.mp3");
        this.flipSound = new Audio("assets/Audio/flipcard.wav");
        this.matchedSound = new Audio("assets/Audio/matchcard.wav");
        this.levelUpSound = new Audio("assets/Audio/level-up.wav");
        this.gameOverSound = new Audio("assets/Audio/game-over.mp3");
        this.victorySound = new Audio("assets/Audio/victory-sound.mp3");
        this.bgMusic.volume = 0.2;
        this.victorySound.volume = 0.3;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchedSound.play();
    }
    levelUpBuzz() {
        this.levelUpSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }

}



// Onclick soundIcon to toggle sound icon image
function soundIcon() {
    if (document.getElementById("soundToggler").classList.contains("soundOn")) {
        document.getElementById("soundToggler").classList.toggle("soundOff");
    }
}





// Images for Cards stored in the respective levels

const levelOne = [
    "https://res.cloudinary.com/ktm28/image/upload/v1588621832/Jungle_book/SherKhan.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621832/Jungle_book/Mowguli.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/King_Louis.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/baloo.png",
];

const levelTwo = [
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/Bagheera.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/Kaa.png",
];

const levelThree = [
    "https://res.cloudinary.com/ktm28/image/upload/c_scale,h_150,w_150/v1588621832/Jungle_book/Winifred.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/Akela.png",
]

// Storing cards in a local storage to add cards to next level. Code-SOURCE: stack-overflow 
const levels = {
    1: levelOne,
    2: levelTwo,
    3: levelThree,
};

//Cards
class MemoryGame {
    constructor(totalTime) {
        this.cardsArray = [];
        this.totalTime = totalTime;
        this.timeRemaining = totalTime; // countdown time
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        this.currentLevel = 1;
    }

    generateCards() {
        const level = this.currentLevel;
        // ES6 spread operator method Duplicates cards for each levels
        let duplicate = [...levels[level], ...levels[level]];
        let insertCard = document.querySelector('.card-container');

        duplicate.forEach((href) =>
            insertCard.innerHTML += `<div class="card"><div class="card-back card-face">
        <img src= "https://res.cloudinary.com/ktm28/image/upload/v1590425994/Jungle_book/question_dla1j6.png" alt="card back image" class="card-img">
        </div> <div class="card-front card-face">
            <img class="card-value card-img"
                src="${href}" alt="jungle-books-image">
        </div>`
        )

        let cards = Array.from(document.getElementsByClassName('card'));
        // call flip card fucntion with a click
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.flipCard(card);
            });
        });

        this.cardsArray = cards;
    }

    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime; //time will reset each time when the game starts
        this.matchedCards = [];
        this.busy = true;
        // wait for 500ms before countdown and bgmusic begins
        setTimeout(() => {
            this.audioController.startMusic();
            this.muted = false;
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        //this will reset inner timer and text
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
        this.generateCards();
        this.shuffleCards();
    }

    hideCards() {
        this.cardsArray.forEach((card) => {
            card.classList.remove('visible');
        });
    }
    //flip card with click and increase the total click in the flip section
    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if (this.cardToCheck) {
                this.checkCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }
    // Check if the card is matched
    checkCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardUnMatch(card, this.cardToCheck);

        this.cardToCheck = null;

    }
    // When both card is matched call this function
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.levelUp();
    }
    // if the card does not match call this function
    cardUnMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 700);
    }
    // this is created for checking match for card in checkCardMatch function
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    // this will begin the countdown
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000)
    }

    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }

    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
        this.hideCards();
    }
    // Level Up function
    levelUp() {
        clearInterval(this.countDown);
        this.currentLevel = this.currentLevel + 1;
        if (this.currentLevel > 3) {
            this.victory();
            this.currentLevel = 1;
        } else {
            this.audioController.levelUpBuzz();
            document.getElementById('level-up-text').classList.add('visible');
        }
    }
    // Code snippet SOURCE: PORTEx Youtube- FisherYates shuffle algo.
    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }

    canFlipCard(card) {
        // if this statements is false then it will return true and player can flip the card
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
    }

    //mute function
    mute() {
        this.audioController.stopMusic();
        this.muted = true;
    }
    //Unmute function
    unmute() {
        this.audioController.startMusic();
        this.muted = false;
    }

}


function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));

    let game = new MemoryGame(60); //time for each level
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); //this will start the game when clicked
            game.startGame();
            //Music start

        });
    });
    // sound Button 
    let soundBtn = document.getElementById('soundToggler');
    soundBtn.addEventListener('click', () => {
        if (document.getElementById("soundToggler").classList.contains("soundOff")) {
            game.mute();
        } else {
            game.unmute();

        }
    });
    // these button will reload the page when clicked 
    let reloadButtons = document.querySelectorAll('#victoryBtn, #gameOverBtn');
    for (let i = 0; i < reloadButtons.length; i++) {
        reloadButtons[i].onclick = () => {
            location.reload();
        };
    }
}

if (document.readyState === 'loading') {
    document.addEventListener("DomContentLoaded", ready());
} else {
    ready();
}