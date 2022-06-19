//variables
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");

const cardNum1 = document.querySelector(".cardNum1");
const cardNum2 = document.querySelector(".cardNum2");
const cardNum3 = document.querySelector(".cardNum3");
const cardNum4 = document.querySelector(".cardNum4");

const cardNumber1 = document.querySelector(".cardNumber1");
const cardNumber2 = document.querySelector(".cardNumber2");
const cardNumber3 = document.querySelector(".cardNumber3");
const cardNumber4 = document.querySelector(".cardNumber4");

const holderField = document.querySelector(".holderField");
const holderName = document.querySelector(".holderName");

const month = document.querySelector(".month");
const year = document.querySelector(".year");
const dateField = document.querySelector(".dateField");

const cvvNum = document.querySelector(".cvvNum");
const cvvCode = document.querySelector(".cvvCode");


// card move up and down
card.addEventListener("click",move);
btn.addEventListener("click",fieldCard)



//events to happen
function move(){
  card.classList.toggle("cardMove")
}

function fieldCard(){
  cardNum1.innerText = cardNumber1.value;
  cardNum2.innerText = cardNumber2.value;
  cardNum3.innerText = cardNumber3.value;
  cardNum4.innerText = cardNumber4.value;

  holderField.innerText = (holderName.value).toUpperCase();
  holderField.style.color = "#fff";

  if(month.value === "" || year.value === "")return;

  if (month.value <= 10){
    dateField.innerText = `0${month.value} / ${year.value}`;
    dateField.style.color = "#fff";
  }else{
    dateField.innerText = `${month.value} / ${year.value}`;
    dateField.style.color = "#fff";
  };

  cvvCode.innerText = cvvNum.value;

}