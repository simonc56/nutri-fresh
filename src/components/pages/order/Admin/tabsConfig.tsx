import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import { TabProps } from "./AdminTabs/AdminTabs";

export const tabsConfig: TabProps[] = [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    name: "Ajouter un produit",
    active: true,
    content: <AddForm />,
  },
  { index: "edit", icon: <MdModeEditOutline />, name: "Modifier un produit", content: <EditForm /> },
];
