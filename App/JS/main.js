//variables
const card = document.querySelector(".card");
const button = document.querySelector("#button");

const cardNum1 = document.querySelector(".cardNumber1");
const cardNum2 = document.querySelector(".cardNumber2");
const cardNum3 = document.querySelector(".cardNumber3");
const cardNum4 = document.querySelector(".cardNumber4");
const cardNumber = document.querySelector(".cardNumber");


const holderNameField = document.querySelector(".holderNameField");
const cardHolder = document.querySelector(".cardHolder");

const month = document.querySelector(".month");
const year = document.querySelector(".year");
const dateExpireField = document.querySelector(".dateExpireField");


//card move up and down
card.addEventListener("click",cardMove);
function cardMove(){
  card.classList.toggle("cardChange");
}
//event that will happen when click on submit button

button.addEventListener("click",fielCard);

function fielCard(){
  let cardNums = `${cardNum1.value}  ${cardNum2.value}  ${cardNum3.value}  ${cardNum4.value}`;
  let cardHolderValue = cardHolder.value.toUpperCase()

  let date;
  if (month.value === "" || year.value === "")return;
  if ((month.value) < 10 ){
    date = `0${month.value} / ${year.value}`
  }else{
    date = `${month.value} / ${year.value}`
  }
 

 

  cardNumber.innerText = cardNums;
  holderNameField.innerText = cardHolderValue;
  dateExpireField.innerText = date;
}
