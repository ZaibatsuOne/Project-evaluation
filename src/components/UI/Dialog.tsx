import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FC, PropsWithChildren } from "react";

interface Props {}

const Dialog: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.DialogTrigger>{children}</DialogPrimitive.DialogTrigger>
      <DialogPrimitive.DialogPortal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-systemBlack bg-opacity-50 backdrop-blur-sm" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 w-[600px] bg-systemBlack bg-opacity-30 h-auto -translate-x-1/2 -translate-y-1/2 ">
          123
        </DialogPrimitive.Content>
      </DialogPrimitive.DialogPortal>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
