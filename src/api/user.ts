import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { fakeMenu } from "src/fakeData/fakeMenu";
import { db } from "./firebase-config";

export const userExists = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.exists();
};

export const getUserData = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return docSnapshot.data();
  } else {
    return null;
  }
};

export const createUserWithDefaultMenu = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  if (!docSnapshot.exists()) {
    const data = { menu: fakeMenu.LARGE };
    setDoc(docRef, data);
  }
};
