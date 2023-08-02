import { FC, PropsWithChildren } from "react";

const SectionCard: FC<PropsWithChildren<{ onClick?: () => void }>> = ({
  children,
  onClick,
}) => {
  return (
    <section
      className="min-w-[400px] w-full h-[480px] lg:mx-0 bg-[#0D0D0D] cursor-pointer rounded-2xl p-10 flex flex-col justify-between text-systemGrey5"
      onClick={onClick}
    >
      {children}
    </section>
  );
};

export default SectionCard;
