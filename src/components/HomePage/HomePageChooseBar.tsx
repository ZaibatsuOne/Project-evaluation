import { Dispatch, FC, SetStateAction } from "react";

export const HomePageChooseBar: FC<{
  spans: any;
  openTab: number;
  setOpenTab: Dispatch<SetStateAction<number>>;
}> = ({ spans, openTab, setOpenTab }) => {
  return (
    <div className="relative flex justify-between w-auto h-20 rounded-3xl p-2 backdrop-brightness-75">
      {spans.map((item) => (
        <button
          className={`${
            openTab === item.id ? "bg-[#33008b] " : "bg-[#230060] "
          } "flex justify-center items-center px-24 rounded-3xl`}
          key={item.id}
          onClick={(): void => setOpenTab(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
