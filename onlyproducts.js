const improvisedDatabase = "./productsavailable.json";
const caps = [];

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
        })
    
    })
    
});

let shoppingCart = JSON.parse(localStorage.getItem("Shopping Cart")) || [];

const addingToShoppingCart = (colour) => {
    const cap = caps.find((cap) => cap.colour === colour);
    const capInCart = shoppingCart.find((cap) => cap.colour === colour);
    /* if (capInCart) {
        capInCart.quantity++;
    } else {
        shoppingCart.push(cap); 
    } */
    
    capInCart ? capInCart.quantity++ : shoppingCart.push(cap);

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

    let cartContent = document.createElement('div');
    cartContent.innerHTML = "";

    
    shoppingCart.forEach((cap) =>{
        
        let eachCapInCart = document.createElement('div');
        eachCapInCart.className = "cart-items";
        eachCapInCart.innerHTML = `
            <h3>${cap.name}</h3> 
            <p>${cap.price}</p> 
            <p>Items: ${cap.quantity}</p> 
            <p>Total: ${cap.price * cap.quantity}</p>
        `;

        cartContent.appendChild(eachCapInCart);

        let removeButton = document.createElement('button');
        removeButton.innerText = "Remove";
        removeButton.className = "remove-btn"
        cartContent.append(removeButton);

        removeButton.addEventListener('click', () => removeItem(cap.colour));
        /* removeButton.addEventListener('click',removeItem); */
     
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
    shoppingCart.splice(shoppingCart.indexOf(product, 1))
    updateShoppingCart();
}

/* const keepStorage = () => {
    localStorage.setItem('Shopping Cart',JSON.stringify(shoppingCart));
} */


/* class Cap{
    constructor(name, colour, price, quantity){
        this.name = name;
        this.colour = colour;
        this.price = price;
        this.quantity = quantity;
    }
}

    let greenCap = new Cap('Green Cap', "green", 5200, 1);
    let redCap = new Cap('Red Cap', "red", 4800, 1);
    let blackCap = new Cap('Black Cap', "black", 6100, 1);
    let whiteCap = new Cap('White Cap', "white", 5900, 1);
    let blueCap = new Cap('Blue Cap', "blue", 5500, 1);
    let yellowCap = new Cap('Yellow Cap', "yellow", 5000, 1);
    let violetCap = new Cap('Violet Cap', "violet", 5700, 1);
    let greyCap = new Cap('Grey Cap', "grey", 6000, 1);
    let brownCap = new Cap('Brown Cap' ,"brown", 5400, 1);

    const capss = [
        greenCap, redCap, blackCap, whiteCap, blueCap, yellowCap, violetCap, greyCap, brownCap
    ]; */


   
