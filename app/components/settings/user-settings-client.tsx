"use client";

import { signOutAction } from "@/app/api/auth";

export default function UserSettingsClient() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-30 w-70 items-center border-2 rounded-md bg-[#e877d9] border-[#f493e7] text-shadow-black pb-2 gap-2">
        <h1 className="text-2xl font-bold bg-[#c762b9] p-2 w-full text-center rounded-md">
          Settings
        </h1>

        <button
          onClick={signOutAction}
          className="flex justify-center border border-[#ff5252] rounded-md bg-[#cd4d4d] duration-400 hover:bg-[#9c3c3c] p-2"
        >
          Sign-out
        </button>
      </div>
    </div>
  );
}
