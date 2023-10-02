const content = document.querySelector("#content");

const headline = document.createElement('div');
const phrase = document.createElement('div');
const alienPic = document.createElement('img');

headline.textContent = "Gusty's Kitchen";
headline.classList.add('headline');
phrase.textContent = 'Come and experiment the best dishes of brazilian cuisine! Lorem ipsum dolor sit amet!'
phrase.classList.add('phrase');
alienPic.id = 'alien';
alienPic.src = 'images/aliencook.png';

const loadHome = () => {
    content.appendChild(headline);
    content.appendChild(phrase);
    content.appendChild(alienPic);
}

export default loadHome;