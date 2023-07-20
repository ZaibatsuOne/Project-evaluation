import Header from "@/components/Header";
import HomePageChooseUs from "@/components/HomePage/HomePageChooseUs";
import HomePageHeader from "@/components/HomePage/HomePageHeader";
import HomePageStart from "@/components/HomePage/HomePageStart";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";

export default function Home() {
  return (
    <FlexColumn className="gap-52">
      <HomePageHeader />
      <HomePageStart />
      <HomePageChooseUs />
    </FlexColumn>
  );
}
