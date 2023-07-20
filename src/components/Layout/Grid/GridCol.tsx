import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const GridCol: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return <div className={cn(`grid items-center`, className)}>{children}</div>;
};

export default GridCol;
