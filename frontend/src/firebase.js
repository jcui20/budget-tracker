// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlJu4bGemT4dDV513ZS0oH4wMl6LrUwkA",
  authDomain: "budget-tracker-f7ad5.firebaseapp.com",
  projectId: "budget-tracker-f7ad5",
  storageBucket: "budget-tracker-f7ad5.firebasestorage.app",
  messagingSenderId: "218824596133",
  appId: "1:218824596133:web:390d433668a38e828c8b4c",
  measurementId: "G-14TN3GC0BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { app, analytics, db }