import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import { FC } from "react";
import ProfilePageProjectItem from "./blocks/ProfilePageProjectItem";

const ProfilePageProjectList: FC = () => {
  const projectList = ["Проект 1", "Проект 2", "Проект 3", "Проект 4"];
  return (
    <FlexColumn className="gap-10">
      <FlexRow className="justify-between items-center">
        <h2>Список проектов</h2>
        <button className="blueBtn">Создать проект</button>
      </FlexRow>
      <ul className="flex flex-col gap-5">
        {projectList.map((item, index) => (
          <ProfilePageProjectItem key={index} index={index} item={item} />
        ))}
      </ul>
    </FlexColumn>
  );
};

export default ProfilePageProjectList;
