//Error handle
function getElement(inputId) {
    const getId = document.getElementById(inputId).value;
    if (getId == "") {
        return alert("please fill all input box");
    } else if (getId < 0) {
        return alert("please enter valid numbers");
    } else if (isNaN(getId)) {
        return alert("plese input only numbers");
    }
    return getId;
}


//Calculate Button
document.getElementById("calculate").addEventListener("click", function () {
    const userIncome = getElement("incomeTaka");
    //all spend sum
    const foodCost = getElement("expens-Food");
    const rentCost = getElement("expens-rent");
    const clothCost = getElement("expens-cloth");
    const totalSpend = document.getElementById("total-spend");
    const totalCost =
        parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    totalSpend.innerText = totalCost;
    // Balance add
    const oldBalance = document.getElementById("current-balance");
    const total = userIncome - totalCost;
    oldBalance.innerText = total;
});

//Saving Section
document.getElementById("save-btn").addEventListener("click", function () {
    const incomeInput = getElement("incomeTaka");
    const savingInput = getElement("savingTaka");
    const userSaving = (incomeInput * savingInput) / 100;
    const currentSaving = document.getElementById("current-saving");
    currentSaving.innerText = userSaving;
    const oldBalance = document.getElementById("current-balance").innerText;
    const newBalance = document.getElementById("remainig-balance");
    const updateBalance = oldBalance - userSaving;
    newBalance.innerText = updateBalance;
});