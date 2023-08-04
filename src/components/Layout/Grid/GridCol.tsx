import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const GridCol: FC<
  PropsWithChildren<{
    className?: string;
    cols: number;
  }>
> = ({ children, className, cols }) => {
  return (
    <div
      className={cn(`grid items-center`, className, {
        "grid-cols-4": cols === 4,
      })}
    >
      {children}
    </div>
  );
};

export default GridCol;
