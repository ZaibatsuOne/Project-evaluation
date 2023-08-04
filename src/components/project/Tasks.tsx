import GridCol from "../Layout/Grid/GridCol";
import TaskBlock from "./blocks/TaskBlock";
import { FC } from "react";

const Tasks: FC = () => {
  const taskList = [
    {
      title: "Задача №1",
      description: "ОписаниеОписание Описание ОписаниеОписание",
      role: "Администатор",
      startTask: 10,
      endTask: 20,
    },
    {
      title: "Задача №1",
      description: "ОписаниеОписание Описание ОписаниеОписание",
      role: "Администатор",
      startTask: 10,
      endTask: 20,
    },
    {
      title: "Задача №1",
      description: "ОписаниеОписание Описание ОписаниеОписание",
      role: "Администатор",
      startTask: 10,
      endTask: 20,
    },
    {
      title: "Задача №1",
      description: "ОписаниеОписание Описание ОписаниеОписание",
      role: "Администатор",
      startTask: 10,
      endTask: 20,
    },
    {
      title: "Задача №1",
      description: "ОписаниеОписание Описание ОписаниеОписание",
      role: "Администатор",
      startTask: 10,
      endTask: 20,
    },
  ];
  return (
    <GridCol cols={4} className="gap-5 items-baseline">
      {taskList.map((task) => (
        <TaskBlock task={task} />
      ))}
    </GridCol>
  );
};

export default Tasks;
