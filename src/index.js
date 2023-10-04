import loadHome from "./home.js";
loadHome();

const content = document.querySelector('div#content');
const tabDiv = document.createElement('div');
tabDiv.classList.add('tabs');
content.appendChild(tabDiv);

function newTab(tabText) {
    const tab = document.createElement('button');
    tab.textContent = tabText;
    tab.id = tabText;
    tab.addEventListener('click', () => {
        console.log('do a thing'); // Replace later with content replacement
    })
    tabDiv.appendChild(tab);
    
};

newTab('home');
newTab('menu');
newTab('contact');