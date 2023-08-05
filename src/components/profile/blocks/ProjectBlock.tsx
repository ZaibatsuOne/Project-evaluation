import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import SectionBlock from "@/components/UI/Section/SectionBlock";
import { FC } from "react";
import { Grip } from "lucide-react";
import { PiTrashLight } from "react-icons/pi";

interface ItemProps {
  id: number;
  name: string;
}
interface Props {
  item: ItemProps;
}
const ProfilePageProjectBlock: FC<Props> = ({ item }) => {
  return (
    <SectionBlock>
      <FlexColumn className="h-full justify-between">
        <div className="flex-grow">
          <span className="flex items-center gap-2 text-3xl text-systemDarkGrey overflow-hidden text-ellipsis line-clamp-5">
            <Grip />
            {item.name}
          </span>
        </div>
        <span className="flex gap-2 items-center text-systemRed text-sm text-end">
          Удалить <PiTrashLight />
        </span>
      </FlexColumn>
    </SectionBlock>
  );
};

export default ProfilePageProjectBlock;
