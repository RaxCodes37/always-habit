"use client";

import { FaPlus } from "react-icons/fa6";
import HomeNavbar from "./home-nav-bar";
import DisplayHabits from "./display-habits";

export default function HomePageClient() {
  return (
    <div className="text-center h-screen w-150 border border-[#f493e7] bg-[#ab549f]">
      <HomeNavbar />

      <h2 className="mt-3 text-xl font-semibold">
        Your <span className="underline">Habits</span>
      </h2>

      <DisplayHabits />

      <button className="fixed left-[70%] top-[80%] border-2 border-[#f493e7] rounded-md bg-[#e077d2] duration-400 hover:bg-[#ac53a0] text-3xl py-2 px-3">
        <FaPlus />
      </button>
    </div>
  );
}
