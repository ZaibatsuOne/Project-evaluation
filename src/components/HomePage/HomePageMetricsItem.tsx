import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface itemProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const HomePageMetricsItem: FC<{ item: itemProps }> = ({ item }) => {
  return (
    <article className="card flex-col items-center justify-center gap-5">
      <div>
        <Image
          src={item.icon}
          width={100}
          quality={100}
          height={100}
          alt={item.subtitle}
          objectFit="none"
        />
      </div>
      <p className="text-5xl font-bold">{item.title}</p>
      <p className="font-bold">{item.subtitle}</p>
    </article>
  );
};

export default HomePageMetricsItem;
