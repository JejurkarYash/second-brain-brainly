import { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
  onClick: ({ type }: { type: string }) => void;
  isActive: boolean;
}

const SidebarItem = ({ text, icon, onClick, isActive }: SidebarItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row items-center gap-6 p-3 cursor-pointer hover:bg-gray-100 rounded-md transition-all duration-300 text-gray-700 ${
        isActive ? "bg-gray-100 font-semibold  " : "hover:bg-gray-100"
      }`}
    >
      <div className="">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SidebarItem;
