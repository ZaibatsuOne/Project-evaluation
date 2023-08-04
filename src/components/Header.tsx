// "use client";
import FlexRow from "./Layout/Flex/FlexRow";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/UI/Button";
import { LayoutDashboard } from "lucide-react";

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
          <Button variant="grey" size="sm" href="/dashboard" className="gap-2">
            <LayoutDashboard />
            Панель
          </Button>
          <UserButton afterSignOutUrl="/" userProfileMode="modal" />
        </FlexRow>
      ) : (
        <Button variant="blue" size="sm" href="/sign-in">
          Войти
        </Button>
      )}
    </header>
  );
}
