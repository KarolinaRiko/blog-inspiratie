import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjHOQySf5ZiBmYar1R_uG9vkgt-DWKk3c",
  authDomain: "blog-inspiratie.firebaseapp.com",
  projectId: "blog-inspiratie",
  storageBucket: "blog-inspiratie.firebasestorage.app",
  messagingSenderId: "819633241510",
  appId: "1:819633241510:web:d828a1d6c815bb1c1ca367"
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
