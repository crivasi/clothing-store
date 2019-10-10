import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXpj0ogO_d8iMFFPfmXIPOzTfCs-NeUdE",
  authDomain: "clothing-store-db-92aa8.firebaseapp.com",
  databaseURL: "https://clothing-store-db-92aa8.firebaseio.com",
  projectId: "clothing-store-db-92aa8",
  storageBucket: "",
  messagingSenderId: "796641148461",
  appId: "1:796641148461:web:403111969a36d096b642a4",
  measurementId: "G-LPCEDN05KQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("There was an error creating");
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//es necesario tener habilitado en el firebase, el acceso por google

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
