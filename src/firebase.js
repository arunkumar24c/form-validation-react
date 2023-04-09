import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1GS7FekP0y6LdiVne83q0hdSo00w7H9I",
  authDomain: "form-ecaf0.firebaseapp.com",
  projectId: "form-ecaf0",
  storageBucket: "form-ecaf0.appspot.com",
  messagingSenderId: "61265398414",
  appId: "1:61265398414:web:d57cd96e42e4f36b4457df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
