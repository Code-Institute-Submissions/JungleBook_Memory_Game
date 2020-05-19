class AudioController {
    constructor() {
        this.bgMusic = new Audio("assets/audio/background-main.mp3");
        this.flipSound = new Audio("assets/audio/flipcard.wav");
        this.matchedSound = new Audio("assets/audio/matchcard.wav");
        this.levelUpSounds = new Audio("assets/audio/level-up.wav");
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
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchedSound.play();
    }
    levelup() {
        this.levelUpSounds.play();
    }
    victory() {
        this.stopMusic();
        this.victory.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }

}










// Images for Cards

const level1 = [
    "https://res.cloudinary.com/ktm28/image/upload/v1588621832/Jungle_book/SherKhan.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621832/Jungle_book/Mowguli.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/King_Louis.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/baloo.png",
];

const level2 = [
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/Bagheera.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/Kaa.png",
];

const level3 = [
    "https://res.cloudinary.com/ktm28/image/upload/c_scale,h_150,w_150/v1588621832/Jungle_book/Winifred.png",
    "https://res.cloudinary.com/ktm28/image/upload/v1588621831/Jungle_book/Akela.png",
]

// adds cards to next level. Code-source: stack-overflow 
const levels = {
    1: level1,
    2: level2,
    3: level3,
};

//Cards



// Add function to generate cards






function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.StartGame();
            //Music start
    
        })
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DomContentLoaded', ready());
} else {
    ready();
}