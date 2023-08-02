import FlexRow from "@/components/Layout/Flex/FlexRow";
import { FC } from "react";

interface Props {
  item: string;
  index: number;
}
const ProfilePageProjectItem: FC<Props> = ({ item, index }) => {
  return (
    <li className="flex justify-between bg-systemGrey2 rounded-full py-2 px-5">
      <FlexRow className="gap-2">
        <span>{index + 1}.</span>
        <span className="max-w-[400px] overflow-hidden whitespace-nowrap text-ellipsis">
          {item}
        </span>
      </FlexRow>
      <span className="text-systemRed">Удалить</span>
    </li>
  );
};

export default ProfilePageProjectItem;
