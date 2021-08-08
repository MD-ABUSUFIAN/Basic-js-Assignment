
// Assignment Task-01-seerToMon Convert 

 function seerToMon(seer) {
 const isMoon=seer/40;
 if (seer<=0) {
     return "invalid Number Plz input right Number"
 }
     return isMoon;
 }

const inputSeer=seerToMon(120);
console.log(inputSeer);

 

// Assignment Task-02-totalSales

function totalSales(shirtQuantity,pantQuantity,shoesQuantity) {
    if (shirtQuantity<0 || pantQuantity<0 || shoesQuantity<0) {
        return "Wrong Quantity Plz Enter Right Quantity"
    }
    let perShirtPrice=100*shirtQuantity;
    let perPantPrice=200*pantQuantity;
    let perShoesPrice=500*shoesQuantity;

    const total=perShirtPrice+perPantPrice+perShoesPrice;
    
    return total;
}
let shirtQuantity=1;
let pantQuantity=1;
let shoesQuantity=1;
const totalSold=totalSales(shirtQuantity,pantQuantity,shoesQuantity);
console.log(totalSold); 




// Assignment Task-03-deliveryCost

function deliveryCost(order) {

   const first100OrderCourierRate=100;
   const Second200OrderCourierRate=80;
   const thirdOrderCourierRate=50;

//    error controling part
    if (order<0) {
        return "invalid Order Plz select carefully Order"
    }
    //    first100OrderCourier Calculation
    else if (order<=100 ) {
 const first100Order=order*first100OrderCourierRate;
 return first100Order;  
    }
    //    Second 100 Order Courier Calculation
    else if(order<=200) {
 const first100OrderRate =100*first100OrderCourierRate;
 const restSecondOrder=order-100;
 const second100OrderRate= restSecondOrder*Second200OrderCourierRate;
 const totalSecondRate=second100OrderRate+first100OrderRate;
 return totalSecondRate;
  
    }

     //    Largest Order Courier Calculation
else{
    const first100OrderRate =100*first100OrderCourierRate;
    const second100OrderRate= 100*Second200OrderCourierRate;
    const restThirdOrder=order-200;
    const third100OrderRate= restThirdOrder*thirdOrderCourierRate;
    const totalThirdRate=first100OrderRate+second100OrderRate+third100OrderRate;
    return totalThirdRate;
}

}
const orderQuantity=deliveryCost(300);
console.log(orderQuantity);




// Assignment Task-04-perfectFriend

function perfectFriend(names) {

   for (const name of names) {

    if (name.length==5) {
        return name;
      }
   }
     
}

let friendsName=["Chamok","Mamun","Apurbo","itfa","Mirdul","Kawsar"];
const friendsList=perfectFriend(friendsName);
console.log(friendsList);