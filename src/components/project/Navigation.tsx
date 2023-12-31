import { FC } from "react";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import { AreaChart, Package, Plus } from "lucide-react";
import { Button } from "@/components/UI/Button";
const Navigation: FC = () => {
  const navList = [
    {
      icon: Package,
      title: "Фазы",
    },
    {
      icon: AreaChart,
      title: "Графики",
    },
  ];
  return (
    <FlexRow className="justify-between items-center">
      <FlexRow className="gap-5">
        {navList.map((nav) => (
          <Button size="sm">
            <nav.icon />
            {nav.title}
          </Button>
        ))}
      </FlexRow>
      <Button variant="success" size="sm" className="gap-2 items-center">
        <Plus />
        Добавить фазу
      </Button>
    </FlexRow>
  );
};

export default Navigation;
