import Dialog from "../UI/Dialog";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import Link from "next/link";
import ProfilePageProjectBlock from "./blocks/ProjectBlock";
import Subtitle from "@/components/UI/Subtitle";
import { Button } from "@/components/UI/Button";
import { FC } from "react";
import { KanbanSquare, Plus } from "lucide-react";

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
    <>
      <FlexColumn className="gap-10">
        <FlexRow className="justify-between items-center">
          <Subtitle>
            <KanbanSquare />
            Список проектов
          </Subtitle>
          <Dialog>
            <Button variant="blue" size="lg">
              <Plus />
              Создать проект
            </Button>
          </Dialog>
        </FlexRow>
        <section className="grid grid-cols-4 gap-10 ">
          {projectList.map((item) => (
            <Link href={`/project/${item.id}`}>
              <ProfilePageProjectBlock item={item} key={item.id} />
            </Link>
          ))}
        </section>
      </FlexColumn>
    </>
  );
};

export default ProfilePageProjectList;
