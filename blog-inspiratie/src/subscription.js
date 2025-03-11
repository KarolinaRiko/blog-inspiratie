// Importăm Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configurare Firebase (înlocuiește cu datele tale)
const firebaseConfig = {
    apiKey: "AIzaSyDjHOQySf5ZiBmYar1R_uG9vkgt-DWKk3c",
    authDomain: "blog-inspiratie.firebaseapp.com",
    projectId: "blog-inspiratie",
    storageBucket: "blog-inspiratie.firebasestorage.app",
    messagingSenderId: "819633241510",
    appId: "1:819633241510:web:d828a1d6c815bb1c1ca367",
}

// Inițializare Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Selectăm formularul
const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");

// Salvăm email-ul în Firestore
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (email) {
    try {
      await addDoc(collection(db, "subscribers"), { email });
      alert("Te-ai abonat cu succes!");
      emailInput.value = "";
    } catch (error) {
      console.error("Eroare la abonare: ", error);
    }
  } else {
    alert("Te rog introdu un email valid.");
  }
});
