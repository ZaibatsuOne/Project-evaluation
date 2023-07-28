import Head from "next/head";
import Header from "@/components/Header";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import HomePageHeader from "@/components/HomePage/HomePageHeader";
import Container from "@/components/Layout/Container";
import HomePageBrands from "@/components/HomePage/HomePageBrands";
import HomePageMetrics from "@/components/HomePage/HomePageMetrics";
import HomePageAbout from "@/components/HomePage/HomePageAbout";
import HomePagePlans from "@/components/HomePage/HomePagePlans";
import HomePageRewiew from "@/components/HomePage/HomePageRewiew";
import HomePageFooter from "@/components/HomePage/HomePageFooter";

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
