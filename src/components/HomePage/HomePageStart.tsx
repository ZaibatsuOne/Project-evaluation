"use client";
import Container from "../Layout/Container";
import FlexColumn from "../Layout/Flex/FlexColumn";
import SectionDescription from "../UI/SectionDescription";
import SectionSubtitle from "../UI/SectionSubtitle";
import SectionTitle from "../UI/SectionTitle";
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";

const dataInfo = [
  {
    title: "Управление проектами",
    description:
      "Изучите возможности авторизации, создания новых проектов и определения фаз, чтобы эффективно управлять своими проектами.",
  },
  {
    title: "Детали проекта",
    description:
      "Детальное определение проекта: добавляйте характеристики, задачи и метрики. Определите характеристики проекта, задачи для каждой фазы и соответствующие метрики, чтобы точно оценить проект и его эффективность.",
  },
  {
    title: "Получение оценки проекта",
    description:
      "Оцените свой проект, основываясь на заданных характеристиках, задачах и метриках, и анализируйте результаты, чтобы принять соответствующие решения и рекомендации для его улучшения.",
  },
];
const words = [
  "От",
  "идеи",
  "к",
  "оценке:",
  "как",
  "начать",
  "работу",
  "с",
  "оценкой",
  "проектов",
];
const HomePageStart: FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 850);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container>
      <div className="absolute top-0 -z-10 right-0 w-[901px] h-[720px] bg-gradient-to-b from-[#0FEFE2] via-pink-400 to-[#B708F4] rounded-full blur-[400px] opacity-30" />
      <div className="absolute bottom-0 -z-10 left-0 w-[901px] h-[720px] bg-gradient-to-b from-[#efb00f] via-red-400 to-[#B708F4] rounded-full blur-[400px] opacity-30" />

      <FlexColumn className="gap-36">
        <SectionTitle size="60px" className="w-1/2 mx-auto">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ color: "white" }}
              animate={{
                color: index === currentWordIndex ? "#7158e2" : "white",
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </SectionTitle>
        <FlexColumn className="gap-20 w-1/2 mx-auto text-center">
          {dataInfo.map((item, index) => (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 6 }}
            >
              <FlexColumn className="flex flex-col items-center gap-5">
                <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-2xl text-black font-bold">
                  {index + 1}
                </span>
                <SectionSubtitle>{item.title}</SectionSubtitle>
                <SectionDescription>{item.description}</SectionDescription>
                {index === 2 ||
                  (3 && (
                    <div className="bg-[url('/dashedLine.svg')] w-56 h-[1px] rotate-90 mt-32 mb-20" />
                  ))}
              </FlexColumn>
            </motion.section>
          ))}
        </FlexColumn>
      </FlexColumn>
    </Container>
  );
};

export default HomePageStart;
