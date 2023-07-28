import { homepageAbout } from "@/data/data";
import FlexColumn from "../Layout/Flex/FlexColumn";
import HomePageAboutItem from "./HomePageAboutItem";
import { FC } from "react";

const HomePageAbout: FC = () => {
  return (
    <FlexColumn className="gap-20">
      {homepageAbout.map((item) => (
        <HomePageAboutItem item={item} />
      ))}
    </FlexColumn>
  );
};

export default HomePageAbout;
