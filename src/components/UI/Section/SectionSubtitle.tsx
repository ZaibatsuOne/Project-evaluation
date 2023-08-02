import { FC, PropsWithChildren } from "react";

const SectionSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return <h4 className="text-2xl text-systemBlack ">{children}</h4>;
};

export default SectionSubtitle;
