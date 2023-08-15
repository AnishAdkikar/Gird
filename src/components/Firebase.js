import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID } from './credentials';
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
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const logout = () => auth.signOut()
