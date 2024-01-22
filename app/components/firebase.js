import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import the Firestore function

const firebaseConfig = {
  apiKey: "AIzaSyDG7hcVGI8sNKW8lYrQvMGnI7WImz5gkPE",
  authDomain: "my-web3-2-ap.firebaseapp.com",
  projectId: "my-web3-2-ap",
  storageBucket: "my-web3-2-ap.appspot.com",
  messagingSenderId: "605552238402",
  appId: "1:605552238402:web:6e9db0271b64e5ec19f2db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
