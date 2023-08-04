import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const SectionBlock: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <section
      className={cn("h-[300px] bg-systemGrey5 p-8 rounded-3xl", className)}
    >
      {children}
    </section>
  );
};

export default SectionBlock;
