"use client";
import { Dispatch, FC, SetStateAction } from "react";
import { KanbanSquare, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
interface Props {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
}

const ProfiePageNav: FC<Props> = ({ currentSection, setCurrentSection }) => {
  const menuList = [
    {
      icon: KanbanSquare,
      name: "Проекты",
    },
    {
      icon: User,
      name: "Профиль",
    },
    {
      icon: Settings,
      name: "Настройки",
    },
  ];

  return (
    <nav className="flex gap-10">
      {menuList.map((item, index) => (
        <button
          className={cn(
            "flex items-center gap-2 border-solid, border-b-2 p-2 text-xl",
            index === currentSection
              ? "border-systemBlue"
              : "border-systemWhite"
          )}
          onClick={(): void => setCurrentSection(index)}
        >
          <item.icon />
          {item.name}
        </button>
      ))}
    </nav>
  );
};

export default ProfiePageNav;
