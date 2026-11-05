// var amount = document.getElementById("amount");
// var convertBtn = document.getElementById("convertBtn");
// var result = document.getElementById("result");
// var rate = 1300;

// function convertMoney(){
//     alert("Converting Dollars to Naira!");
// var dollar = Number(amount.value);

// if (amount.value ==="" || dollar <=0){
//     result.textContent = "Enter a valid amount!";
// }else {
//     var naira = dollar * rate;
//     result.textContent = "N" + naira;
// }
// }
// convertBtn.addEventListener("click", convertMoney);


// HOF 

// let myNumbers = [20,4,1,90,66,2]
// //  let ascendNum = myNumbers.toSorted((x,y)=>x-y);
// // console.log(ascendNum)
// // let reverse = myNumbers.toReversed()
// // myNumbers.reverse()
// //  console.log(myNumbers)
// //  console.log(ascendNum)
// let correctScore = myNumbers.with(3,419)
// console.log(correctScore)

window.onload = ()=>{
    let canvas = document.getElementById("board")
    let canvaType = canvas.getContext("2d")
    canvaType.beginPath();
    canvaType.rect(8,4,80,40)
    canvaType.fillStyle = "red"
    canvaType.fill()
    canvaType.moveTo(10,4)
    canvaType.lineT
    o(100,40)
    canvaType.lineWidth = 10
    canvaType.strokeStyle = "blue"
    canvaType.stroke()
}
