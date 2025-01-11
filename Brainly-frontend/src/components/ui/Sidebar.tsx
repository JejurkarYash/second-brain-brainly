import { Label } from "@radix-ui/react-label";
import { Brain, Earth } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { TwitterIcon } from "@/icons/TwitterIcon";
import YoutubeIcon from "@/icons/YoutubeIcon";
import { DocumentIcon } from "@/icons/DocumentIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ onClick }: { onClick: (type: string) => void }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>("all");

  // handle the sidebar item click
  const handleItemClick = (type: string) => {
    setActiveItem(type);
    onClick(type);
  };

  return (
    <div className=" fixed  left-0 top-0 z-0 h-screen bg-white w-72  border border-gray-300  p-2 font-satoshi   ">
      {/* Logo  */}
      <div
        className=" flex space-x-3 items-center  p-3 cursor-pointer    "
        onClick={() => navigate("/")}
      >
        <Brain size={35} className=" text-primary " />
        <Label className=" text-black  font-bold text-xl cursor-pointer  ">
          Second Brain
        </Label>
      </div>

      {/* Sidebar Item */}
      <div className="p-3  space-y-2 ">
        <SidebarItem
          onClick={() => handleItemClick("all")}
          text="All"
          icon={<Earth color="black " />}
          isActive={activeItem === "all"}
        />
        <SidebarItem
          onClick={() => handleItemClick("twitter")}
          text="Twitter"
          icon={<TwitterIcon color="black " />}
          isActive={activeItem === "twitter"}
        />
        <SidebarItem
          onClick={() => handleItemClick("youtube")}
          text="Youtube"
          icon={<YoutubeIcon />}
          isActive={activeItem === "youtube"}
        />
        <SidebarItem
          onClick={() => handleItemClick("documents")}
          text="Documents"
          icon={<DocumentIcon />}
          isActive={activeItem === "documents"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
