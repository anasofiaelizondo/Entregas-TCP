// #name #age #likesMusic
const nombreElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

const nombre = 'Ana Sofia';
const age = 18;
const likesMusic = true;


nombreElement.textContent = nombre;
ageElement.textContent = age;

if(likesMusic === true){
    likesMusicElement.textContent = 'me gusta la musica';
}else{
    likesMusicElement.textContent = 'me aburre la musica';
}

const primerDiv = document.querySelector('div');
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un nuevo p';

primerDiv.appendChild(nuevoParrafo);

primerDiv.removeChild(nuevoParrafo);
/*
console.log(nombreElement.nodeName);
console.log(ageElement.nodeName);
console.log(likesMusicElement.nodeName);
*/

const linkGoogle = document.querySelector('a#link_google');

const googleClicked = () => {
    console.log('Google was clicked');
};

linkGoogle.addEventListener('click', googleClicked);

const teclaPresionada = () => {
    alert('Presionaron tecla');

}

//document.addEventListener('keydown', teclaPresionada);

/* const linkGoogle = document.querySelector('a#link_google');
linkGoogle.textContent = 'Yahoo';
linkGoogle.href = 'yahoo.com';
linkGoogle.id = 'link_yahoo';

const linkYahoo = document.querySelector('a#link_yahoo')
linkYahoo.textContent = 'Si es Yahoo';
linkGoogle.href = 'yahoo.com.mx' */


