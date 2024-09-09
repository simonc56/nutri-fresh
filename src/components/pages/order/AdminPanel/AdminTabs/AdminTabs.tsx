import "./AdminTabs.scss";

type TabProps = {
  icon: React.ReactNode;
  name?: string;
};

function Tab({ icon, name }: TabProps) {
  return (
    <button className="admin-tab">
      {icon} {name && <span className="tab-label">{name}</span>}
    </button>
  );
}

export default function AdminTabs({ tabs }: { tabs: TabProps[] }) {
  return (
    <div className="admin-tabs">
      {tabs.map((tab) => (
        <Tab icon={tab.icon} name={tab.name} />
      ))}
    </div>
  );
}
