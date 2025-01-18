//Prüfen und benötigte Variablen ziehen 
const balance = document.getElementById("balance");
const einnahmen = document.getElementById("EinnahmenValue");
const ausgaben = document.getElementById("ausgabenValue");
const transactionList = document.getElementById("transactionList");

//Buttons
const depositButton = document.getElementById("depositButton");
const withdrawButton = document.getElementById("withdrawButton");

//Even-listener

depositButton.addEventListener("click", function(){
    const amount = prompt("Welchen Betrag (in EUR) möchten sie einzahlen?", "0");
    updateUI(amount,true);
})


withdrawButton.addEventListener("click", function(){
    const amount = prompt("Welchen Betrag möchten sie auszahlen?","0");
    updateUI(amount, false);
});

//FUNKTIONEN:
// Update-UI
function updateUI(amount, isDeposit){
    const convertedAmount = Number(amount);
    updateBalance(convertedAmount, isDeposit);
    updateSums(convertedAmount, isDeposit);
    updateTransaction(convertedAmount, isDeposit);

}

//Kontostand - Update
function updateBalance (amount, isDeposit){
    const currentBalance = Number(balance.textContent);
    const newBalance = isDeposit
    ? currentBalance + amount
    : currentBalance - amount;
    balance.textContent = newBalance;
}

//Update Einnahmen
function updateEinnahmen(amount){
    const currentEinkommen = Number(einnahmen.textContent)
    const newEinkommen = currentEinkommen + amount;
    einnahmen.textContent = newEinkommen;
}

//update-Ausgaben
function updateAusgaben(amount){
    const currentAusgabe = Number(ausgaben.textContent)
    const newAusgaben = currentAusgabe + amount;
    ausgaben.textContent = newAusgaben;
}

// Update - Summen (Einnahmen/Summen)
function updateSums(amount, isDeposit){
    if (isDeposit) {
        updateEinnahmen(amount);
    }
    else{
        updateAusgaben(amount);
    }
}

//Update Buchungliste

function updateTransaction (amount, isDeposit) {
    const transactioElement = document.createElement("div");
    transactioElement.classList.add("transaction");

    const columnTyp = document.createElement("div");
    columnTyp.classList.add("column");

    const typeElement = document.createElement("span");
    typeElement.classList.add("type");
    typeElement.textContent = isDeposit ? "Einzahlung" : "Auszahlung";

    const columnAmount = document.createElement("div");
    columnAmount.classList.add("column");

    const amountElement = document.createElement("span");
    amountElement.classList.add("amount");  // Korrigierter Code
    amountElement.textContent = amount;

    columnTyp.appendChild(typeElement);
    columnAmount.appendChild(amountElement);  // Korrigierter Code
    transactioElement.append(columnTyp, columnAmount);  // Korrigierter Code
    transactionList.prepend(transactioElement);
}



