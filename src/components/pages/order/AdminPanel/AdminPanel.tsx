import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import AdminContent from "./AdminContent/AdminContent";
import "./AdminPanel.scss";
import AdminTabs from "./AdminTabs/AdminTabs";

export default function AdminPanel() {
  return (
    <section className="admin-panel">
      <AdminTabs
        tabs={[
          { icon: <FiChevronDown /> },
          { icon: <AiOutlinePlus />, name: "Ajouter un produit" },
          { icon: <MdModeEditOutline />, name: "Modifier un produit" },
        ]}
      />
      <AdminContent />
    </section>
  );
}
