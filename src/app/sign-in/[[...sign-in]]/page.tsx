import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <section className="flex justify-center items-center">
      <SignIn />
    </section>
  );
};

export default page;
