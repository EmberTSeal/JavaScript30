window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key = ${e.code}]`);
    if(!audio)
        return;
    const key = document.querySelector(`div[data-key = ${e.code}]`);
    key.classList.add('playing');   
    audio.currentTime = 0;  //rewind to start
    audio.play();       //play matching key music
});

function removeTransition(e){
    if(e.propertyName !== 'transform') 
        return;
    console.log(e.target.classList.remove('playing'));    
}    

const keys = document.querySelectorAll(`.key`);

keys.forEach( key => key.addEventListener('transitionend', removeTransition));