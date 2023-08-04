import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import SectionBlock from "@/components/UI/Section/SectionBlock";
import { FC } from "react";

interface HeaderBlock {
  icon: any;
  title: string;
  count: number;
}
interface Props {
  headerBlock: HeaderBlock;
}
const HeaderBlock: FC<Props> = ({ headerBlock }) => {
  const { title, count } = headerBlock;
  return (
    <SectionBlock className="w-full h-[150px]">
      <FlexColumn className="w-full justify-between">
        <FlexRow className="items-center justify-between w-full">
          <p className="text-2xl font-bold">{title}</p>
          <headerBlock.icon />
        </FlexRow>
        <span className="text-3xl font-black">{count}</span>
      </FlexColumn>
    </SectionBlock>
  );
};

export default HeaderBlock;
