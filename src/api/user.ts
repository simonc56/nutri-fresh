import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { fakeMenu } from "src/fakeData/fakeMenu";
import { db } from "./firebase-config";

export const getUser = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }
};

export const createUser = (userId: string) => {
  const docRef = doc(db, "users", userId);
  const data = fakeMenu.LARGE;
  setDoc(docRef, data);
};
