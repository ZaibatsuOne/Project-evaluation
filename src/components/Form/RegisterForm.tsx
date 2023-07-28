import DynamicForm from "./DynamicForm";
import { FC } from "react";

const RegisterForm: FC = () => {
  const fields = [
    {
      placeholder: "Почта",
      name: "email",
      type: "text",
    },
    {
      placeholder: "Логин",
      name: "login",
      type: "text",
    },
    {
      placeholder: "Пароль",
      name: "password",
      type: "password",
    },
    {
      placeholder: "Подтвердите пароль",
      name: "submitPassword",
      type: "password",
    },
  ];
  return <DynamicForm fields={fields} />;
};

export default RegisterForm;
