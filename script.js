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
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencias a la autenticación y la base de datos
const auth = firebase.auth();
const db = firebase.firestore();

// Manejar el registro de nuevos usuarios
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Usuario registrado
            const user = userCredential.user;
            alert("Usuario registrado exitosamente");
        })
        .catch(error => {
            alert(error.message);
        });
});

// Manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Usuario autenticado
            const user = userCredential.user;
            alert("Sesión iniciada");
            cargarDatosUsuario(user.uid);
        })
        .catch(error => {
            alert(error.message);
        });
});

// Cargar los datos del usuario autenticado
function cargarDatosUsuario(uid) {
    db.collection("usuarios").doc(uid).get().then(doc => {
        if (doc.exists) {
            const userData = doc.data();
            // Mostrar datos del usuario en la tabla
        } else {
            console.log("No se encontraron datos");
        }
    }).catch(error => {
        console.log("Error al obtener el documento:", error);
    });
}
auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
        const user = userCredential.user;
        // Guardar los datos del usuario en Firestore
        return db.collection("usuarios").doc(user.uid).set({
            nombre: nombre,
            edad: edad,
            academia: academia,
            direccion: direccion,
            telefono: telefono,
            rol: "usuario"  // Cambiar a "admin" si es necesario
        });
    })
    .then(() => {
        alert("Usuario registrado exitosamente");
    })
    .catch(error => {
        alert(error.message);
    });

