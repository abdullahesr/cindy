import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfigEnv } from "../firebase-env";

const app = initializeApp(firebaseConfigEnv);
export const db = getFirestore(app);
export const auth = getAuth(app);
