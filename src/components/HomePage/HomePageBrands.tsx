import framerIcon from "../../../public/brands-logo/Framer Logotype.svg";
import iCloudIcon from "../../../public/brands-logo/iCloud Logotype.svg";
import marketoIcon from "../../../public/brands-logo/Marketo Logotype.svg";
import notionIcon from "../../../public/brands-logo/Notion Logotype.svg";
import googleTagIcon from "../../../public/brands-logo/Google Tag Manager Logotype.svg";
import microsoftAzureIcon from "../../../public/brands-logo/Microsoft Azure Logotype.svg";
import yandexIcon from "../../../public/brands-logo/Yandex Logotype.svg";
import BrandLogo from "../UI/BrandLogo";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const HomePageBrands = () => {
  const listIcon: string[] = [
    framerIcon,
    googleTagIcon,
    microsoftAzureIcon,
    yandexIcon,
    iCloudIcon,
    marketoIcon,
    notionIcon,
  ];
  return (
    <section>
      <Marquee className="flex items-center">
        {listIcon.map((icon) => (
          <BrandLogo src={icon} alt={icon} />
        ))}
      </Marquee>
    </section>
  );
};

export default HomePageBrands;
