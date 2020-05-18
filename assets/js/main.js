if(document.readyState === 'loading') {
    document.addEventListener('DomContentLoaded', ready ());
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () =>{
            overlay.classList.remove('visible');
            // game.StartGame();
        })
    });
}