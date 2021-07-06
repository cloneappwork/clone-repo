import firebase from "firebase";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFDPRs-DDniAwKvn6xglmfqYHdGHAOuas",
    authDomain: "reactinstaproject.firebaseapp.com",
    projectId: "reactinstaproject",
    storageBucket: "reactinstaproject.appspot.com",
    messagingSenderId: "711673643175",
    appId: "1:711673643175:web:ca55b0af494b5da98e5b82"
  };
  

  const firebaseApp =firebase.initializeApp(firebaseConfig);

//multiple features from firebase
  const db = firebaseApp.firestore();//database ..exporting and importing in any file
  const auth =firebase.auth();
  const storage =firebase.storage(); //for storing the images
  const provider = new firebase.auth.GoogleAuthProvider(); // for google sign-in


  export {db,auth,provider,storage};