"use client";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
interface itemProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const HomePageMetricsItem: FC<{ item: itemProps }> = ({ item }) => {
  return (
    <div className="relative">
      <motion.article
        whileHover={{ scale: 1.05 }}
        className="relative card flex-col items-center justify-center gap-5 select-none shadow-xl"
      >
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
      </motion.article>
      <div className="absolute w-full h-full -z-10 top-0 bg-systemDarkGrey blur-lg opacity-10" />
    </div>
  );
};

export default HomePageMetricsItem;
