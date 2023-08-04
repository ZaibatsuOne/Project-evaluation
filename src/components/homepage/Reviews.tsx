import FlexRow from "@/components/Layout/Flex/FlexRow";
import HomePageReviewItem from "./blocks/ReviewsBlock";
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
