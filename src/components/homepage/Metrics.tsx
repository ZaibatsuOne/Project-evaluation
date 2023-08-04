import Container from "@/components/Layout/Container";
import GridCol from "@/components/Layout/Grid/GridCol";
import HomePageMetricsItem from "./blocks/MetricsBlock";
import rocketUiIcon from "../../../public/ui/Rocket.png";
import trophyUiIcon from "../../../public/ui/Trophy.png";
import hourglassUiIcon from "../../../public/ui/Hourglass Done.png";

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
