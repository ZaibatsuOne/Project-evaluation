import DynamicForm from "./DynamicForm";
import { FC } from "react";

const RegisterForm: FC = () => {
  const fields = [
    {
      placeholder: "Почта",
      name: "email",
    },
    {
      placeholder: "Логин",
      name: "login",
    },
    {
      placeholder: "Пароль",
      name: "password",
    },
    {
      placeholder: "Подтвердите пароль",
      name: "submitPassword",
    },
  ];
  return <DynamicForm fields={fields} />;
};

export default RegisterForm;
