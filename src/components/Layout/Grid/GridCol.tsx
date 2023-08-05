import cn from "clsx";
import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
  cols: number;
}
const GridCol: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  cols,
}) => {
  return (
    <div
      className={cn(`grid`, className, {
        "grid-cols-4": cols === 4,
      })}
    >
      {children}
    </div>
  );
};

export default GridCol;
