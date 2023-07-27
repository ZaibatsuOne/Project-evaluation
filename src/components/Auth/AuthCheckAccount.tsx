import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  stateForm: boolean;
  setStateForm: Dispatch<SetStateAction<boolean>>;
};
const AuthCheckAccount: FC<Props> = ({ stateForm, setStateForm }) => {
  return (
    <div>
      <span>{stateForm ? "Уже есть аккаунт ?" : "Нет аккаунта ?"}</span>
      <button
        className=" text-blue-400"
        onClick={(): void => setStateForm(!stateForm)}
      >
        {stateForm ? "Зарегистрироваться" : "Войти"}
      </button>
    </div>
  );
};

export default AuthCheckAccount;
