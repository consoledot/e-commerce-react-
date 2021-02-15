import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyDPskkYuqMuost0MPnr3UeifGmzuXCV2uw",
    authDomain: "crwn-db-18e72.firebaseapp.com",
    projectId: "crwn-db-18e72",
    storageBucket: "crwn-db-18e72.appspot.com",
    messagingSenderId: "562456685826",
    appId: "1:562456685826:web:d3e09c2db5083f36cda61b",
    measurementId: "G-8HGDRR7DXF"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshop = await userRef.get()
 if(!snapshop.exit){
   const {displayName, email} = userAuth
   const createdAt = new Date()
   try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
   } catch (error) {
     console.log('error creating user', error.message)
   }
 }
 return userRef
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase