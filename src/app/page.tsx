import Head from "next/head";
import Header from "@/components/Header";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import HomePageHeader from "@/components/HomePage/HomePageHeader";
import Container from "@/components/Layout/Container";
import HomePageBrands from "@/components/HomePage/HomePageBrands";

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
      </FlexColumn>
    </>
  );
}
