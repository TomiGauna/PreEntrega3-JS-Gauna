const productsContainer = document.getElementById("products-container");
const cartIcon = document.getElementById('shopping-cart');
const cartWindow = document.getElementById('cartwindow');

caps.forEach((cap) => {
    let eachProduct = document.createElement("div");
    eachProduct.className = "eachproduct-div";
    eachProduct.innerHTML = `
    <div class = "img-p-container">
        <img src ="./images/${cap.colour}.jpg" class = "prod-img">
        <h3 class = "prod-name">${cap.name}</h3>
        <p class = "prod-price">$${cap.price}</p>
        <button id = "btn${cap.colour}" class = "prod-btn">Add to Cart</button>
    </div>`;
    productsContainer.append(eachProduct);


    let button = document.getElementById(`btn${cap.colour}`);
    button.addEventListener('click', () => {
        addingToShoppingCart(cap.colour);
    })
})


 const addingToShoppingCart = (colour) => {
    let cap = caps.find((cap) => cap.colour === colour);
    shoppingCart.push(cap);
}


cartIcon.addEventListener('click', () => {

    cartWindow.innerHTML = ""
    cartWindow.style.display = "flex";

    let cartHeader = document.createElement("div");
    cartHeader.className = 'cart-header';
    cartHeader.innerHTML = `
        <h4 class="header-title">Your shopping cart contains:</h4>
    `;
    cartWindow.append(cartHeader);

    let closeButton = document.createElement('button');
    closeButton.className = "close-btn";
    closeButton.innerText = "Close";
    
    closeButton.addEventListener('click', () => {
        cartWindow.style.display = "none";
    })

    cartHeader.append(closeButton);


shoppingCart.forEach((cap) =>{
    let cartMain = document.createElement("div");
    cartMain.className = "cart-main";
    cartMain.innerHTML = `
        <h3>${cap.name}</h3>
        <p>${cap.price}</p>
    `;
    cartWindow.append(cartMain);
})
const totalAmount = shoppingCart.reduce((acc, el) => acc + el.price, 0);

let totalToPay = document.createElement("div");
totalToPay.className = "cart-footer";
totalToPay.innerHTML = `<p>Total to pay: $${totalAmount}</p>` ;

let clearButton = document.createElement("button");
clearButton.innerText = "Clear Cart";
clearButton.className = "clear-btn";
clearButton.addEventListener('click', () => {
    shoppingCart.splice(0, shoppingCart.length);
})

totalToPay.append(clearButton);

cartWindow.append(totalToPay);

    
})



/*const deleteProduct = (colour) => {
    let product = caps.find((cap) => cap.colour === product);
    shoppingCart.splice(shoppingCart.indexOf(product), 1);
}*/






















/* //Botones

let containers = document.getElementById("container1");
let buyButton = document.createElement("button");
buyButton.className = "btn"
buyButton.innerText = "Buy";
containers.append(buyButton);
buyButton.addEventListener("click", () =>{
   shoppingCart.push(
    caps[0])
});

let container2 = document.getElementById("container2");
let buyingButton2 = document.createElement("button");
buyingButton2.className = "btn"
buyingButton2.innerText = "Buy";
container2.append(buyingButton2);
buyingButton2.addEventListener("click", () =>{
    shoppingCart.push(
     caps[1])
 });

let container3 = document.getElementById("container3");
let buyingButton3 = document.createElement("button");
buyingButton3.className = "btn"
buyingButton3.innerText = "Buy";
container3.append(buyingButton3);
buyingButton3.addEventListener("click", () =>{
    shoppingCart.push(
     caps[2])
 });

let container4 = document.getElementById("container4");
let buyingButton4 = document.createElement("button");
buyingButton4.className = "btn"
buyingButton4.innerText = "Buy";
container4.append(buyingButton4);
buyingButton4.addEventListener("click", () =>{
    shoppingCart.push(
     caps[3])
 });

let container5 = document.getElementById("container5");
let buyingButton5 = document.createElement("button");
buyingButton5.className = "btn"
buyingButton5.innerText = "Buy";
container5.append(buyingButton5);
buyingButton5.addEventListener("click", () =>{
    shoppingCart.push(
     caps[4])
 });

let container6 = document.getElementById("container6");
let buyingButton6 = document.createElement("button");
buyingButton6.className = "btn"
buyingButton6.innerText = "Buy";
container6.append(buyingButton6);
buyingButton6.addEventListener("click", () =>{
    shoppingCart.push(
     caps[5])
 });

let container7 = document.getElementById("container7");
let buyingButton7 = document.createElement("button");
buyingButton7.className = "btn"
buyingButton7.innerText = "Buy";
container7.append(buyingButton7);
buyingButton7.addEventListener("click", () =>{
    shoppingCart.push(
     caps[6])
 });

let container8 = document.getElementById("container8");
let buyingButton8 = document.createElement("button");
buyingButton8.className = "btn"
buyingButton8.innerText = "Buy";
container8.append(buyingButton8);
buyingButton8.addEventListener("click", () =>{
    shoppingCart.push(
     caps[7])
 });

let container9 = document.getElementById("container9");
let buyingButton9 = document.createElement("button");
buyingButton9.className = "btn"
buyingButton9.innerText = "Buy";
container9.append(buyingButton9);
buyingButton9.addEventListener("click", () =>{
    shoppingCart.push(
     caps[8])
 });


//Armando el carrito

const shoppingCartContainer = document.getElementById("shopping-cart-container");

let seeShoppingCart = document.getElementById("shopping-cart")
seeShoppingCart.addEventListener("click", () =>{
    const cartWindowHeader = document.createElement("div");
    cartWindowHeader.className = "cart-window"
    cartWindowHeader.innerHTML = ` 
    <h1 class = "cart-header-text">Your shopping cart contains:</h1>`;
    shoppingCartContainer.append(cartWindowHeader);
    
    let closeButton = document.createElement("p");
    closeButton.innerText = "x";
    closeButton.className = "header-button";

    cartWindowHeader.append(closeButton);

    shoppingCart.forEach((cap) =>{
        let cartMain = document.createElement("div");
        cartMain.className = "shopping-cart-main";
        cartMain.innerHTML = ` 
        <h6>${cap.price}</h6>
        <p>${cap.colour}</p> `     
    });

    shoppingCartContainer.append(cartMain);
//  })*/