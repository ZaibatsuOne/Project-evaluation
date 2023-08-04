import { FC } from "react";
import Subtitle from "../UI/Subtitle";
import { Settings } from "lucide-react";

const ProfilePageSettings: FC = () => {
  return (
    <section>
      <Subtitle>
        <Settings /> Настройки
      </Subtitle>
    </section>
  );
};

export default ProfilePageSettings;
