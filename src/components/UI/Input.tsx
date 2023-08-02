import { FC } from "react";

interface Props {
  type: string;
  placeholder: string;
  register: object;
  errorMessage: any;
}

const Input: FC<Props> = ({ type, placeholder, register, errorMessage }) => {
  return (
    <div>
      <label className="text-lg">{placeholder}</label>
      <input {...register} type={type} />
      <p className="text-red-500 pl-5">{errorMessage}</p>
    </div>
  );
};

export default Input;
