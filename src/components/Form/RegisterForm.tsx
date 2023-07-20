import { FC } from "react";
import FlexColumn from "../Layout/Flex/FlexColumn";

const RegisterForm: FC = () => {
  return (
    <form className="flex w-full">
      <FlexColumn className="gap-7 flex w-full ">
        <input
          className="w-full rounded-2xl h-16 text-black outline-none text-2xl p-5 font-bold"
          placeholder="Почта"
        />
        <input
          className="w-full rounded-2xl h-16 text-black outline-none text-2xl p-5 font-bold"
          placeholder="Логин"
        />
        <input
          className="w-full rounded-2xl h-16 text-black outline-none text-2xl p-5 font-bold"
          placeholder="Пароль"
        />
        <input
          className="w-full rounded-2xl h-16 text-black outline-none text-2xl p-5 font-bold"
          placeholder="Подтвердите пароль"
        />
        <button className="mx-auto rounded-2xl h-16 bg-white text-black outline-none text-2xl p-3 px-20 font-bold">
          Зарегистрироваться
        </button>
      </FlexColumn>
    </form>
  );
};

export default RegisterForm;
