import GridCol from "../Layout/Grid/GridCol";
import HeaderBlock from "./blocks/HeaderBlock";
import { FC } from "react";
import {
  FolderKanban,
  ListChecks,
  Users2,
  BatteryCharging,
} from "lucide-react";
import FlexColumn from "../Layout/Flex/FlexColumn";

const Header: FC = () => {
  const headerBlockList = [
    {
      icon: FolderKanban,
      title: "Всего фаз",
      count: 1,
    },
    {
      icon: ListChecks,
      title: "Всего задач",
      count: 10,
    },
    {
      icon: Users2,
      title: "Участники",
      count: 4,
    },
    {
      icon: BatteryCharging,
      title: "Продуктивность",
      count: 93.8,
    },
  ];
  return (
    <header>
      <FlexColumn className="gap-10">
        <h1 className="text-4xl font-bold">Название проекта</h1>
        <GridCol cols={4} className="gap-5">
          {headerBlockList.map((headerBlock) => (
            <HeaderBlock headerBlock={headerBlock} />
          ))}
        </GridCol>
      </FlexColumn>
    </header>
  );
};

export default Header;
