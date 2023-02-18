const fakeDatabase = "./products.json";

fetch(fakeDatabase)
.then(Response => Response.json())
.then(productsdata => {
    console.log(productsdata);
})


const caps = [productsdata];

class Cap{
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

  /*   const caps = [
        greenCap, redCap, blackCap, whiteCap, blueCap, yellowCap, violetCap, greyCap, brownCap
    ]; */


    let shoppingCart = JSON.parse(localStorage.getItem("Shopping Cart")) || [];
