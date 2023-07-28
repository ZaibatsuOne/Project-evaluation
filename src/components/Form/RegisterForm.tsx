import * as yup from "yup";
import DynamicForm from "./DynamicForm";
import { FC } from "react";
import { registerFormInputs as fields } from "@/data/form.data";

const RegisterForm: FC = () => {
  const schema = yup.object({
    login: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    submitPassword: yup.string().required(),
  });
  return <DynamicForm fields={fields} schema={schema} />;
};

export default RegisterForm;
