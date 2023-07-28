import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const FlexRow: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-row flex-wrap lg:flex-nowrap", className)}>
      {children}
    </div>
  );
};

export default FlexRow;
