import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
}

const ProfiePageNav: FC<Props> = ({ currentSection, setCurrentSection }) => {
  const menuList = ["Проекты", "Профиль", "Настройки"];
  return (
    <nav className="flex gap-10">
      {menuList.map((item, index) => (
        <button
          className={
            index === currentSection
              ? "border-solid border-b-2 p-2 border-systemBlue text-xl shadow-2xl"
              : "border-solid border-b-2 p-2 border-systemWhite text-xl "
          }
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
