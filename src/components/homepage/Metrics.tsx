"use client";
import Container from "@/components/Layout/Container";
import GridCol from "@/components/Layout/Grid/GridCol";
import HomePageMetricsItem from "./blocks/MetricsBlock";
import { Icons } from "../UI/Icons";

const HomePageMetrics = () => {
  const homepageMetrics = [
    {
      icon: Icons.rocketUi,
      title: "1000+",
      subtitle: "Проектов оценнено",
    },
    {
      icon: Icons.trophyUi,
      title: "500+",
      subtitle: "Счастливых клиентов",
    },
    {
      icon: Icons.hourGlass,
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
