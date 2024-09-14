// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4S1P1kRygFBaMHyc5pTnrOS7VqanShKs",
  authDomain: "book-inventory-24341.firebaseapp.com",
  projectId: "book-inventory-24341",
  storageBucket: "book-inventory-24341.appspot.com",
  messagingSenderId: "1010728731528",
  appId: "1:1010728731528:web:28a040628f671b50bef03d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;