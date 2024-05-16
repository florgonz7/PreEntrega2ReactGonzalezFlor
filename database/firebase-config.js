import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKpBtvmefCUbMJX-FNvRtl0mbw9dkVyGw",
    authDomain: "markeyday-d1056.firebaseapp.com",
    projectId: "markeyday-d1056",
    storageBucket: "markeyday-d1056.appspot.com",
    messagingSenderId: "994964723258",
    appId: "1:994964723258:web:4ca5a09887a36756bdc703",
    measurementId: "G-XY84EKDKG4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

