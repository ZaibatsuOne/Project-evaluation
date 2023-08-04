import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC } from "react";
import { PiTrashLight } from "react-icons/pi";
import { Grip } from "lucide-react";

interface Props {
  index: number;
  item: string;
}
const ProfilePageProjectBlock: FC<Props> = ({ index, item }) => {
  return (
    <article className="h-[300px] bg-systemGrey5 p-8 rounded-3xl">
      <FlexColumn className="h-full">
        <div className="flex-grow">
          <span className="flex items-center gap-2 text-3xl text-systemDarkGrey overflow-hidden text-ellipsis line-clamp-5">
            <Grip />
            {item}
          </span>
        </div>
        <span className="flex gap-2 items-center text-systemRed text-sm text-end">
          Удалить <PiTrashLight />
        </span>
      </FlexColumn>
    </article>
  );
};

export default ProfilePageProjectBlock;
