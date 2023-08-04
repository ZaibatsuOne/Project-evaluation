"use client";
import { Dispatch, FC, SetStateAction } from "react";
import { KanbanSquare, User, Settings } from "lucide-react";
import { Button } from "@/components/UI/Button";

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
    <nav className="flex gap-5">
      {menuList.map((item, index) => (
        <Button
          key={item.name}
          variant="default"
          size="sm"
          className={index === currentSection ? "bg-systemGrey4" : ""}
          onClick={(): void => setCurrentSection(index)}
        >
          <item.icon />
          {item.name}
        </Button>
      ))}
    </nav>
  );
};

export default ProfiePageNav;
