import FlexRow from "../Layout/Flex/FlexRow";
import HomePageReviewItem from "./HomePageReviewItem";
import { FC } from "react";
import { homepageReview } from "@/data/data";

const HomePageRewiew: FC = () => {
  return (
    <FlexRow className="gap-10">
      {homepageReview.map((item) => (
        <HomePageReviewItem key={item.id} item={item} />
      ))}
    </FlexRow>
  );
};

export default HomePageRewiew;
