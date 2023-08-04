import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import ProfilePageProjectBlock from "./blocks/ProfilePageProjectBlock";
import { FC } from "react";
import { Button } from "@/components/UI/Button";

const ProfilePageProjectList: FC = () => {
  const projectList = ["Проект 1", "Проеsdf ds  кт 2", "Проект 3", "Проект 4"];
  return (
    <FlexColumn className="gap-10">
      <FlexRow className="justify-between items-center">
        <h2>Список проектов</h2>
        <Button variant="blue" size="lg">
          Создать проект
        </Button>
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
