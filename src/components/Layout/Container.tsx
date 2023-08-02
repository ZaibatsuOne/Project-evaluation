import { FC, PropsWithChildren, ReactNode } from "react";
import cn from "clsx";
const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("relative max-w-[1497px] ml-auto mr-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
