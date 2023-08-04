import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { Button } from "@/components/UI/Button";
import SectionCard from "@/components/UI/Section/SectionCard";
import { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface itemProps {
  id: number;
  type: string;
  price: number;
  options: string[];
}
interface Props {
  item: itemProps;
}
const HomePagePlansItem: FC<Props> = ({ item }) => {
  return (
    <SectionCard>
      <FlexColumn className="gap-10">
        <span className="text-lg">{item.type}</span>
        <span className="text-[40px] font-bold whitespace-nowrap">
          {item.price} <span className="text-2xl">Руб/Месяц</span>
        </span>
        <ul>
          {item.options.map((option) => (
            <li className="flex items-center gap-2 ">
              <IoMdCheckmark />
              <p>{option}</p>
            </li>
          ))}
        </ul>
      </FlexColumn>
      <Button variant="default" size="sm">
        {item.id === 1 ? "Приступить сейчас" : "Перейти на Премиум"}
      </Button>
    </SectionCard>
  );
};

export default HomePagePlansItem;
