import FlexColumn from "../Layout/Flex/FlexColumn";
import SectionCard from "../UI/Section/SectionCard";
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
        <span className="text-[40px] font-bold">{item.price} Руб/Месяц</span>
        <ul>
          {item.options.map((option) => (
            <li className="flex items-center gap-2">
              <IoMdCheckmark />
              <p>{option}</p>
            </li>
          ))}
        </ul>
      </FlexColumn>
      <button className="defaultBtn">
        {item.id === 1 ? "Приступить сейчас" : "Перейти на Премиум"}
      </button>
    </SectionCard>
  );
};

export default HomePagePlansItem;
