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
    localStorage.setItem("Shopping Cart", JSON.stringify(shoppingCart));
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

