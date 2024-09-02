document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const academy = document.getElementById('academy').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Aquí guardas los datos en una base de datos o local storage
    // Ejemplo con localStorage:
    const userData = { name, age, academy, address, phone };
    localStorage.setItem('user_' + phone, JSON.stringify(userData));

    // Añadir la fila a la tabla
    const table = document.getElementById('ratings-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = ''; // Condición
    newRow.insertCell(2).textContent = ''; // Técnica
    newRow.insertCell(3).textContent = ''; // Flexibilidad
    newRow.insertCell(4).textContent = ''; // Expresión Corporal
    newRow.insertCell(5).textContent = ''; // Flujo de Movimientos
    newRow.insertCell(6).textContent = ''; // Percepción Auditiva

    // Limpiar el formulario
    document.getElementById('registration-form').reset();
});
