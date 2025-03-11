// TASK 1: CREATING THE BASE STRUCTURE

// Selecting dashboard container
riskDashboard = document.getElementById("riskDashboard")

console.log("Risk Dashboard Loaded")

// TASK 2: ADDING RISK ITEMS DYNAMICALLY

function addRiskItem(riskName, riskLevel, department) {

    const riskCard = document.createElement("div");
    riskCard.classList.add("risk-card");
    riskCard.setAttribute("data-level", riskLevel);

    // Add card content
    riskCard.innerHTML = `
    <h3>${riskName}</h3>
    <h4>${department}</h4>
    <hr>
    <p><span>Risk Level <strong>${riskLevel}</strong></span></p>
    `;

    // TASK 3
    const resolveButton = document.createElement("button");
    resolveButton.setAttribute("id", "resolveButton")
    resolveButton.textContent = "Resolve"
    riskCard.appendChild(resolveButton)

    // Attaching event listener to resolve button
    resolveButton.addEventListener("click", function(event) {
        resolveTicket(riskCard);
    })

    // Append card to container
    riskDashboard.appendChild(riskCard);
}

// Test Case
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Create new risk card through form input
const riskForm = document.getElementById("riskSubmission")

riskForm.addEventListener("submit" || "enter", function(event) {
    
    // Prevent page reload
    event.preventDefault();

    let riskName = document.getElementById("riskName").value; 
    let riskLevel = document.getElementById("riskLevelSelector").value;
    let department = document.getElementById("department").value;

    addRiskItem(riskName, riskLevel, department);

    // Clear form fields after submitting
    riskForm.reset() 
});

// TASK 3: REMOVING RISK ITEMS
function resolveTicket(card) {
    riskDashboard.removeChild(card);
}
