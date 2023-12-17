
// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyADSWF2TrkXgJ6p7Fs-hYu8J_2rEFiSPqE",
    authDomain: "form-asian-trip.firebaseapp.com",
    projectId: "form-asian-trip",
    storageBucket: "form-asian-trip.appspot.com",
    messagingSenderId: "576990404878",
    appId: "1:576990404878:web:eaeee803f76226cdcd375f",
    measurementId: "G-BXEQ0BPB7Y"
};


// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para enviar datos a Firebase
// Función para enviar datos a Firebase
async function sendDataToFirebase(message, email) {
    try {
        const docRef = await db.collection("users").add({
            textarea: message,
            email: email
        });
        console.log("Document written with ID: ", docRef.id);

        // Limpiar el formulario
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Mostrar mensaje de éxito
        alert('Mensaje enviado. ¡Muchas Gracias por contactarnos!');
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


document.getElementById('contactForm').addEventListener('submit', async (evento) => {
    evento.preventDefault();

    // Validación y recopilación de datos aquí...

    let entryEmail = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');
    let entryMessage = document.getElementById('message');
    let errorMessage = document.getElementById('messageError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!emailPattern.test(entryEmail.value) || entryEmail.value.trim().length < 6) {
        errorEmail.textContent = 'Introduce un email válido con al menos 6 caracteres';
        errorEmail.classList.add('errorMessage');
        isValid = false;
    } else {
        errorEmail.textContent = '';
        errorEmail.classList.remove('errorMessage');
    }


    if (entryMessage.value.trim().length < 4) {
        errorMessage.textContent = 'Introduce un nombre con 4 o más caracteres';
        errorMessage.classList.add('errorMessage');
        isValid = false;
    } else {
        errorMessage.textContent = '';
        errorMessage.classList.remove('errorMessage');
    }



    if (isValid) {
        await sendDataToFirebase(entryMessage.value, entryEmail.value);
    }
});
