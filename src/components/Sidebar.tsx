import { useState } from "react";
import {
  FaUserFriends,
  FaStar,
  FaMicroscope,
  FaMoneyBillWave,
  FaPalette,
  FaFootballBall,
  FaTv,
  FaRegMoneyBillAlt,
  FaGlobe,
  FaGraduationCap,
  FaUser,
  FaCog,
  FaTasks,
  FaBell,
  FaPlug,
  FaSlidersH,
} from "react-icons/fa";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { PiSquaresFourLight } from "react-icons/pi";
import { SiWelcometothejungle } from "react-icons/si";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import React from "react";

interface SectionItem {
  title: string;
  icon: JSX.Element;
}

interface PanelContent {
  title: string;
  description?: string;
  topic?: string;
  sections?: SectionItem[];
  more?: SectionItem[];
  library?: {
    title: string;
    description: string;
  };
}

const panelContentMap: Record<string, PanelContent> = {
  Home: {
    title: "Home",
    description: "Access your recent chats and search history.",
    sections: [
      { title: "Finance", icon: <FaRegMoneyBillAlt className="w-5 h-5 text-gray-400" /> },
      { title: "Travel", icon: <FaGlobe className="w-5 h-5 text-gray-400" /> },
      { title: "Academic", icon: <FaGraduationCap className="w-5 h-5 text-gray-400" /> },
    ],
    library: {
      title: "Library",
      description: "Explore your saved content.",
    },
  },
  Discover: {
    title: "Discover",
    topic: "Topics",
    sections: [
      { icon: <FaUserFriends />, title: "For You" },
      { icon: <FaStar />, title: "Top" },
      { icon: <FaMicroscope />, title: "Tech & Science" },
      { icon: <FaMoneyBillWave />, title: "Finance" },
      { icon: <FaPalette />, title: "Arts & Culture" },
    ],
    more: [
      { icon: <FaFootballBall />, title: "Sports" },
      { icon: <FaTv />, title: "Entertainment" },
    ],
  },
  Spaces: {
    title: "Spaces",
    sections: [{ icon: <SiWelcometothejungle />, title: "Welcome" }],
  },
  Upgrade: { title: "Upgrade" },
  Install: { title: "Install" },
  Profile: {
    title: "Profile",
    sections: [
      { icon: <FaUser />, title: "Account" },
      { icon: <FaCog />, title: "Preferences" },
      { icon: <FaPalette />, title: "Personalization" },
      { icon: <FaTasks />, title: "Tasks" },
      { icon: <FaBell />, title: "Notifications" },
      { icon: <FaPlug />, title: "Connectors" },
      { icon: <FaStar />, title: "Pro Perks" },
      { icon: <FaSlidersH />, title: "All Settings" },
    ],
  },
};

type PanelKeys = keyof typeof panelContentMap;

const Sidebar = () => {
  const [hovered, setHovered] = useState<PanelKeys | null>(null);
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  const isPanelOpen = hovered !== null || isPanelHovered;

  return (
    <div className="flex font-inter relative">
      {/* Sidebar */}
      <div
        className="h-screen w-[62px] bg-[#1E1E1E] text-white flex flex-col justify-between items-center py-6 border-r border-[#2c2c2c]"
        onMouseLeave={() => {
          setTimeout(() => {
            if (!isPanelHovered) setHovered(null);
          }, 1000000000);
        }}
      >
        <div className="flex flex-col items-center gap-y-3">
          <img src="public/Off-White@2x.png" alt="Logo" className="w-10 h-10 mb-3" />
          <SidebarIcon icon={<FiPlus size={26} />} label="New" hovered={hovered === "New"} />
          <SidebarIcon icon={<BiHomeAlt size={26} />} label="Home" hovered={hovered === "Home"} onHover={() => setHovered("Home")} />
          <SidebarIcon icon={<RiCompassDiscoverLine size={26} />} label="Discover" hovered={hovered === "Discover"} onHover={() => setHovered("Discover")} />
          <SidebarIcon icon={<PiSquaresFourLight size={26} />} label="Spaces" hovered={hovered === "Spaces"} onHover={() => setHovered("Spaces")} />
        </div>

        <div className="flex flex-col items-center gap-y-3">
          <SidebarIcon icon={<BiUser size={26} />} label="Profile" hovered={hovered === "Profile"} onHover={() => setHovered("Profile")} />
          <SidebarIcon icon={<FaUpRightFromSquare size={26} />} label="Upgrade" hovered={hovered === "Upgrade"} onHover={() => setHovered("Upgrade")} />
          <SidebarIcon icon={<MdOutlineInstallDesktop size={26} />} label="Install" hovered={hovered === "Install"} onHover={() => setHovered("Install")} />
        </div>
      </div>

      {/* Hover Panel */}
      <div
        className={`h-screen transition-all duration-300 ease-in-out overflow-hidden ${
          isPanelOpen ? "w-72 opacity-100" : "w-0 opacity-0"
        } bg-[#121212] text-white shadow-xl`}
        onMouseEnter={() => setIsPanelHovered(true)}
        onMouseLeave={() => {
          setIsPanelHovered(false);
          setTimeout(() => {
            if (!hovered) return;
            setHovered(null);
          }, 100);
        }}
      >
        {isPanelOpen && hovered && (
          <div className="p-4 mx-4 overflow-y-auto">
            <h2 className="font-semibold text-xl">{panelContentMap[hovered]?.title}</h2>
            <div className="mt-4">
              <hr className="border-t border-gray-700 mb-4" />
              {panelContentMap[hovered]?.topic && (
                <h4 className="ml-4 text-sm text-gray-400 font-semibold tracking-wide mb-3">
                  {panelContentMap[hovered]?.topic}
                </h4>
              )}

              <div className="space-y-2">
                {panelContentMap[hovered]?.sections?.map((section, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2 mx-2 rounded-md hover:bg-[#2a2a2a] transition-all duration-200 cursor-pointer hover:translate-x-2"
                  >
                    <div className="text-gray-400">{section.icon}</div>
                    <span className="text-sm text-white">{section.title}</span>
                  </div>
                ))}
              </div>

              {panelContentMap[hovered]?.more && (
                <>
                  <h4 className="ml-4 mt-6 text-sm text-gray-400 font-semibold tracking-wide mb-3">
                    More
                  </h4>
                  <div className="space-y-2">
                    {panelContentMap[hovered]?.more.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-2 mx-2 rounded-md hover:bg-[#2a2a2a] transition-all duration-200 cursor-pointer hover:translate-x-2"
                      >
                        <div className="text-gray-400">{item.icon}</div>
                        <span className="text-sm text-white">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {panelContentMap[hovered]?.library && (
              <div className="mt-4 px-4">
                <h3 className="text-lg font-semibold">{panelContentMap[hovered].library.title}</h3>
                <p className="text-sm text-gray-400">{panelContentMap[hovered].library.description}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
  hovered: boolean;
  onHover?: () => void;
}

const SidebarIcon = ({ icon, label, hovered, onHover }: SidebarIconProps) => {
  return (
    <div className="relative group" onMouseEnter={onHover}>
      <div className="text-gray-300 hover:bg-[#2A2A2A] p-2 rounded-lg cursor-pointer transition-colors duration-200">
        {icon}
      </div>
      {hovered && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12 text-xs bg-[#2A2A2A] text-white px-2 py-1 rounded shadow">
          {label}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
