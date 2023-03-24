import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "remi-test-eade4.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DB_URL,
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
