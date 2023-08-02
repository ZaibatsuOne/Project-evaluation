import { FC } from "react";

interface Props {
  item: string;
}
const ProfilePageProjectItem: FC<Props> = ({ item }) => {
  return (
    <li className="flex justify-between bg-systemGrey2 rounded-full py-2 px-5">
      <span>{item}</span>
      <span className="text-systemRed">Удалить</span>
    </li>
  );
};

export default ProfilePageProjectItem;
