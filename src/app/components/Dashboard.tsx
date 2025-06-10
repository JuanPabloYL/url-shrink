import { FormURL } from "./FormURL";
// import { ListLinks } from "./ListLinks";
import { Navbar } from "./Navbar";
import { Tabs } from "./Tabs";

export const Dashboard = () => {
  const tabs = [
    {
      id: "create",
      label: "Create Link",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      ),
      content: <FormURL />,
    },
    {
      id: "manage",
      label: "Manage Link",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>
      ),
      content: <p>Manage Link</p>,
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="welcome container">
        <div className="welcome__content">
          <p className="welcome__header">Welcome back, Juan Pablo! 👋</p>
          <p>Ready to create some powerful shork links?</p>
        </div>
      </div>

      <Tabs tabs={tabs} />

      {/* <ListLinks /> */}
    </div>
  );
};
