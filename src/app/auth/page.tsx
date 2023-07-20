"use client";
import AuthCheckAccount from "@/components/Auth/AuthCheckAccount";
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
          <AuthCheckAccount stateForm={stateForm} setStateForm={setStateForm}/>
        </SectionDescription>
      </FlexColumn>
    </Container>
  );
};

export default page;
