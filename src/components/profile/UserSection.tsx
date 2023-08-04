import FlexColumn from "@/components/Layout/Flex/FlexColumn";
import Subtitle from "../UI/Subtitle";
import { FC } from "react";
import { User } from "lucide-react";
import { UserProfile } from "@clerk/nextjs";

const ProfilePageUser: FC = () => {
  return (
    <section>
      <FlexColumn className="gap-10 pl-2">
        <Subtitle>
          <User />
          Профиль
        </Subtitle>
        <UserProfile />
      </FlexColumn>
    </section>
  );
};

export default ProfilePageUser;
