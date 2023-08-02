import { SignUp } from "@clerk/nextjs";
const page = () => {
  return (
    <section className="flex justify-center items-center w-full h-full">
      <SignUp />
    </section>
  );
};

export default page;
