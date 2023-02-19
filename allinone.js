const improvisedDatabase = "./productsavailable.json";
const caps = [];
let shoppingCart = JSON.parse(localStorage.getItem("Shopping Cart")) || [];

const productsContainer = document.getElementById("products-container");
const cartIcon = document.getElementById('shopping-cart');
const quantityVisualizer = document.getElementById('quantity-visualizer');

fetch(improvisedDatabase)
.then(Response => Response.json())
.then(productsdata => {
    console.log(caps);
    productsdata.forEach(cap => {
        caps.push(cap)
    });;

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

            Swal.fire({
                title: 'Are you sure you want to buy this product?',
                showDenyButton: true,
                confirmButtonText: 'Yes, I do',
                denyButtonText: `No, I'm not`,
                background:'beige',
              }).then((result) => {
                if (result.isConfirmed) {
                    addingToShoppingCart(cap.colour);
                    Toastify({
                        text: "You've just added a product!",
                        position: "right",
                        duration: 2500,
                        gravity: "top",
                        offset: {
                            y: "70",
                        },
                        style: {
                        background: "linear-gradient(to right, darkcyan, black)",
                        }
                    }).showToast();
                } else if (result.isDenied) {
                  Swal.fire('You did not added any product', '', 'info')
                }
              })
            
            
        })
    
    })
    
});


const addingToShoppingCart = (colour) => {
    const cap = caps.find((cap) => cap.colour === colour);
    const capInCart = shoppingCart.find((cap) => cap.colour === colour);
    
    capInCart ? capInCart.quantity++ : shoppingCart.push(cap);

    quantityCounter();

    keepStorage();
    /*updateShoppingCart();*/
    
}

const quantityCounter = () => {
    quantityVisualizer.style.display = "block";
    /* quantityVisualizer.innerText = shoppingCart.length; */
    let cartLength = shoppingCart.length;
    localStorage.setItem("Cart Length", JSON.stringify(cartLength));
    quantityVisualizer.innerText = JSON.parse(localStorage.getItem("Cart Length"));
}

quantityCounter();

const updateShoppingCart = () => {

    let cartContent = document.createElement('div');
    cartContent.innerHTML = "";

    
    shoppingCart.forEach((cap) =>{
        
        let eachCapInCart = document.createElement('div');
        eachCapInCart.className = "cart-items";
        eachCapInCart.innerHTML = `
            <h3>${cap.name}</h3> 
            <p>${cap.price}</p> 
            <button class="subtraction-sign">-</button>
            <p>Items: ${cap.quantity}</p>
            <button class="adition-sign">+</button> 
            <p>Total: ${cap.price * cap.quantity}</p>
        `;

        cartContent.appendChild(eachCapInCart);

        let subtractionSign = eachCapInCart.querySelector('.subtraction-sign')
        subtractionSign.addEventListener('click', () => {
            if (cap.quantity !== 1) {
                cap.quantity--
            }
            updateShoppingCart();
        })

        let aditionSign = eachCapInCart.querySelector('.adition-sign')
        aditionSign.addEventListener('click', () => {
            cap.quantity++
            updateShoppingCart();
        })
        

        let removeButton = document.createElement('button');
        removeButton.innerText = "Remove";
        removeButton.className = "remove-btn"
        cartContent.append(removeButton);

        removeButton.addEventListener('click', () => removeItem(cap.colour))
     
    })

    const totalAmount = shoppingCart.reduce((acc, el) => acc + el.price * el.quantity, 0);

        Swal.fire({
            position: 'center',
            titleText: 'Your shopping cart contains:',
            html: cartContent,
            footer: `Total to pay: ${totalAmount}`, 
            background: 'beige',
            width: '1000px',
              })

}

cartIcon.addEventListener('click', updateShoppingCart);

const removeItem = (colour) => {
    const product = caps.find((cap) => cap.colour === colour);
    shoppingCart.splice(shoppingCart.indexOf(product), 1)
    quantityCounter();
    keepStorage();
    updateShoppingCart();
}


const keepStorage = () => {
    localStorage.setItem('Shopping Cart',JSON.stringify(shoppingCart));
}


