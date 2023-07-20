import { FC, PropsWithChildren } from "react";
import cn from "clsx";

const SectionTitle: FC<
  PropsWithChildren<{ size?: string; className?: string }>
> = ({ children, size = "80px", className }) => {
  return (
    <h2
      className={cn(`font-extrabold leading-[80px] text-center`, className)}
      style={{ fontSize: size }}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
