"use client";

import Link from "next/link";
import { FaFire, FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

export default function HomeNavbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 py-3 px-20 text-2xl bg-[#e877d9] border-[#f493e7] text-shadow-black rounded-b-md">
      <Link href="/settings">
        <FaCircleUser />
      </Link>
      <Link href="/home" className="text-[27px]">
        <FaHome />
      </Link>
      <Link href="/streak">
        <FaFire />
      </Link>
    </nav>
  );
}
