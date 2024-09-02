document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const academia = document.getElementById('academia').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    // Aquí podríamos guardar los datos en una base de datos o simplemente mostrarlos en la tabla

    const newRow = `
        <tr>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${academia}</td>
            <td>${direccion}</td>
            <td>${telefono}</td>
        </tr>
    `;

    document.querySelector('#tablaCalificaciones tbody').insertAdjacentHTML('beforeend', newRow);

    // Limpiar el formulario
    document.getElementById('registroForm').reset();
});

