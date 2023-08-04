import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC } from "react";
import { PiTrashLight } from "react-icons/pi";
import { Grip } from "lucide-react";
import SectionBlock from "@/components/UI/Section/SectionBlock";

interface Props {
  index: number;
  item: string;
}
const ProfilePageProjectBlock: FC<Props> = ({ index, item }) => {
  return (
    <SectionBlock>
      <FlexColumn className="h-full">
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
