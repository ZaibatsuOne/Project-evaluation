import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import FlexRow from "./Layout/Flex/FlexRow";

export default function Header() {
  const { userId } = auth();
  return (
    <header className="fixed z-20 left-20 right-20 top-[60px] flex items-center justify-center xl:justify-between py-6 px-[60px] rounded-[50px] backdrop-brightness-75 backdrop-blur-xl shadow-2xl">
      <Link href="/" className="hidden xl:flex items-center gap-5">
        <Image
          width={50}
          height={50}
          objectFit="cover"
          src="/logo.svg"
          alt="logo"
        />
      </Link>
      {userId ? (
        <FlexRow className="gap-5 items-center">
          <Link href="/dashboard" className="greyBtn">
            Панель
          </Link>
          <UserButton afterSignOutUrl="/" />
        </FlexRow>
      ) : (
        <Link href="/login" className="blueBtn">
          Войти
        </Link>
      )}
    </header>
  );
}
