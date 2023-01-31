class Cap{
    constructor(colour, price){
        this.colour = colour;
        this.price = price;
    }
}

    let product1 = new Cap("green", 5200);
    let product2 = new Cap("red", 4800);
    let product3 = new Cap("black", 6100);
    let product4 = new Cap("white", 5900);
    let product5 = new Cap("blue", 5500);
    let product6 = new Cap("yellow", 5000);
    let product7 = new Cap("violet", 5700);
    let product8 = new Cap("grey", 6000);
    let product9 = new Cap("brown", 5400);

    const caps = [
        product1,product2,product3,product4,product5,product6,product7,product8,product9
    ];


    let shoppingCart = [];


/*const caps2 = [
    {colour: "green", price: 5200},
    {colour: "red", price: 4800},
    {colour: "black", price: 6100},
    {colour :"white", price: 5900},
    {colour: "blue", price: 5500},
    {colour: "yellow", price: 5000},
    {colour: "violet", price: 5700},
    {colour: "grey", price: 6000},
    {colour: "brown", price: 5400}
]*/


/*function showingList() {
    alert("Welcome to our cap store. Thanks for choosing us. These are the list of caps available at the moment");
    let gapsList = caps.map((Cap) => Cap.colour + " " + "$" + Cap.price);
    alert(gapsList.join(" - "));
}

showingList();


let chosenCap;

function selectProduct() {
    let chosenColour = prompt("Select the cap you want to buy by its colour (green, red, black, white, blue, yellow, violet, grey or brown)");
    chosenCap = caps.find((Cap) => Cap.colour == chosenColour)
    if (chosenColour == "green" ||
    chosenColour == "red" ||
    chosenColour == "black" ||
    chosenColour == "white" ||
    chosenColour == "blue" ||
    chosenColour == "yellow" ||
    chosenColour == "violet" ||
    chosenColour == "grey" ||
    chosenColour == "brown") {
        alert("You have chosen the " + chosenColour + " cap");
        return chosenCap;
    } else {
        alert("You have to enter a valid colour");
            return selectProduct()
    }

}

let chosenProduct = 
selectProduct();

    let userQuantity = Number(prompt("How many items of this product do you want to buy?"));

let chosenFees;

function userNumberOfFees() {
    let userFees = Number(prompt("Enter a number of fees that suits with your payment form (1, 3, 6 ,8, 12)"));
    if (!(userFees == 1 || userFees == 3 || userFees == 6 || userFees == 8 || userFees == 12)) {
        alert("You have to enter an appropiate number of fees");
        userNumberOfFees();
    }

    return userFees;
}

/*chosenFees = userNumberOfFees();

let oneFeeInterest = chosenCap.price;
let threeFeeInterest = chosenCap.price * 1.1;
let sixFeeInterest = chosenCap.price * 1.3;
let eightFeeInterest = chosenCap.price * 1.5;
let twelveFeeInterest = chosenCap.price * 1.8;
let totalPrice;

function calculateFees() {
    switch (chosenFees) {
        case 1:
            alert("The total amount to pay is $" + oneFeeInterest * userQuantity + " in 1 fee of $" + (oneFeeInterest * userQuantity) / chosenFees);
            totalPrice = (oneFeeInterest * userQuantity) / chosenFees;
            break;

        case 3:
            alert("The total amount to pay is $" + threeFeeInterest * userQuantity + " in 3 fees of $" + (threeFeeInterest * userQuantity) / chosenFees);
            totalPrice = (threeFeeInterest * userQuantity) / chosenFees;
            break;
    
        case 6:
            alert("The total amount to pay is $" + sixFeeInterest * userQuantity + " in 6 fees of $" + (sixFeeInterest * userQuantity) / chosenFees);
            totalPrice = (sixFeeInterest * userQuantity) / chosenFees
            break;

        case 8:
            alert("The total amount to pay is $" + eightFeeInterest * userQuantity + " in 8 fees of $" + (eightFeeInterest * userQuantity) / chosenFees);
            totalPrice = (eightFeeInterest * userQuantity) / chosenFees
            break;

        case 12:
            alert("The total amount to pay is $" + twelveFeeInterest * userQuantity + " in 12 fees of $" + (twelveFeeInterest * userQuantity) / chosenFees);
            totalPrice = (twelveFeeInterest * userQuantity) / chosenFees
            break;

        default:
            alert("You have not enter appropiate number of fees")
            return userNumberOfFees();
            break;
    }
    shoppingCart.push({chosenCap, userQuantity, totalPrice});
    console.log(shoppingCart);

}

/*calculateFees();



function continueBuying() {
    let userDecision = prompt("Do you wish to continue shopping? Please answer with 'yes' or 'no'")
    if (userDecision != "no") {
        showingList();
        selectProduct();
        userQuantity = Number(prompt("How many items of this product do you want to buy?"));
        userNumberOfFees();
        calculateFees();
        continueBuying();
    } else {
        alert("Thanks for buying at our store. Come back soon!");
    }   
}

/*continueBuying();*/