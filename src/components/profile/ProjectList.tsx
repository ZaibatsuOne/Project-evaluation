import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import ProfilePageProjectBlock from "./blocks/ProjectBlock";
import Subtitle from "../UI/Subtitle";
import { Button } from "@/components/UI/Button";
import { FC } from "react";
import { Plus, KanbanSquare } from "lucide-react";
import Link from "next/link";

const ProfilePageProjectList: FC = () => {
  const projectList = [
    {
      id: 1,
      name: "Проект 1",
    },
    {
      id: 2,
      name: "Проект 2",
    },
  ];
  return (
    <FlexColumn className="gap-10">
      <FlexRow className="justify-between items-center">
        <Subtitle>
          <KanbanSquare />
          Список проектов
        </Subtitle>
        <Button variant="blue" size="lg">
          <Plus />
          Создать проект
        </Button>
      </FlexRow>
      <section className="grid grid-cols-4 gap-10 ">
        {projectList.map((item, index) => (
          <Link href={`/project/${item.id}`}>
            <ProfilePageProjectBlock item={item} index={index} key={index} />
          </Link>
        ))}
      </section>
    </FlexColumn>
  );
};

export default ProfilePageProjectList;
