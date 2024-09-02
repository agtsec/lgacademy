// script.js
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the modal
var modal = document.getElementById("popup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user submits the registration form
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Generate the username
    var generatedUsername = firstName.charAt(0) + lastName;

    // Display the generated username in the popup
    document.getElementById("generatedUser").textContent = "Usuario generado: " + generatedUsername;
    modal.style.display = "block";

    // Reset form fields
    document.getElementById("registerForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple authentication check
    if (username === "lalogt" && password === "121316") {
        alert("Inicio de sesión exitoso como administrador.");
        // Aquí puedes redirigir al administrador a la página de evaluación
    } else {
        alert("Credenciales incorrectas.");
    }
});
