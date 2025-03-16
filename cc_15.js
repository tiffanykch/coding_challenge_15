// TASK 1: CREATING THE BASE STRUCTURE

// Selecting dashboard container
const riskDashboard = document.getElementById("riskDashboard");

console.log("Risk Dashboard Loaded");

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
    <p>Risk Level <span><strong>${riskLevel}</strong></span></p>
    `;

    // TASK 3
    const resolveButton = document.createElement("button");
    resolveButton.classList.add("resolveButton");
    resolveButton.textContent = "Resolve";
    riskCard.appendChild(resolveButton);

    // Attaching event listener to resolve button
    resolveButton.addEventListener("click", function(event) {
        resolveTicket(riskCard);

        // TASK 6
        console.log('Ticket resolved!');
        event.stopPropagation();
    })

    // Append card to container
    riskDashboard.appendChild(riskCard);

    // TASK 4
    categorizeByLevel();
}

// Test Case - Task 1
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Create new risk card through form input
const riskForm = document.getElementById("riskSubmission")

riskForm.addEventListener("submit", function(event) {
    
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

// Test Case - Task 3
addRiskItem("Market Fluctuations", "High", "Finance");

// TASK 4: CATEGORIZE RISKS BY LEVEL
function categorizeByLevel() {
    Array.from(document.querySelectorAll(".risk-card")).forEach(card => {
        switch(card.dataset.level) {
            case "High":
                card.style.backgroundColor = "#f1948a";
                break;
            case "Medium":
                card.style.backgroundColor = "#f7dc6f";
                break;
            case "Low":
                card.style.backgroundColor = "#7dcea0";
                break;
        }; 
    });   
}

// Test Case - Task 4
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// TASK 5: IMPLEMENTING BULK UPDATES

// Create button to increase all risks at once
const increaseRiskButton = document.createElement("button");
increaseRiskButton.setAttribute("id", "increaseRiskButton");
increaseRiskButton.textContent = "Increase Risk Level";
riskDashboard.insertAdjacentElement("afterend", increaseRiskButton);

// Attach event listener to add functionality to button
increaseRiskButton.addEventListener("click", function(event) {    
    Array.from(document.querySelectorAll(".risk-card")).forEach(card => {
        
        // Increases risk levels
        if (card.dataset.level === "Medium") {
            card.dataset.level = "High";
        } else if (card.dataset.level === "Low") {
            card.dataset.level = "Medium"
        }

        // Update card text based on updated risk level
        let riskText = card.querySelector("span")
        
        if (riskText) {
            riskText.textContent = `${card.dataset.level}`;
            riskText.style.fontWeight = "bold";            
        }

        // Update card background based on updated risk level using function created in Task 4
        categorizeByLevel();

        // TASK 6
        console.log("Increased all risk levels!");
        event.stopPropagation();        
    });
});

// Test Case - Task 5
addRiskItem("Employee Retention", "Low", "HR");

// TASK 6: HANDLING EVENT PROPAGRATION
riskDashboard.addEventListener("click", function(event) {
    if (event.target.classList.contains("resolveButton")) {
        event.stopPropagation(); // Prevent event bubbling
    } else {
        console.log("Risk item clicked!");
    }
});