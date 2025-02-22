import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjHOQySf5ZiBmYar1R_uG9vkgt-DWKk3c",
  authDomain: "blog-inspiratie.firebaseapp.com",
  projectId: "blog-inspiratie",
  storageBucket: "blog-inspiratie.firebasestorage.app",
  messagingSenderId: "819633241510",
  appId: "1:819633241510:web:d828a1d6c815bb1c1ca367",
};

// Inițializăm aplicația Firebase
const app = initializeApp(firebaseConfig);

// Creăm instanța de autentificare și Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Funcția de înregistrare
const registerUser = async (email, password, firstName, lastName) => {
  try {
    // Creează utilizatorul în Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Adaugă numele și prenumele în Firestore
    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      email: user.email,
      createdAt: new Date(),
    });
    console.log("User registered and added to Firestore successfully!");
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
};

// Funcția de login
const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Funcția de logout
const logout = () => {
  return signOut(auth);
};

// Exportăm auth, registerUser, login și logout
export { auth, db, registerUser, login, logout };
