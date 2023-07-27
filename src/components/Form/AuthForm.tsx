import FlexColumn from "../Layout/Flex/FlexColumn";
import { FC } from "react";

const AuthForm: FC = () => {
  return (
    <form className="flex w-full">
      <FlexColumn className="gap-7 flex w-full ">
        <input
          className="w-full rounded-2xl h-16 text-black outline-none text-2xl p-5 font-bold"
          placeholder="Логин"
        />
        <input
          className="w-full rounded-2xl h-16 text-black outline-none text-2xl p-5 font-bold"
          placeholder="Пароль"
        />

        <button className="mx-auto rounded-2xl h-16 bg-white text-black outline-none text-2xl p-3 px-20 font-bold">
          Войти
        </button>
      </FlexColumn>
    </form>
  );
};

export default AuthForm;
