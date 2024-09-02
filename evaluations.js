// Verificar si ya existe algún dato en LocalStorage
const storedDancers = localStorage.getItem("dancers");

let dancers = storedDancers ? JSON.parse(storedDancers) : [
    {
        firstName: "María",
        lastName: "González",
        condition: 8,
        technique: 7,
        flexibility: 9,
        expression: 7,
        flow: 8,
        hearing: 7
    },
    {
        firstName: "Laura",
        lastName: "López",
        condition: 7,
        technique: 8,
        flexibility: 8,
        expression: 8,
        flow: 7,
        hearing: 8
    }
];

const isAdmin = prompt("¿Eres administrador? (sí/no)").toLowerCase() === "sí";

function loadTable() {
    const tableBody = document.querySelector("#evaluationTable tbody");
    tableBody.innerHTML = "";

    dancers.forEach((dancer, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${dancer.firstName}</td>
            <td>${dancer.lastName}</td>
            <td><input type="number" value="${dancer.condition}" ${isAdmin ? "" : "disabled"}></td>
            <td><input type="number" value="${dancer.technique}" ${isAdmin ? "" : "disabled"}></td>
            <td><input type="number" value="${dancer.flexibility}" ${isAdmin ? "" : "disabled"}></td>
            <td><input type="number" value="${dancer.expression}" ${isAdmin ? "" : "disabled"}></td>
            <td><input type="number" value="${dancer.flow}" ${isAdmin ? "" : "disabled"}></td>
            <td><input type="number" value="${dancer.hearing}" ${isAdmin ? "" : "disabled"}></td>
            <td>${isAdmin ? `<button onclick="saveEvaluation(${index})">Guardar</button>` : ""}</td>
        `;

        tableBody.appendChild(row);
    });
}

function saveEvaluation(index) {
    const row = document.querySelectorAll("#evaluationTable tbody tr")[index];
    dancers[index].condition = row.cells[2].querySelector("input").value;
    dancers[index].technique = row.cells[3].querySelector("input").value;
    dancers[index].flexibility = row.cells[4].querySelector("input").value;
    dancers[index].expression = row.cells[5].querySelector("input").value;
    dancers[index].flow = row.cells[6].querySelector("input").value;
    dancers[index].hearing = row.cells[7].querySelector("input").value;

    // Guardar en LocalStorage
    localStorage.setItem("dancers", JSON.stringify(dancers));

    alert("Evaluación guardada.");
    if (!isAdmin) {
    alert("No tienes permiso para acceder a esta página.");
    window.location.href = "index.html"; // Redirigir a la página de login
} else {
    loadTable();
}
