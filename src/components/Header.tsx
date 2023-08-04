// "use client";
import FlexRow from "./Layout/Flex/FlexRow";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const { userId } = auth();

  return (
    <header className="fixed z-20 left-5 right-5 xl:right-20 xl:left-20 top-[60px] flex items-center justify-center xl:justify-between py-5 px-5 xl:px-10 rounded-[50px] backdrop-brightness-75 backdrop-blur-xl">
      <Link href="/" className="hidden xl:flex items-center gap-5">
        <Image
          width={35}
          height={35}
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
          <UserButton afterSignOutUrl="/" userProfileMode="modal" />
        </FlexRow>
      ) : (
        <Link
          href="/sign-in"
          // onClick={(): void => setVisibleModal(true)}
          className="blueBtn"
        >
          Войти
        </Link>
      )}
    </header>
  );
}
