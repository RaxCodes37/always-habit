import Link from "next/link";
import { signUpAction } from "../api/auth";
import AuthNavbar from "../components/auth/auth-navbar";

export default function SignUpPage() {
  return (
    <div>
      <AuthNavbar />
      <div className="flex justify-center">
        <form
          action={signUpAction}
          className="flex flex-col items-center text-center gap-2 mt-30 border-2 border-[#f493e7] rounded-md bg-[#ce6ec1] w-70 pt-2 pb-3 px-2"
        >
          <h1 className="text-xl font-semibold">Sign Up</h1>

          <input
            type="text"
            name="name"
            required
            className="border-2 border-[#f493e7] rounded-md bg-[#e077d2] py-1 px-2 mt-2"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            required
            className="border-2 border-[#f493e7] rounded-md bg-[#e077d2] py-1 px-2"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            required
            className="border-2 border-[#f493e7] rounded-md bg-[#e077d2] py-1 px-2"
            placeholder="Password"
          />

          <button type="submit" className="mt-2 border-2 border-[#f493e7] rounded-md bg-[#e077d2] py-1 px-2">
            Sign Up
          </button>

          <span> Or </span>

          <Link href="/sign-in" className="text-[#fea0f2] hover:underline">
            <span>If you already have an account click here</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
