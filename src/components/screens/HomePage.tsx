import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import HomePageAbout from "@/components/homepage/AboutUs";
import HomePageBrands from "@/components/homepage/BrandsLine";
import HomePageFooter from "@/components/homepage/Footer";
import HomePageHeader from "@/components/homepage/HeaderSlug";
import HomePageMetrics from "@/components/homepage/Metrics";
import HomePagePlans from "@/components/homepage/Plans";
import HomePageRewiew from "@/components/homepage/Reviews";

const HomePage = () => {
  return (
    <FlexColumn className="gap-52">
      <HomePageHeader />
      <HomePageBrands />
      <Container>
        <FlexColumn className="gap-52">
          <HomePageMetrics />
          <HomePageAbout />
        </FlexColumn>
      </Container>
      <FlexColumn className="bg-systemBlack gap-52">
        <Container>
          <FlexColumn className="gap-52">
            <HomePagePlans />
            <HomePageRewiew />
            <HomePageFooter />
          </FlexColumn>
        </Container>
      </FlexColumn>
    </FlexColumn>
  );
};

export default HomePage;
