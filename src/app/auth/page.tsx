"use client";
import AuthForm from "@/components/Form/AuthForm";
import RegisterForm from "@/components/Form/RegisterForm";
import Container from "@/components/Layout/Container";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import SectionDescription from "@/components/UI/SectionDescription";
import SectionSubtitle from "@/components/UI/SectionSubtitle";
import SectionTitle from "@/components/UI/SectionTitle";
import React, { useState } from "react";

const page = () => {
  const [stateForm, setStateForm] = useState(false);
  return (
    <Container>
      <FlexColumn className="gap-10">
        <SectionSubtitle className="text-center">
          {stateForm ? "Регистрация" : "Авторизация"}
        </SectionSubtitle>
        {stateForm ? <RegisterForm /> : <AuthForm />}
        <SectionDescription className="mx-auto">
          {stateForm ? (
            <div>
              <span>Уже есть аккаунт ? </span>
              <button
                className=" text-blue-400"
                onClick={(): void => setStateForm(!stateForm)}
              >
                Войти
              </button>
            </div>
          ) : (
            <div>
              <span>Нет аккаунта ? </span>
              <button
                className=" text-blue-400"
                onClick={(): void => setStateForm(!stateForm)}
              >
                Зарегистрируйтесь
              </button>
            </div>
          )}
        </SectionDescription>
      </FlexColumn>
    </Container>
  );
};

export default page;
