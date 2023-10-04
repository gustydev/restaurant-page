const content = document.querySelector("#content");

const headline = document.createElement('div');
headline.textContent = "Contact";
headline.classList.add('headline');

const loadContact = () => {
    content.appendChild(headline);
}

export default loadContact;