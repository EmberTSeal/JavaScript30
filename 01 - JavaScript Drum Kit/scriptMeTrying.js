window.addEventListener( 'keydown', function(e){
    const audio = document.querySelector(`audio[data-key = "${e.code}"]`);
    if(!audio)
        return;
    const key = document.querySelector(`div[data-key = "${e.code}"]`);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll(`.keys`);

function removeTransition(e){
    if(e.propertyName !== 'transform')
        return;
    e.target.classList.remove(`playing`);
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));