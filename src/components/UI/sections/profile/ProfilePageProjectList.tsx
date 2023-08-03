import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import ProfilePageProjectBlock from "./blocks/ProfilePageProjectBlock";
import { FC } from "react";

const ProfilePageProjectList: FC = () => {
  const projectList = [
    "Проект 1",
    "Прое231231 2312312312 3dsafsdafsda fdsadsafsadf dsfsdaff sdfsda fsda fasd f sadf asdfsadfsda fsadf asdf ds  кт 2",
    "Проект 3",
    "Проект 4",
  ];
  return (
    <FlexColumn className="gap-10">
      <FlexRow className="justify-between items-center">
        <h2>Список проектов</h2>
        <button className="blueBtn">Создать проект</button>
      </FlexRow>
      <section className="grid grid-cols-4 gap-10 ">
        {projectList.map((item, index) => (
          <ProfilePageProjectBlock item={item} index={index} key={index} />
        ))}
      </section>
    </FlexColumn>
  );
};

export default ProfilePageProjectList;
