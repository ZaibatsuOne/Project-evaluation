import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import Head from "next/head";
import HomePageAbout from "@/components/UI/sections/homepage/HomePageAbout";
import HomePageBrands from "@/components/UI/sections/homepage/HomePageBrands";
import HomePageFooter from "@/components/UI/sections/homepage/HomePageFooter";
import HomePageHeader from "@/components/UI/sections/homepage/HomePageHeader";
import HomePageMetrics from "@/components/UI/sections/homepage/HomePageMetrics";
import HomePagePlans from "@/components/UI/sections/homepage/HomePagePlans";
import HomePageRewiew from "@/components/UI/sections/homepage/HomePageRewiew";

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
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
    </>
  );
}
