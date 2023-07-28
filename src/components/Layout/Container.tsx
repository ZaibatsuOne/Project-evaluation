import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative max-w-[350px] lg:max-w-[1297px] ml-auto mr-auto">
      {children}
    </div>
  );
};

export default Container;
