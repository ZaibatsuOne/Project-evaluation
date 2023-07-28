import { Dispatch, FC, SetStateAction } from "react";
import FlexRow from "../Layout/Flex/FlexRow";

type Props = {
  stateForm: boolean;
  setStateForm: Dispatch<SetStateAction<boolean>>;
};
const AuthCheckAccount: FC<Props> = ({ stateForm, setStateForm }) => {
  return (
    <FlexRow className="gap-2 text-lg items-center justify-center">
      <span>{stateForm ? "Уже есть аккаунт ?" : "Нет аккаунта ?"}</span>
      <button
        className=" text-blue-400"
        onClick={(): void => setStateForm(!stateForm)}
      >
        {stateForm ? "Войти" : "Зарегистрироваться"}
      </button>
    </FlexRow>
  );
};

export default AuthCheckAccount;
