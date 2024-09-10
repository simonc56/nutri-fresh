import { FiChevronDown } from "react-icons/fi";
import "./AdminTabs.scss";

export type TabProps = {
  icon: JSX.Element;
  name?: string | undefined;
  active?: boolean;
  onClick?: () => void;
};

type AdminTabsProps = {
  tabs: TabProps[];
  setTabs: React.Dispatch<React.SetStateAction<TabProps[]>>;
};

function Tab({ icon, name, active, onClick }: TabProps) {
  return (
    <button className={`admin-tab${active ? " active" : ""}`} onClick={onClick}>
      {icon} {name && <span className="tab-label">{name}</span>}
    </button>
  );
}

export default function AdminTabs({ tabs, setTabs }: AdminTabsProps) {
  const handleClick = (index: number) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) => ({
        ...tab,
        active: i === index,
      }))
    );
  };
  return (
    <div className="admin-tabs">
      <Tab icon={<FiChevronDown />} />
      {tabs.map((tab, index) => (
        <Tab icon={tab.icon} name={tab.name} active={tab.active || false} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}
