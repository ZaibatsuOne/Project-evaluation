import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const FlexRow: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <div className={cn("flex flex-row", className)}>{children}</div>;
};

export default FlexRow;
