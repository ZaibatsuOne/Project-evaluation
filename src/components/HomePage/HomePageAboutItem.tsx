import FlexColumn from "../Layout/Flex/FlexColumn";
import FlexRow from "../Layout/Flex/FlexRow";
import Image from "next/image";
import { FC } from "react";

interface itemProps {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}

interface Props {
  item: itemProps;
}
const HomePageAboutItem: FC<Props> = ({ item }) => {
  return (
    <FlexRow
      className={`max-w-full justify-center items-center gap-14 ${
        item.id === 2 ? `flex-row-reverse` : ` `
      }`}
    >
      <Image
        src={item.icon}
        width={479}
        height={479}
        quality={100}
        alt="123"
        className="flex h-[479px] object-cover rounded-[40px] grayscale"
      />

      <FlexColumn className="gap-5 w-full">
        <h3 className="text-4xl font-bold">{item.title}</h3>
        <p>{item.subtitle}</p>
      </FlexColumn>
    </FlexRow>
  );
};

export default HomePageAboutItem;
