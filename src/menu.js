const content = document.querySelector("#content");

const headline = document.createElement('div');
headline.textContent = "Menu";
headline.classList.add('headline');

const loadMenu = () => {
    content.appendChild(headline);
}

export default loadMenu;