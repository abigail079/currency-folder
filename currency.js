var amount = document.getElementById("amount");
var convertBtn = document.getElementById("convertBtn");
var result = document.getElementById("result");
var rate = 1300;

function convertMoney(){
    alert("Converting Dollars to Naira!");
var dollar = Number(amount.value);

if (amount.value ==="" || dollar <=0){
    result.textContent = "Enter a valid amount!";
}else {
    var naira = dollar * rate;
    result.textContent = "N" + naira;
}
}
convertBtn.addEventListener("click", convertMoney);


