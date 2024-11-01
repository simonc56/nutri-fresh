import { useRef, useState } from "react";
import { dbAddMenuItem, dbRemoveMenuItem, dbUpdateFullMenu, dbUpdateMenuItem } from "src/api/menu";
import { dbGetUserMenu } from "src/api/user";
import { fakeMenu, MenuItem } from "../fakeData/fakeMenu";
import { useTimedMessage } from "./useTimedMessage";

export const useMenu = () => {
  const emptyItem = {
    id: 0,
    imageSource: "",
    title: "",
    price: 0,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  };
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem>(emptyItem);
  const refInputName = useRef<null | HTMLInputElement>(null);
  const [myTimeout, setMyTimeout] = useState<number>();
  const { isDisplayed, displayMessage } = useTimedMessage(2000);

  const addItemToMenu = (item: Partial<MenuItem>) => {
    const maxId = Math.max(...menu.map((item) => item.id), 0);
    const newItem = {
      ...item,
      id: maxId + 1,
      quantity: 0,
    } as MenuItem;
    setMenu((prev) => [newItem, ...prev]);
    dbAddMenuItem(newItem);
  };

  const removeItemFromMenu = (id: number) => {
    setMenu((previousMenu) => previousMenu.filter((item) => item.id !== id));
    dbRemoveMenuItem(id);
  };

  const loadMenu = async () => {
    setIsLoading(true);
    const menu = await dbGetUserMenu();
    if (menu) {
      setMenu(menu);
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };

  /**
   * Set/Reset the menu to the default one
   * both locally and in the database
   */
  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
    dbUpdateFullMenu(fakeMenu.LARGE);
    setIsLoading(false);
  };

  const updateItem = (item: MenuItem) => {
    setSelectedItem(item);
    setMenu((prev) => prev.map((menuItem) => (menuItem.id === item.id ? item : menuItem)));
    if (item.id !== 0) {
      clearTimeout(myTimeout);
      const timeoutID = window.setTimeout(() => {
        dbUpdateMenuItem(item);
        displayMessage();
      }, 500);
      setMyTimeout(timeoutID);
    }
  };

  const setSelectedItemById = (id: number) => {
    setSelectedItem(menu.find((item: MenuItem) => item.id === id) || emptyItem);
    refInputName.current?.focus();
  };

  const unSelectItem = () => {
    setSelectedItem(emptyItem);
  };

  return {
    menu,
    isLoading,
    isError,
    setIsError,
    addItemToMenu,
    removeItemFromMenu,
    loadMenu,
    resetMenu,
    updateItem,
    selectedItem,
    setSelectedItemById,
    unSelectItem,
    refInputName,
    isDisplayed,
    displayMessage,
  };
};
