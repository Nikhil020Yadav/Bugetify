// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDogasEMbt9lnIz1WHBvePqmKSrAMmGkYc",
  authDomain: "personal-finance-tracker-24426.firebaseapp.com",
  projectId: "personal-finance-tracker-24426",
  storageBucket: "personal-finance-tracker-24426.appspot.com",
  messagingSenderId: "720385362725",
  appId: "1:720385362725:web:e2567219097063d36c68cc",
  measurementId: "G-E0GXYSMQ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };