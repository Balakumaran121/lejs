import React, { useState } from 'react'
import Pagewrapper from '../components/Pagewrapper';
import ProfileCard from "../components/ProfileCard";
import ThemeCard from "../components/ThemeCard";
import ColorCard from "../components/ColorCard";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "theme", label: "Theme" },
    { id: "color", label: "Color" },
  ];
  return (
    <Pagewrapper>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 border-b-2 transition-all duration-200 ${activeTab === tab.id ? "border-emerald-500 text-emerald-500" : "border-transparent hover:text-emerald-500"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "profile" ? (
        <ProfileCard />
      ) : activeTab === "theme" ? (
        <ThemeCard />
      ) : (
        <ColorCard />
      )}
    </Pagewrapper>
  );
};

export default Settings
