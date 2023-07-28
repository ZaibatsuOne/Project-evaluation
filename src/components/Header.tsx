import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
      <Link
        href="/auth"
        className="px-9 py-4 w-full xl:w-auto text-center font-bold bg-systemBlue text-systemWhite rounded-[30px]"
      >
        Войти
      </Link>
    </header>
  );
}
