import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useOrderContext } from "src/context/useOrderContext";
import "./Admin.scss";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminTabs from "./AdminTabs/AdminTabs";

export default function Admin() {
  const { isPanelOpen, isAdminMode } = useOrderContext();
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={isAdminMode} timeout={300} classNames="admin-transition">
      <div ref={nodeRef} className="admin">
        <AdminTabs />
        {isPanelOpen && <AdminPanel />}
      </div>
    </CSSTransition>
  );
}
