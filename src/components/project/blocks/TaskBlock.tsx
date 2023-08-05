"use client";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import SectionBlock from "@/components/UI/Section/SectionBlock";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownSquare, Book, FileTerminal, Trash2 } from "lucide-react";
import { Button } from "@/components/UI/Button";
import { FC, useState } from "react";

interface TaskProps {
  title: string;
  description: string;
  role: string;
  startTask: number;
  endTask: number;
}
interface Props {
  task: TaskProps;
}

const TaskBlock: FC<Props> = ({ task }) => {
  const { title, description, role, startTask, endTask } = task;
  const taskList = [
    {
      name: "Роль",
      value: role,
    },
    {
      name: "Кол-во часов (от)",
      value: startTask,
    },
    {
      name: "Кол-во часов (до)",
      value: endTask,
    },
  ];
  const [openTask, setOpenTask] = useState(false);
  return (
    <SectionBlock className="min-h-[300px] h-auto bg-slate-300 p-0">
      <FlexColumn className="justify-between">
        <FlexColumn className="p-8 gap-2">
          <header className="flex flex-col gap-2">
            <FlexRow className="gap-2 items-center">
              <FileTerminal />
              <span className="text-xl">{task.title}</span>
            </FlexRow>
            <FlexColumn className="gap-2">
              <FlexRow className="gap-2 items-center">
                <Book />
                <span className="text-xl">Описание: </span>
              </FlexRow>
              <span>{task.description}</span>
            </FlexColumn>
          </header>
          <AnimatePresence>
            {openTask && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                {taskList.map((taskItem) => (
                  <div className="flex flex-col ">
                    <span className="pt-3 text-xl">{taskItem.name}:</span>
                    <span>{taskItem.value}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </FlexColumn>
        <div className="flex items-center justify-between py-8 px-8 bg-systemGrey4 w-full h-10 rounded-b-3xl">
          <Button size="tight" onClick={(): void => setOpenTask(!openTask)}>
            Раскрыть
            <ArrowDownSquare />
          </Button>
          <Button
            variant="delete"
            size="tight"
            className="flex backdrop-opacity-50"
          >
            Удалить <Trash2 />
          </Button>
        </div>
      </FlexColumn>
    </SectionBlock>
  );
};

export default TaskBlock;
