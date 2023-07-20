import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const SectionDescription: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("text-lg font-extralight", className)}>{children}</div>
  );
};

export default SectionDescription;
