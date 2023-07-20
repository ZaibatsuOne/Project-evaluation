import { FC } from "react";
import FlexColumn from "../Layout/Flex/FlexColumn";
import SectionSubtitle from "../UI/SectionSubtitle";
import SectionDescription from "../UI/SectionDescription";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePageChooseItem: FC<{ item: any; openTab: number }> = ({
  item,
  openTab,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={item.id === openTab ? "flex" : "hidden"}
    >
      <FlexColumn className="gap-10">
        <FlexColumn className="gap-5 text-center w-1/2 mx-auto">
          <SectionSubtitle className="whitespace-nowrap">
            {item.title}
          </SectionSubtitle>
          <SectionDescription>{item.description}</SectionDescription>
        </FlexColumn>
        <div className="relative ">
          <Image
            src={item.imgSrc}
            alt={item.title}
            height={250}
            width={600}
            quality={100}
            className="cursor-pointer object-cover h-[250px] w-full rounded-lg "
          />
          <div className="absolute -z-[1] -inset-0.5 bg-gradient-to-r from-[#ff00dd] animate-tilt   to-[#6c5ce7] rounded-lg blur opacity-30 group-hover:opacity-100 transistion duration-200"></div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-bl from-purple-950 via-blue-500 to-transparent mix-blend-multiply opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      </FlexColumn>
    </motion.article>
  );
};

export default HomePageChooseItem;
