const circleList = [
  {
    id: 1,
    size: "120px",
    position: "58px",
    opacity: 60,
  },
  {
    id: 2,
    size: "180px",
    position: "28px",
    opacity: 60,
  },
  {
    id: 3,
    size: "235px",
    position: "0px",
    opacity: 25,
  },
];

export default function SectionCircle() {
  return (
    <div className="relative flex ">
      {circleList.map((item) => (
        <div
          key={item.id}
          className={`absolute rounded-full ${
            item.id === 1
              ? "left-[58px]"
              : item.id === 2
              ? "left-[28px]"
              : "left-0"
          } bg-[#4431BA] w-[${item.size}] h-[${item.size}] top-[${
            item.position
          }] opacity-${item.opacity}`}
        />
      ))}
    </div>
  );
}
