var tvAmount = 0;
var chairAmount = 0;
var sofaAmount = 0;
var bedAmount = 0;
var refrigeratorAmount = 0;

function tvItem() {
    var tvElement = document.getElementById("itemof-tv").value;
    var totalAmountofTv = document.getElementById("tv-product-amount")
    totalAmountofTv.innerHTML = tvElement * 1000
    tvAmount = parseInt(totalAmountofTv.innerHTML)
    console.log(tvAmount);
    totalAmountFunc()
}

function chairItem() {
    var chairElement = document.getElementById("itemof-chair").value;
    var totalAmountofChair = document.getElementById("chair-product-amount")
    totalAmountofChair.innerHTML = chairElement * 300
    chairAmount = parseInt(totalAmountofChair.innerHTML)
    console.log(chairAmount);
    totalAmountFunc()
}

function sofaItem() {
    var sofaElement = document.getElementById("itemof-sofa").value;
    var totalAmountofSofa = document.getElementById("sofa-product-amount")
    totalAmountofSofa.innerHTML = sofaElement * 2000
    sofaAmount = parseInt(totalAmountofSofa.innerHTML)
    console.log(sofaAmount);
    totalAmountFunc()
}

function bedItem() {
    var bedElement = document.getElementById("itemof-bed").value;
    var totalAmountofBed = document.getElementById("bed-product-amount")
    totalAmountofBed.innerHTML = bedElement * 10000
    bedAmount = parseInt(totalAmountofBed.innerHTML)
    console.log(bedAmount);
    totalAmountFunc()
}

function refrigeratorItem() {
    var refrigeratorElement = document.getElementById("itemof-refrigerator").value;
    var totalAmountofRefrigerator = document.getElementById("refrigerator-product-amount")
    totalAmountofRefrigerator.innerHTML = refrigeratorElement * 15000
    refrigeratorAmount = parseInt(totalAmountofRefrigerator.innerHTML)
    console.log(refrigeratorAmount);
    totalAmountFunc()
}

function totalAmountFunc(){ 

var totalProductElement = document.getElementById("total-product-amount")
totalProductElement.innerHTML = tvAmount+ chairAmount + sofaAmount+bedAmount+refrigeratorAmount
var totalAmount =parseInt (totalProductElement.innerHTML )
console.log(totalAmount)

var taxElement = document.getElementById("tax-amount")
 taxElement.innerHTML = 0.18 * totalAmount
var taxAdded = parseInt (taxElement.innerHTML)

var grandTotalamount =document.getElementById("grand-total");
grandTotalamount.innerHTML =totalAmount+ taxAdded
var grandTotal = parseInt(grandTotalamount.innerHTML)
}


