import FlexColumn from "../Layout/Flex/FlexColumn";
import Input from "../UI/Input";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  fields: any;
  schema: any;
  submitForm: any;
}
const DynamicForm: FC<Props> = ({ fields, schema, submitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
      <FlexColumn className="gap-5">
        {fields.map((field: any) => (
          <Input
            key={field.placeholder}
            register={{ ...register(field.name) }}
            placeholder={field.placeholder}
            errorMessage={errors[field.name]?.message}
            type={field.type}
          />
        ))}
        <button className="blueBtn">Войти</button>
      </FlexColumn>
    </form>
  );
};

export default DynamicForm;
