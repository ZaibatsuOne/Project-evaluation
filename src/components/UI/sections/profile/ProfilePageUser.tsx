import * as yup from "yup";
import DynamicForm from "@/components/Form/DynamicForm";
import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC } from "react";
import { profileUserFields as fields } from "@/data/form.data";

const ProfilePageUser: FC = () => {
  const schema = yup.object({
    email: yup.string(),
    firstName: yup.string(),
    secondName: yup.string(),
  });
  return (
    <section>
      <FlexColumn className="gap-10 w-1/2">
        <h2>Профиль</h2>
        <DynamicForm fields={fields} schema={schema} />
      </FlexColumn>
    </section>
  );
};

export default ProfilePageUser;
