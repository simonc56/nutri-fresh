import { useRef, useState } from "react";
import { fakeMenu, MenuItem } from "../fakeData/fakeMenu";

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
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.LARGE);
  const [selectedItem, setSelectedItem] = useState<MenuItem>(emptyItem);
  const refInputName = useRef<null | HTMLInputElement>(null);

  const addItemToMenu = (item: Partial<MenuItem>) => {
    const maxId = Math.max(...menu.map((item) => item.id), 0);
    const newItem = {
      ...item,
      id: maxId + 1,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    } as MenuItem;
    setMenu((prev) => [newItem, ...prev]);
  };

  const removeItemFromMenu = (id: number) => {
    setMenu((previousMenu) => previousMenu.filter((item) => item.id !== id));
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const updateItem = (item: MenuItem) => {
    setSelectedItem(item);
    setMenu((prev) => prev.map((menuItem) => (menuItem.id === item.id ? item : menuItem)));
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
    addItemToMenu,
    removeItemFromMenu,
    resetMenu,
    updateItem,
    selectedItem,
    setSelectedItemById,
    unSelectItem,
    refInputName,
  };
};
