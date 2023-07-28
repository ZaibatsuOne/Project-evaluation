import { FC } from "react";
import FlexRow from "../Layout/Flex/FlexRow";
import HomePageReviewItem from "./HomePageReviewItem";
const HomePageRewiew: FC = () => {
  return (
    <FlexRow className="gap-10">
      <HomePageReviewItem />
      <HomePageReviewItem />
      <HomePageReviewItem />
    </FlexRow>
  );
};

export default HomePageRewiew;
