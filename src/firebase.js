import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBmE-OVu_S2UDLgy2Adz7sRqTyxgOacy3c",
  authDomain: "blog-14f25.firebaseapp.com",
  projectId: "blog-14f25",
  storageBucket: "blog-14f25.appspot.com",
  messagingSenderId: "580783410451",
  appId: "1:580783410451:web:8de38e2b0ab21ab6fe9ee6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };