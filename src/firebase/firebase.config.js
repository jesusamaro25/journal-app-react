import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtOsCy1BMMlJepsino-VLSZwAEDDxHhak",
    authDomain: "journal-react-db135.firebaseapp.com",
    projectId: "journal-react-db135",
    storageBucket: "journal-react-db135.appspot.com",
    messagingSenderId: "744371811996",
    appId: "1:744371811996:web:de7d2272aa563fd38b9f59"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthprovider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthprovider,
    firebase
}