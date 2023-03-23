import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCo63hDXAKGAaRQ1h_0pn8gywy38Y0rfds",
  authDomain: "remi-test-eade4.firebaseapp.com",
  databaseURL:
    "https://remi-test-eade4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "remi-test-eade4",
  storageBucket: "remi-test-eade4.appspot.com",
  messagingSenderId: "460948838787",
  appId: "1:460948838787:web:13e278546243d2cb897eb6",
  measurementId: "G-GX3G43Y2Y5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
export const db = getFirestore(app);
