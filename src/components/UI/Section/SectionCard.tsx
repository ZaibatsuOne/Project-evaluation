import { FC, ReactNode } from "react";

const SectionCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="w-full h-[480px] bg-[#0D0D0D] rounded-2xl p-10 flex flex-col justify-between text-systemGrey5">
      {children}
    </section>
  );
};

export default SectionCard;
