import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyALboCEFTbnjdVAHGadw3UXCYNSLmRV6Ug",
    authDomain: "my-uber-react.firebaseapp.com",
    projectId: "my-uber-react",
    storageBucket: "my-uber-react.appspot.com",
    messagingSenderId: "720908110377",
    appId: "1:720908110377:web:071e406534b83a0dfd6a38"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export { app, db }