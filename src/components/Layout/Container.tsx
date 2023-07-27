import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="relative max-w-[1297px] mx-auto">{children}</div>;
};

export default Container;
