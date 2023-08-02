import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
}

const ProfiePageNav: FC<Props> = ({ currentSection, setCurrentSection }) => {
  const menuList = ["Проекты", "Профиль", "Настройки"];
  return (
    <nav className="flex gap-5">
      {menuList.map((item, index) => (
        <button
          className={index === currentSection ? "blueBtn" : "greyBtn"}
          key={index}
          onClick={(): void => setCurrentSection(index)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default ProfiePageNav;
