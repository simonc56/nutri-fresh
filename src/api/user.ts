import { collection, doc, DocumentReference, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { MenuItem } from "src/startData/startMenu";
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
    const sortedMenu = menuData.sort((a, b) => a.id - b.id);
    return sortedMenu as MenuItem[];
  } else {
    return null;
  }
};

/**
 * Check if the user exists in the database, if not, create it.
 * Also sets the current user for other db requests, so must be called first.
 * @param {string} userId
 * @returns {boolean} true if the user is new
 */
export const dbAuthenticateUser = async (userId: string): Promise<boolean> => {
  let isNewUser = false;
  try {
    dbUserRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(dbUserRef);
    if (!userSnapshot.exists()) {
      setDoc(dbUserRef, { createdAt: new Date() });
      isNewUser = true;
    }
  } catch {
    throw new Error("Connexion impossible à la base de données, vérifier la connexion");
  }
  return isNewUser;
};
