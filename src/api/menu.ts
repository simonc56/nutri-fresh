import { collection, deleteDoc, doc, setDoc, updateDoc, writeBatch } from "firebase/firestore/lite";
import { MenuItem } from "src/fakeData/fakeMenu";
import { db } from "./firebase-config";
import { dbUserRef } from "./user";

export const dbUpdateFullMenu = async (menu: MenuItem[]) => {
  const batch = writeBatch(db);
  const menuCollection = collection(dbUserRef, "menu");
  menu.forEach((item) => {
    const menuItemRef = doc(menuCollection, item.id.toString());
    const itemWithoutId = { ...item } as Partial<MenuItem>;
    delete itemWithoutId.id;
    batch.set(menuItemRef, itemWithoutId);
  });
  await batch.commit();
};

export const dbUpdateMenuItem = async (item: MenuItem) => {
  const menuCollection = collection(dbUserRef, "menu");
  const docRef = doc(menuCollection, item.id.toString());
  await updateDoc(docRef, item);
};

export const dbAddMenuItem = async (item: MenuItem) => {
  const menuCollection = collection(dbUserRef, "menu");
  const docRef = doc(menuCollection, item.id.toString());
  await setDoc(docRef, item);
};

export const dbRemoveMenuItem = async (itemId: number) => {
  const menuCollection = collection(dbUserRef, "menu");
  const docRef = doc(menuCollection, itemId.toString());
  await deleteDoc(docRef);
};
