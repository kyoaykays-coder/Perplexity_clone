import { useState } from "react";
import { FaRegMoneyBillAlt, FaGlobe, FaGraduationCap } from 'react-icons/fa';
import {
  FiSearch,
  FiPlus,
} from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { PiSquaresFourLight } from "react-icons/pi";

const panelContentMap: Record<string, { title: string; description: string }> = {
  Home: {
    title: "Home",
    description: "Access your recent chats and search history.",
    sections: [
      {
        title: "Finance",
        icon: <FaRegMoneyBillAlt className="w-5 h-5 text-gray-400 mr-2" />
      },
      {
        title: "Travel",
        icon: <FaGlobe className="w-5 h-5 text-gray-400 mr-2" />
      },
      {
        title: "Academic",
        icon: <FaGraduationCap className="w-5 h-5 text-gray-400 mr-2" />
      }
    ],
    library: {
      title: "Library"
    }
  },
  Discover: {
    title: "Discover",
    topic: "Topics",
  },
  Spaces: {
    title: "Spaces",
    description: "Organize and manage your collections.",
  },
};

const Sidebar = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex font-inter relative">
      {/* Sidebar */}
      <div
        className="h-screen w-[62px] bg-[#1E1E1E] text-white flex flex-col items-center py-8 border-r border-[#2c2c2c] relative"
      >
        {/* Logo */}
        <div className="mb-4">
          <img src="public/Off-White@2x.png" alt="Logo" className="w-12 h-12" />
        </div>

        {/* Icons */}
        <div className="flex flex-col items-center gap-6 mt-4 relative">
          <SidebarIcon
            className='mb-4'
            icon={<FiPlus size={24} />}
            label="New"
            hovered={hovered === "New"}
          />
          <SidebarIcon
            icon={<FiSearch size={24} />}
            label="Home"
            hovered={hovered === "Home"}
            onHover={() => setHovered("Home")}
            onLeave={() => setHovered(null)}
          />
          <SidebarIcon
            icon={<RiCompassDiscoverLine size={24} />}
            label="Discover"
            hovered={hovered === "Discover"}
            onHover={() => setHovered("Discover")}
            onLeave={() => setHovered(null)}
          />
          <SidebarIcon
            icon={<PiSquaresFourLight size={24} />}
            label="Spaces"
            hovered={hovered === "Spaces"}
            onHover={() => setHovered("Spaces")}
            onLeave={() => setHovered(null)}
          />
        </div>
      </div>

      {/* Animated Side Panel */}
      <div
        className={`h-screen transition-all duration-300 ease-in-out overflow-hidden ${hovered ? "w-72 opacity-100" : "w-0 opacity-0"
          } bg-[#121212] text-white shadow-xl`}
      >
        {hovered && (
          <div className="p-4 mx-4">
            <span className=" font-semibold">
              {panelContentMap[hovered].title}
            </span>
            <div className="mt-4">
              <hr className="my-4 w-full h-0.5" />
              <span className="ml-2">{panelContentMap[hovered].topic}</span>


              {panelContentMap[hovered].sections?.map((section, index) => (
                <div key={index} className="mx-6 mb-2 flex items-center">
                  {/* Title with Icon on the same line */}
                  <h6 className="font-medium flex items-center mr-2">
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </h6>
                </div>

              ))}
            </div>
            <div className="mt-4">
              {panelContentMap[hovered].library && (
                <div>
                  <h3 className="text-lg font-medium">{panelContentMap[hovered].library.title}</h3>
                  <p className="text-sm text-gray-400">{panelContentMap[hovered].library.description}</p>
                </div>
              )}
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

const SidebarIcon = ({
  icon,
  label,
  hovered,
  onHover,
  onLeave,
}: {
  icon: React.ReactNode;
  label: string;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
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
