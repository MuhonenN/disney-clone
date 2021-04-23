import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC95SqOtFdlB87c-a3GRWJa2gCCdtHP4U8",
    authDomain: "disney-clone-c7ef9.firebaseapp.com",
    projectId: "disney-clone-c7ef9",
    storageBucket: "disney-clone-c7ef9.appspot.com",
    messagingSenderId: "419567038534",
    appId: "1:419567038534:web:a686fa123940822a6e5a47"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db