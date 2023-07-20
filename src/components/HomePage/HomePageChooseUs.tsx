"use client";
import { FC, useState } from "react";
import Container from "../Layout/Container";
import SectionTitle from "../UI/SectionTitle";
import GridCol from "../Layout/Grid/GridCol";
import FlexColumn from "../Layout/Flex/FlexColumn";
import { choseUsData } from "@/data/HomePageChooseUs.data";
import HomePageChooseItem from "./HomePageChooseItem";
import { HomePageChooseBar } from "./HomePageChooseBar";

const HomePageChooseUs: FC = () => {
  const spans = [
    {
      id: 1,
      title: "Простота",
    },
    {
      id: 2,
      title: "Функции",
    },
    {
      id: 3,
      title: "Поддержка",
    },
    {
      id: 4,
      title: "Безопасность",
    },
  ];

  const [openTab, setOpenTab] = useState(1);
  return (
    <Container>
      <div className="absolute top-0 -z-10 right-0 w-[901px] h-[720px] bg-gradient-to-b from-[#0FEFE2] via-[#B708F4] to-[#B708F4] rounded-full blur-[400px] opacity-30" />
      <FlexColumn className="gap-20 mb-20">
        <SectionTitle size="60px" className="w-1/2 mx-auto">
          Почему пользователи выбирают нас ?
        </SectionTitle>
        <HomePageChooseBar
          spans={spans}
          openTab={openTab}
          setOpenTab={setOpenTab}
        />
        <GridCol className="grid-cols-1 gap-20">
          {choseUsData.map((item) => (
            <HomePageChooseItem item={item} key={item.id} openTab={openTab} />
          ))}
        </GridCol>
      </FlexColumn>
    </Container>
  );
};

export default HomePageChooseUs;
