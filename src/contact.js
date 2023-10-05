const content = document.querySelector("#content");

const headline = document.createElement('div');
headline.textContent = "Contact";
headline.classList.add('headline');

const contactInfo = document.createElement('div');
contactInfo.classList.add('info-card')

contactInfo.innerHTML = `Restaurant Phone: <b>4002-8922</b> <br>
Chef's Phone: <b>1234-5678</b> <br><br>
<b>Location</b>: Avenida Brigadeiro Faria Lima, 42069`

const loadContact = () => {
    content.appendChild(headline);
    content.appendChild(contactInfo);
}

export default loadContact;