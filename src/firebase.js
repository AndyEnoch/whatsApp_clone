import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyV2BU2O6727B0UkSpNlg2EY8oQ3XsKXI",
    authDomain: "whatsapp-clone-8c64f.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-8c64f.firebaseio.com",
    projectId: "whatsapp-clone-8c64f",
    storageBucket: "whatsapp-clone-8c64f.appspot.com",
    messagingSenderId: "395527513427",
    appId: "1:395527513427:web:416f085ce20ff1318aada6",
    measurementId: "G-51YRGRB7ZE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;