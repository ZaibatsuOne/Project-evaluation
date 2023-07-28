import Image from "next/image";
import Container from "../Layout/Container";
import GridCol from "../Layout/Grid/GridCol";
// import { homepageMetrics } from "@/data/data";
import trophyUiIcon from "../../../public/ui/Trophy.png";
import rocketUiIcon from "../../../public/ui/Rocket.png";
import hourglassUiIcon from "../../../public/ui/Hourglass Done.png";
import HomePageMetricsItem from "./HomePageMetricsItem";

const HomePageMetrics = () => {
  const homepageMetrics = [
    {
      icon: rocketUiIcon,
      title: "1000+",
      subtitle: "Проектов оценнено",
    },
    {
      icon: trophyUiIcon,
      title: "500+",
      subtitle: "Счастливых клиентов",
    },
    {
      icon: hourglassUiIcon,
      title: "24/7",
      subtitle: "Доступность поддержки",
    },
  ];

  return (
    <Container>
      <GridCol className="grid-cols-1 lg:grid-cols-3 gap-20">
        {homepageMetrics.map((item) => (
          <HomePageMetricsItem item={item} />
        ))}
      </GridCol>
    </Container>
  );
};

export default HomePageMetrics;
