// let welcomeMessage = `hello friends`;
// console.log('hello friends');
// console.log(welcomeMessage);
// jeansPrice = 2799.00;
// bagprice = 7890.95;
// bagValue = jeansPrice + bagprice;
// let bagsummery = `your final myntra bag amount is Rs. ${Math.round(bagValue)}`;
// console.log(bagsummery)

let cartQuantity = 0;
document.querySelector('#cart-Summery').innerText = `Your Bag has ${cartQuantity} itemes`;
 
function AddTo(){
  cartQuantity++;
  document.querySelector('#cart-Summery').innerText = `Your Bag has ${cartQuantity} itemes`;

}

function MoveTo(){
  if(cartQuantity>0){
    cartQuantity--;
  }else{
    alert('Your Bag is Empty')
  }
  
  document.querySelector('#cart-Summery').innerText = `Your Bag has ${cartQuantity} itemes`;
}

function Sale(){
  cartQuantity += 2;
  document.querySelector('#cart-Summery').innerText = `Your Bag has ${cartQuantity} itemes`;
}