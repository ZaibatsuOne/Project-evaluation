"use client";

import FlexColumn from "../Layout/Flex/FlexColumn";
import Image from "next/image";
import SectionCard from "../UI/Section/SectionCard";
import { FC, useState } from "react";
import ModalDark from "../UI/Modal/ModalDark";

interface itemProps {
  id: number;
  name: string;
  icon: string;
  review: string;
}

interface Props {
  item: itemProps;
}
const HomePageReviewItem: FC<Props> = ({ item }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOpenModal = () => {
    setVisibleModal(true);
  };
  return (
    <>
      <SectionCard onClick={handleOpenModal}>
        <FlexColumn className="gap-5 text-lg">
          <Image
            src={item.icon}
            alt={item.name}
            width={100}
            height={100}
            className="rounded-full w-16 h-16 object-cover"
          />
          <p className="line-clamp-[7] text-ellipsis font-semibold">
            {item.review}
          </p>
        </FlexColumn>
        <span>{item.name}</span>
      </SectionCard>

      <ModalDark visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
        <FlexColumn className="gap-10">
          <FlexColumn className="gap-5 text-lg">
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-full w-16 h-16 object-cover"
            />
            <p className="line-clamp-[7] text-ellipsis font-semibold">
              {item.review}
            </p>
          </FlexColumn>
          <span>{item.name}</span>
        </FlexColumn>
      </ModalDark>
    </>
  );
};

export default HomePageReviewItem;
