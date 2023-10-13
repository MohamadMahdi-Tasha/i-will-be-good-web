// Codes By Mahdi Tasha
// Importing Part
import {FirebaseApp, initializeApp} from "firebase/app";
import {DatabaseReference, getDatabase, ref, Database} from "@firebase/database";

// Creating And Exporting useFirebase Hook As Default
export default function useFirebase(path:string):[FirebaseApp, Database, DatabaseReference] {
    // Config Of Firebase
    const firebaseConfig:Object = {
        apiKey: "AIzaSyAlrt1MqKBTjtK20q5mnscvYV8DlRlz4zU",
        authDomain: "i-will-be-good.firebaseapp.com",
        databaseURL: "https://i-will-be-good-default-rtdb.firebaseio.com",
        projectId: "i-will-be-good",
        storageBucket: "i-will-be-good.appspot.com",
        messagingSenderId: "940123404197",
        appId: "1:940123404197:web:8258b8e875e3871eb75a4c",
        measurementId: "G-LG8G9KMZ6G"
    };

    // Initialize Firebase
    const app:FirebaseApp = initializeApp(firebaseConfig);

    // Getting Database
    const database:Database = getDatabase();

    // Creating Reference Of App
    const reference:DatabaseReference = ref(database, path);

    // Returning App And Reference
    return [app, database, reference];
}