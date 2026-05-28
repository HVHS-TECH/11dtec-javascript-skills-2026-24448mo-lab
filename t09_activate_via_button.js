
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Hello Maite</h2>";
OUTPUT.innerHTML += "<h2>Goodbye</h2>";

function welcome() {
    OUTPUT.innerHTML += "<h1>Welcome to the shop</h1>";
}


welcome()

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<h2>"+ _name + ": $"+ _price + "</h2>";
}

displayProduct ("Chocolate bar", 4)
displayProduct ("Chips", 3)
displayProduct ("Drink", 2.50)

function start() {
    OUTPUT.innerHTML = "<h1>Welcome to the shop</h1>";
    displayProduct ("Chocolate bar", 4)
    displayProduct ("Chips", 3)
    displayProduct ("Drink", 2.50)
}