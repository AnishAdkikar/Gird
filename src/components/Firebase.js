import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGINGSENDERID,
  APPID,
  MEASUREMENTID,
} from './credentials';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const logout = () => auth.signOut();

const db = getFirestore(app);

export const handle_login = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const { user } = userCredential;
    const usersCollection = collection(db, 'users');
    const userData = {
      firstName: user.displayName.split(' ')[0],
      lastName: user.displayName.split(' ')[1],
      email: user.email,
      cart: [],
      wishlist: [],
    };

    const userRef = doc(usersCollection, user.uid);
    await setDoc(userRef, userData);
    console.log('User data stored in Firestore.');
  } catch (error) {
    console.error('Authentication error:', error);
  }
};