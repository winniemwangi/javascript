// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( ) 

class KioskCalc{
    constructor(fruit,quantity){
        this.fruit = fruit
        this.quantity = quantity
        this.fruitsPriceList = {"Orange":30,"Mango":20,"Avocado":50} 
        this.getTotalCost = function(){
            return `${quantity} ${fruit} for KES ${quantity*this.fruitsPriceList.Mango}`
        }
    }
}
var kioskCalc = new KioskCalc("Mango",2)
console.log(kioskCalc.getTotalCost())