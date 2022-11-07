const nombre = 'Ana Sofia';
const edad = 39;
const likesMusic = true;

const nombreElement = document.querySelector('span#name');
const edadElement = document.querySelector('span#age');
const likesMusicElement = document.querySelector('span#likesMusic');

nombreElement.textContent = nombre;
edadElement.textContent = age;

if(likesMusic === true){
    likesMusicElement.textContent = 'me gusta la musica';
}else{
    likesMusicElement.textContent = 'me aburre la musica';
}

const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];


const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');



const playNote = (key) => {
    const noteAudio = document.getElementById(key.dataset.note)

    noteAudio.play();
}

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1){
        playNote(whiteKeys[whiteKeyIndex]);
    }

    if (blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex]);
    }

});


