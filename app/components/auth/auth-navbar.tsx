import Link from "next/link";

export default function AuthNavbar() {
  return (
    <nav className="flex justify-center gap-10 bg-[#e877d9] border-2 border-[#f493e7] py-5 text-xl font-bold text-shadow-black text-shadow-xs rounded-b-md">
      <Link href="/sign-in" className="hover:underline">Sign-In</Link>
      <Link href="/sign-up" className="hover:underline">Sign-Up</Link>
    </nav>
  )
}
