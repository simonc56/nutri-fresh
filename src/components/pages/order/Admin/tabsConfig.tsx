import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddContent from "./AdminPanel/AddContent";
import EditContent from "./AdminPanel/EditContent";
import { TabProps } from "./AdminTabs/AdminTabs";

export const tabsConfig: TabProps[] = [
  {
    index: "add",
    icon: <AiOutlinePlus />,
    name: "Ajouter un produit",
    active: true,
    content: <AddContent />,
  },
  { index: "edit", icon: <MdModeEditOutline />, name: "Modifier un produit", content: <EditContent /> },
];
