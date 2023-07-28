"use client";
import AuthCheckAccount from "@/components/Auth/AuthCheckAccount";
import AuthForm from "@/components/Form/AuthForm";
import RegisterForm from "@/components/Form/RegisterForm";
import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC, useState } from "react";

const page: FC = () => {
  const [stateForm, setStateForm] = useState(false);
  return (
    <Container>
      <FlexColumn className="gap-6">
        <h1 className="text-6xl font-black text-center">Добро пожаловать</h1>
        {stateForm ? <RegisterForm /> : <AuthForm />}
        <button className="flex bg-systemDarkGrey py-5 text-systemGrey4 rounded-3xl items-center justify-center">
          {stateForm ? "Зарегистрироваться" : "Войти"}
        </button>
        <AuthCheckAccount setStateForm={setStateForm} stateForm={stateForm} />
      </FlexColumn>
    </Container>
  );
};

export default page;
