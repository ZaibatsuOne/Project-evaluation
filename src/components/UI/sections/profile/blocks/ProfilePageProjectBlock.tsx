import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC } from "react";
import { PiTrashLight } from "react-icons/pi";

interface Props {
  index: number;
  item: string;
}
const ProfilePageProjectBlock: FC<Props> = ({ index, item }) => {
  return (
    <article className="h-[300px] bg-systemGrey5 p-8 rounded-3xl">
      <FlexColumn className="h-full">
        <div className="flex-grow">
          <span className="text-3xl text-systemDarkGrey overflow-hidden text-ellipsis line-clamp-5">
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
