import { collection, addDoc } from "firebase/firestore"
import database from "./firebase-config.js"
import products from "../products.js"

const productsRef = collection(database, "productos");

const promises = products.map(product => addDoc(productsRef, product));
Promise.all(promises)
    .then(() => {
        console.log("done")
        process.exit(0);
    })