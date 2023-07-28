import * as yup from "yup";
import DynamicForm from "./DynamicForm";
import { authFormInputs as fields } from "@/data/form.data";
import { FC } from "react";

const AuthForm: FC = () => {
  const schema = yup
    .object({
      login: yup.string().required("Поле Логин обязательно"),
      password: yup.string().required("Поле Пароль обязательно"),
    })
    .required();

  return <DynamicForm fields={fields} schema={schema} />;
};

export default AuthForm;
