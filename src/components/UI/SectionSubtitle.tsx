import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const SectionSubtitle: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <h3 className={cn("text-[40px] font-extrabold leading-[40px]", className)}>
      {children}
    </h3>
  );
};

export default SectionSubtitle;
