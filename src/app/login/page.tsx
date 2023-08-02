"use client";
import * as yup from "yup";
import DynamicForm from "@/components/Form/DynamicForm";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC, useState } from "react";
import { registerFormInputs as fields } from "@/data/form.data";
import { useSignUp } from "@clerk/nextjs";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Form {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
}
const page: FC = () => {
  const schema = yup.object({
    email: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
  });

  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const router = useRouter();

  const [pendingVerification, setPendingVerification] = useState(false);

  const submitForm: SubmitHandler<Form> = async (data, event) => {
    event?.preventDefault();
    const { emailAddress, firstName, lastName, password } = data;

    if (!isLoaded) return;

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
      console.log("123");
    } catch (error) {
      console.log(error);
    }
  };

  const onPressVerify = async (event: any) => {
    event?.preventDefault();
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
      }
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border p-5 rounded w-[500px]">
      <FlexColumn className="gap-6">
        {!pendingVerification && (
          <div>
            <DynamicForm
              fields={fields}
              schema={schema}
              submitForm={submitForm}
            />
          </div>
        )}
        {pendingVerification && (
          <div>
            <form className="space-y-4 md:space-y-6">
              <input
                value={code}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Verification Code..."
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                type="submit"
                onClick={onPressVerify}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Verify Email
              </button>
            </form>
          </div>
        )}
      </FlexColumn>
    </div>
  );
};

export default page;
