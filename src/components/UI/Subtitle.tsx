import { PropsWithChildren, FC } from "react";

type Props = {};

const Subtitle: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <h2 className="flex gap-2 items-center">{children}</h2>;
};

export default Subtitle;
