import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDEUY06l_m7yFen0Sei4G3qhd7SjXcB-nE",
    authDomain: "crowndb-28bb5.firebaseapp.com",
    databaseURL: "https://crowndb-28bb5.firebaseio.com",
    projectId: "crowndb-28bb5",
    storageBucket: "crowndb-28bb5.appspot.com",
    messagingSenderId: "686597693982",
    appId: "1:686597693982:web:37d6dca1b2e00b228a440f",
    measurementId: "G-S557P6R4JC"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    
    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating error', err.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase