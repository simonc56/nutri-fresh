import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useOrderContext } from "../../../../../context/OrderContext";
import "./AdminTabs.scss";

export type TabProps = {
  icon: JSX.Element;
  name?: string | undefined;
  active?: boolean;
  onClick?: () => void;
};

function Tab({ icon, name, active, onClick }: TabProps) {
  return (
    <button className={`admin-tab${active ? " active" : ""}`} onClick={onClick}>
      {icon} {name && <span className="tab-label">{name}</span>}
    </button>
  );
}

export default function AdminTabs() {
  const { isPanelOpen, setIsPanelOpen, tabs, setTabs, setContentPanel } = useOrderContext();
  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  const clickToChangeTab = (index: number) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) => ({
        ...tab,
        active: i === index,
      }))
    );
    if (!isPanelOpen) togglePanel();
    // to be continued...
    setContentPanel(tabs[index].name || "");
  };

  return (
    <div className="admin-tabs">
      <Tab icon={isPanelOpen ? <FiChevronDown /> : <FiChevronUp />} onClick={togglePanel} active={!isPanelOpen} />
      {tabs.map((tab, index) => (
        <Tab
          key={tab.name}
          icon={tab.icon}
          name={tab.name}
          active={tab.active || false}
          onClick={() => clickToChangeTab(index)}
        />
      ))}
    </div>
  );
}
