import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import { FC } from "react";
import { UserProfile } from "@clerk/nextjs";

const ProfilePageUser: FC = () => {
  return (
    <section>
      <FlexColumn className="gap-10 w-1/2">
        <h2>Профиль</h2>
        <UserProfile />
      </FlexColumn>
    </section>
  );
};

export default ProfilePageUser;
