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
}

const addToPage = function(food) {
    const itemDiv = document.createElement('div');
    const img = document.createElement('img');
    itemDiv.classList.add('item');
    const firstName = food.name.split(' ')[0].toLowerCase();
    img.id = `${firstName}`;
    img.src = `images/${firstName}.jpg`;
    img.alt = `${food.name}`;
    itemDiv.appendChild(img);
    for (const [key, value] of Object.entries(food)) {
        const infoDiv = document.createElement('div');
        infoDiv.classList.add(`item-${key}`);
        infoDiv.textContent = `${value}`;
        itemDiv.appendChild(infoDiv);
    };
    menuDiv.appendChild(itemDiv);
}

const foodList = [
    new Food('Ramen With Eggs', '45', 'A truly low-cost delicacy!'), 
    new Food('Nescau Milk', '1', 'Refreshing drink for any occasion!'),
    new Food('Lasagna', '20', 'A bit of an authentic italian flavor, prepared with a modern microwave.'),
    new Food('Pizza (Brazilian Style)', '30', 'For the whole family! By Pizzaria Bate Papo'),
    new Food('Cake in a Pot', '5', 'A tasty gourmet dessert to contribute with brazilian entrepreneurship!')
];

foodList.forEach(food => {
    addToPage(food);
});

const loadMenu = () => {
    content.appendChild(headline);
    content.appendChild(menuDiv);
}

export default loadMenu;
