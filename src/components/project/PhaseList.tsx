import { FC } from "react";
import { Button } from "@/components/UI/Button";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import { Box } from "lucide-react";
const PhaseList: FC = () => {
  const phaseList = [
    "Фаза 1",
    "Фаза 2",
    "Фаза 2",
    "Фаза 2",
    "Фаза 2",
    "Фаза 2",
    "Фаза 2",
  ];
  return (
    <FlexRow className="gap-3 overflow-x-auto">
      {phaseList.map((phase) => (
        <Button variant="blue" size="sm" className="whitespace-nowrap">
          <Box />
          {phase}
        </Button>
      ))}
    </FlexRow>
  );
};

export default PhaseList;
