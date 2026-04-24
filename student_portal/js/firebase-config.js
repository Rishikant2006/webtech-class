import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCg3G0Rr8VHY3rfFc5mR8u3Rs6U3Fe5_hI",
  authDomain: "student-portal-7a5e8.firebaseapp.com",
  projectId: "student-portal-7a5e8",
  storageBucket: "student-portal-7a5e8.firebasestorage.app",
  messagingSenderId: "103141063397",
  appId: "1:103141063397:web:74cf78dbfbe6e9a8e3720c",
  measurementId: "G-KSF12QWJMR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
