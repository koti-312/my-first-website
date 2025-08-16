// Alert on page load
window.onload = function () {
    alert("Welcome to the Skills Test!");
    updateStudentCount();
    loadStoredData();
};

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";

        // Save to localStorage
        localStorage.setItem("formData", JSON.stringify({ name, email, message }));
        loadStoredData();
    }
});

// Theme toggle
document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Student counter
function updateStudentCount() {
    let rows = document.querySelectorAll("#studentTable tbody tr").length;
    document.getElementById("studentCount").textContent = rows;
}

// Add student dynamically
document.getElementById("addStudentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("Name").value.trim();
    let age = document.getElementById("Age").value.trim();
    let skill = document.getElementById("Skill").value.trim();

    if (name && age && skill) {
        let table = document.querySelector("#studentTable tbody");
        let row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${age}</td><td>${skill}</td>`;
        table.appendChild(row);
        updateStudentCount();
        this.reset();
    }
});

function loadStoredData() {
    let data = localStorage.getItem("formData");
    if (data) {
        let parsed = JSON.parse(data);
        document.getElementById("storedOutput").innerHTML = `
            <p><strong>Name:</strong> ${parsed.name}</p>
            <p><strong>Email:</strong> ${parsed.email}</p>
            <p><strong>Message:</strong> ${parsed.message}</p>
        `;
    }
}


document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

