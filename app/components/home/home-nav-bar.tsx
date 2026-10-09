"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/public/always-logo-transparent.png";

export default function HomeNavbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b-2 py-3 px-20 text-2xl bg-[#e877d9] border-[#f493e7] text-shadow-black rounded-b-md">
      <Image
        src={Logo}
        width={200}
        height={200}
        alt="App Logo"
        className="fixed left-[5%] top-[2%]"
        onClick={() => router.push("/home")}
      ></Image>
      <Link href="/settings">
        <FaCircleUser />
      </Link>
      <Link href="/home" className="text-[27px]">
        <FaHome />
      </Link>
      <Link href="/streak">
        <ImFire />
      </Link>
    </nav>
  );
}
