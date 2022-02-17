let razerKrakenOne = document.getElementById("razerkraken1");
let incressBtnOne = document.getElementById("incressbtn1");
let decressBtnOne = document.getElementById("decressbtn1");
let razerKrakenTwo = document.getElementById("razerkraken2");
let incressBtnTwo = document.getElementById("incressbtn2");
let decressBtnTwo = document.getElementById("decressbtn2");
let incressBtnThree = document.getElementById("incressbtn3");
let decressBtnThree = document.getElementById("decressbtn3");
let subTotal  = document.getElementById("subtotal");
let tax  = document.getElementById("tax");
let allTotal  = document.getElementById("total");


// let i = 0;
// incressBtn.addEventListener("click", function(){
//     i++;
//     document.getElementById("razerkraken").value = i;

// })

// incressBtnOne.addEventListener("click", () => {
    
//     let firstTicketCount = parseInt(razerKrakenOne.value);
//     firstTicketCount += 1;
//     razerKrakenOne.value = firstTicketCount;
//     totalValue()
// })

// decressBtnOne.addEventListener("click", () => {
    
//     let firstTicketCount = parseInt(razerKrakenOne.value);
//     if(firstTicketCount > 0){
//     firstTicketCount -= 1;
//     razerKrakenOne.value = firstTicketCount;
//     }
//     totalValue()
// })



// incressBtnTwo.addEventListener("click", () => {
//     let firstTicketCount = parseInt(razerKrakenTwo.value);
//     firstTicketCount +=1;
//     razerKrakenTwo.value = firstTicketCount;
//     totalValue()
// })


// decressBtnTwo.addEventListener("click", () => {
//     let firstTicketCount = parseInt(razerKrakenTwo.value);
//     if(firstTicketCount > 0){
//         firstTicketCount -= 1;
//         razerKrakenTwo.value = firstTicketCount;
//     }
//     totalValue()
// })

incressBtnOne.addEventListener("click", () => {
    TotalChackoutCount(razerKrakenOne, true)
})
decressBtnOne.addEventListener("click", () => {
    TotalChackoutCount(razerKrakenOne, false)
})
incressBtnTwo.addEventListener("click", () => {
    TotalChackoutCount(razerKrakenTwo, true)
})
decressBtnTwo.addEventListener("click", () => {
    TotalChackoutCount(razerKrakenTwo, false)
})
incressBtnThree.addEventListener("click", () => {
    TotalChackoutCount(targeal, true)
})
decressBtnThree.addEventListener("click", () => {
    TotalChackoutCount(targeal, false)
})

function TotalChackoutCount(chackoutclass, isIncrease){
    let totalCount = parseInt(chackoutclass.value)
    if(isIncrease == true){
        totalCount += 1;
        chackoutclass.value = totalCount;
    }else if (isIncrease == false && totalCount > 0){
        totalCount -= 1;
        chackoutclass.value = totalCount;
    }
    totalValue()
}





function totalValue(){
    let ticketCountFirst = razerKrakenOne.value;
    let ticketCountSecound = razerKrakenTwo.value;
    let tciketCountThird = targeal.value;

// subtotal
let subtotalCount = (259 * ticketCountFirst + 85 * ticketCountSecound + 159 * tciketCountThird);
subTotal.textContent = "$" + subtotalCount;
// tax
let taxCount = (subtotalCount * 15) / 100;
taxCount.toFixed(2);
tax.textContent = "$" + taxCount;


//Grand total
let grandTotal = subtotalCount + taxCount;
allTotal.innerHTML = "$" + grandTotal;

}

// function ticketBookCount(ticketClass, isIncrease){
//     let ticketCount = parseInt(ticketClass.value);
//     if(isIncrease === true){
//         ticketCount += 1;
//        ticketClass.value = ticketCount
//     }
// }

document.getElementById("submit").addEventListener("click", () => {
    document.querySelector(".cart").style.display = "none";
    document.querySelector(".message").style.display = "block";
    console.log("hello I am here");

})

