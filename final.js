const productsContainer = document.getElementById("products-container");
const cartIcon = document.getElementById('shopping-cart');
const cartWindow = document.getElementById('cartview');
const quantityVisualizer = document.getElementById('quantity-visualizer');

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
        Toastify({
            text: "You've just added a product!",
            position: "right",
            duration: 3000,
            gravity: "top",
            offset: {
                y: "70",
            },
            style: {
            background: "linear-gradient(to right, darkcyan, black)",
            }
        }).showToast();
    })

})


 const addingToShoppingCart = (colour) => {
    const cap = caps.find((cap) => cap.colour === colour);
    const capInCart = shoppingCart.find((cap) => cap.colour === colour);
    if (capInCart) {
        capInCart.quantity++;
    } else {
        shoppingCart.push(cap); 
    }
    /* capInCart ? capInCart.quantity++ : shoppingCart.push(cap); */

    /*updateShoppingCart();*/
    /* keepStorage(); */
}

const quantityCounter = () => {
    quantityVisualizer.style.display = "block";
    let cartLength = shoppingCart.length;
    /* localStorage.setItem("Cart Length", JSON.stringify(cartLength)); */
    quantityVisualizer.innerText = JSON.parse(localStorage.getItem(cartLength));
}

quantityCounter();

const updateShoppingCart = () => {

    cartWindow.innerHTML = "";
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
        
        
        
        /* let cartMain = document.createElement("div");
        cartMain.className = "cart-main";
        cartMain.innerHTML = `
            <h3>${cap.name}</h3>
            <p>${cap.price}</p>
            <p>Items: ${cap.quantity}</p>
            <p>Total: ${cap.price * cap.quantity}</p>
        `;
        cartWindow.append(cartMain);

        let removebutton = document.createElement("button");
        removebutton.className = "remove-btn";
        removebutton.innerText = "Remove";
        cartMain.append(removebutton);

        removebutton.addEventListener("click", removeItem); */

        Swal.fire({
            position: 'center',
            titleText: 'Your shopping cart contains:',
            text:` 
            ${cap.name}
            Price: ${cap.price}
            Items: ${cap.quantity}
            Total: ${cap.price * cap.quantity}
                `,
            /* footer: `Amount to pay: ${totalAmount}` */
              })


    })

    const totalAmount = shoppingCart.reduce((acc, el) => acc + el.price * el.quantity, 0);

    let totalToPay = document.createElement("div");
    totalToPay.className = "cart-footer";
    totalToPay.innerHTML = `<p>Total to pay: $${totalAmount}</p>` ;

    let clearButton = document.createElement("button");
    clearButton.innerText = "Clear Cart";
    clearButton.className = "clear-btn";
    clearButton.addEventListener('click', () => {
        shoppingCart.splice(0, shoppingCart.length);
        updateShoppingCart();
    })

totalToPay.append(clearButton);

cartWindow.append(totalToPay);

}

cartIcon.addEventListener('click', updateShoppingCart);



const removeItem = (colour) => {
    const product = caps.find((cap) => cap.colour === colour);
    shoppingCart.splice(shoppingCart.indexOf(product), 1);
    updateShoppingCart();
}

/* const keepStorage = () => {
    localStorage.setItem('Shopping Cart',JSON.stringify(shoppingCart));
} */

