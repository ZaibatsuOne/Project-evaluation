import HomePage from "@/components/screens/HomePage";
import Head from "next/head";

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
      <main>
        <HomePage />
      </main>
    </>
  );
}
