"use client";
import { FC, PropsWithChildren } from "react";
import cn from "clsx";
import { motion } from "framer-motion";
const FlexColumn: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={cn("flex flex-col", className)}
    >
      {children}
    </motion.div>
  );
};

export default FlexColumn;
