const content = document.querySelector("#content");

const headline = document.createElement('div');
headline.textContent = "Contact";
headline.classList.add('headline');

const contactInfo = document.createElement('div');
contactInfo.classList.add('info-card')

contactInfo.innerHTML = `Restaurant Phone: <b>4002-8922</b> <br>
Chef's Phone: <b>1234-5678</b> <br><br>
<b>Location</b>: <br><iframe allowfullscreen="" class="map-top" height="450" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD4iE2xVSpkLLOXoyqT-RuPwURN3ddScAI
&amp;q=Eiffel+Tower,Paris+France" width="598"></iframe>`

const loadContact = () => {
    content.appendChild(headline);
    content.appendChild(contactInfo);
}

export default loadContact;