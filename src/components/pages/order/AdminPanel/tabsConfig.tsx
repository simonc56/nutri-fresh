import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminContent/AddForm";
import EditForm from "./AdminContent/EditForm";
import { TabProps } from "./AdminTabs/AdminTabs";

export const tabsConfig: TabProps[] = [
  { index: "add", icon: <AiOutlinePlus />, name: "Ajouter un produit", active: true, content: <AddForm /> },
  { index: "edit", icon: <MdModeEditOutline />, name: "Modifier un produit", content: <EditForm /> },
];
