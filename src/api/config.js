import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD5OMPMVO3HQrRDUnQCzzo5FJxb2ZCPHOU",
  authDomain: "new-max-ddc8a.firebaseapp.com",
  projectId: "new-max-ddc8a",
  storageBucket: "new-max-ddc8a.appspot.com",
  messagingSenderId: "695704020420",
  appId: "1:695704020420:web:1554d57f69ea39581e7091"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);