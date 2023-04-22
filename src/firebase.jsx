// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZCN24WmcSo9MN1F9Tt1yGl3E0i5Zi_D0",
  authDomain: "kicksnation-3275c.firebaseapp.com",
  projectId: "kicksnation-3275c",
  storageBucket: "kicksnation-3275c.appspot.com",
  messagingSenderId: "1012785604873",
  appId: "1:1012785604873:web:290d042735d4957effcbd8",
  measurementId: "G-6EJTVW4JZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app