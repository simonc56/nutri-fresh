import { collection, doc, DocumentReference, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { MenuItem } from "src/fakeData/fakeMenu";
import { db } from "./firebase-config";

export let dbUserRef: DocumentReference;

export const dbUserExists = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.exists();
};

export const dbGetUserMenu = async () => {
  const menuCollection = collection(dbUserRef, "menu");
  const menuSnapshot = await getDocs(menuCollection);
  const menuData = menuSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: parseInt(doc.id) };
  });
  if (menuData) {
    return menuData as MenuItem[];
  } else {
    return null;
  }
};

export const dbAuthenticateUser = async (userId: string) => {
  dbUserRef = doc(db, "users", userId);
  const userSnapshot = await getDoc(dbUserRef);
  if (!userSnapshot.exists()) {
    setDoc(dbUserRef, { createdAt: new Date() });
    return true; // indicates that the user is new
  }
};
