import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjHOQySf5ZiBmYar1R_uG9vkgt-DWKk3c",
  authDomain: "blog-inspiratie.firebaseapp.com",
  projectId: "blog-inspiratie",
  storageBucket: "blog-inspiratie.firebasestorage.app",
  messagingSenderId: "819633241510",
  appId: "1:819633241510:web:d828a1d6c815bb1c1ca367",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const registerUser = async (email, password, firstName, lastName) => {

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

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

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};

export { auth, db, registerUser, login, logout };
