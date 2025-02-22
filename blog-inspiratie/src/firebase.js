import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Configurația Firebase (folosește valorile tale)
const firebaseConfig = {
  apiKey: "AIzaSyDjHOQySf5ZiBmYar1R_uG9vkgt-DWKk3c",
  authDomain: "blog-inspiratie.firebaseapp.com",
  projectId: "blog-inspiratie",
  storageBucket: "blog-inspiratie.firebasestorage.app",
  messagingSenderId: "819633241510",
  appId: "1:819633241510:web:d828a1d6c815bb1c1ca367",
  measurementId: "G-G3YPEE3FZ0"
};


// Verifică dacă aplicația Firebase este deja inițializată
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // folosește prima aplicație dacă există deja
}

// Obține instanța de autentificare
const auth = getAuth(app);

const db = getFirestore(app);

// Exportă instanțele pentru utilizare în alte fișiere
export { auth, db };
