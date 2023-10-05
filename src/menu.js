const content = document.querySelector("#content");

const headline = document.createElement('div');
headline.textContent = "Menu";
headline.classList.add('headline');

const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');

function Food(name, price, desc) {
    this.name = name;
    this.price = `$${price}`;
    this.desc = desc;
    this.firstName = name.split(' ')[0].toLowerCase();
    this.info = {'name': this.name, 'price': this.price, 'desc': this.desc};
    this.append = function() {
        const itemDiv = document.createElement('div');
        const img = document.createElement('img');
        itemDiv.classList.add('item');
        img.id = `${this.firstName}`;
        img.src = `images/${this.firstName}.jpg`;
        img.alt = `${this.name}`;
        itemDiv.appendChild(img);
        for (const [key, value] of Object.entries(this.info)) {
            const infoDiv = document.createElement('div');
            infoDiv.classList.add(`item-${key}`);
            infoDiv.textContent = `${value}`;
            itemDiv.appendChild(infoDiv);
        };
        menuDiv.appendChild(itemDiv);
    }
}

const ramen = new Food('Ramen With Eggs', '45', 'A truly low-cost delicacy!');
const nescau = new Food('Nescau Milk', '1', 'Refreshing drink for any occasion!');
const lasagna = new Food('Lasagna', '20', 'A bit of an authentic italian flavor, prepared with a modern microwave.');
const pizza = new Food('Pizza (Brazilian Style)', '30', 'For the whole family! By Pizzaria Bate Papo');
const cake = new Food('Cake in a Pot', '5', 'A tasty gourmet dessert to contribute with brazilian entrepreneurship!');

const foodList = [ramen, nescau, lasagna, pizza, cake];

foodList.forEach(element => {
    element.append();
});

const loadMenu = () => {
    content.appendChild(headline);
    content.appendChild(menuDiv);
}

export default loadMenu;
