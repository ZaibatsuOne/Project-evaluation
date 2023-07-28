import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import FlexRow from "@/components/Layout/Flex/FlexRow";
import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface Props {
  visibleModal: boolean;
  setVisibleModal: Dispatch<SetStateAction<boolean>>;
}

const ModalDark: FC<PropsWithChildren<Props>> = ({
  children,
  visibleModal,
  setVisibleModal,
}) => {
  const handleClose = (): void => {
    setVisibleModal(false);
  };
  return (
    <>
      {visibleModal && (
        <div className="modal">
          <FlexColumn className="modal-content">
            <header>
              <FlexRow className="justify-between text-2xl font-medium">
                <span>Отзыв</span>
                <span onClick={handleClose} className="cursor-pointer">
                  <VscChromeClose />
                </span>
              </FlexRow>
            </header>
            <div className="text-white">{children}</div>
          </FlexColumn>
        </div>
      )}
    </>
  );
};

export default ModalDark;
