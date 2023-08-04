import FlexRow from "@/components/Layout/Flex/FlexRow";
import HomePagePlansItem from "./blocks/HomePagePlansItem";
import { FC } from "react";
import { homepagePlans } from "@/data/data";

const HomePagePlans: FC = () => {
  return (
    <section className="pt-[100px]">
      <FlexRow className="gap-14 items-center">
        <h2 className="text-systemGrey4 text-5xl xl:text-6xl font-extrabold w-1/2 mx-4 xl:mx-0">
          Оцените возможности подписки:{" "}
        </h2>
        <FlexRow className="gap-8">
          {homepagePlans.map((item) => (
            <HomePagePlansItem item={item} />
          ))}
        </FlexRow>
      </FlexRow>
    </section>
  );
};

export default HomePagePlans;
