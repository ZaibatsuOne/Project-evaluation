import Image from "next/image";
import SectionCard from "../UI/Section/SectionCard";
import { FC } from "react";
import FlexColumn from "../Layout/Flex/FlexColumn";

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
  return (
    <SectionCard>
      <FlexColumn className="gap-5 text-lg">
        <Image
          src={item.icon}
          alt={item.name}
          width={100}
          height={100}
          className="rounded-full w-16 h-16 object-cover"
        />
        <p className="line-clamp-[7] text-ellipsis">{item.review}</p>
      </FlexColumn>
      <span>{item.name}</span>
    </SectionCard>
  );
};

export default HomePageReviewItem;
