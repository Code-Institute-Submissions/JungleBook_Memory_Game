class AudioController {
    constructor() {
        this.bgMusic = new Audio("assets/audio/background-main.mp3");
        this.flipSound = new Audio("assets/audio/flipcard.wav");
        this.matchedSound = new Audio("assets/audio/matchcard.wav");
        this.levelUpSound = new Audio("assets/audio/level-up.wav");
        this.gameOverSound = new Audio("assets/audio/game-over.mp3");
        this.victorySound = new Audio("assets/audio/victory-sound.mp3");
        this.bgMusic.volume = 0.5;
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
    levelup() {
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




function soundIcon() {
    if (document.getElementById("soundToggler").classList.contains("soundOn")) {
        document.getElementById("soundToggler").classList.toggle("soundOff");
    }
}





// Images for Cards

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

// adds cards to next level. Code-source: stack-overflow 
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

        let duplicate = [...levels[level], ...levels[level]]; // Code Source: stack-overflow ES6 spread operator method

        let insertCard = document.querySelector('.game-container');

        duplicate.forEach((href) =>
            insertCard.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
        <div class="card-back card-face">
        </div> <div class="card-front card-face">
            <img class="card-value card-img"
                src="${href}">
        </div>`
            )
        );

        let cards = Array.from(document.getElementsByClassName('card'));

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

        /*setTimeout(() => {
            this.audioController.startMusic();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 1200);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks; //this will reset inner timer and text*/
        this.generateCards();
        this.shuffleCards();
    }

    hideCards() {
        this.cardsArray.forEach((card) => {
            card.classList.remove('visible');
        });
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
                //if statement
        }
    }

    shuffleCards() {
        for(let i = this.cardsArray.length -1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    } // Code snippet source: webdev simplified- FisherYates shuffle algo.
    
    canFlipCard(card) {
        // if this statements is false then it will return true and player can flip the card
        //return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
        return true;
    }
   

    mute() {
        this.audioController.stopMusic();
    }

    unmute() {
        this.audioController.startMusic();
    }

}


// Add function to generate cards

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));

    let game = new MemoryGame(60); //time
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); //this will start the game when clicked
            game.startGame();
            //Music start

        });
    });

    let soundButton = document.querySelector('.btn').addEventListener("click", () => {
        if (document.getElementById('soundToggler').classList.contains('soundOff')) {
            game.mute();
        } else {
            game.unmute();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener("DomContentLoaded", ready());
} else {
    ready();
}