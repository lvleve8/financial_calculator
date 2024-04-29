"use strict"
console.log
// Function to calculate the monthly payment
function calculateMortgage(principal, years, rate) {
    let monthlyRate = rate / 100 / 12;
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    return monthlyPayment;

}



// Function to get values from the form and calculate the payment
function getValues() {
    let principal = document.getElementById('principal').value;
    let years = document.getElementById('years').value;
    let rate = document.getElementById('interest').value;
    let monthlyPayment = calculateMortgage(principal, years, rate);
    document.getElementById('monthlyPayment').innerText = monthlyPayment.toFixed(2);
}
// Event listener for the calculate button
document.getElementById('calculate').addEventListener('click', function() {
    getValues();
});
// Event listener for the calculate button
document.getElementById('calculate').addEventListener('click', function() {
    getValues();
});