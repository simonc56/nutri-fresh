import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import ProductForm from "./AdminContent/ProductForm";
import { TabProps } from "./AdminTabs/AdminTabs";

export const tabsConfig: TabProps[] = [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    name: "Ajouter un produit",
    active: true,
    content: <ProductForm type="add" />,
  },
  { index: "edit", icon: <MdModeEditOutline />, name: "Modifier un produit", content: <ProductForm type="edit" /> },
];
