import Link from 'next/link';
import React from 'react'
import AuthNavbar from '../components/auth/auth-navbar';
import { signInAction } from '../api/auth';

export default function SignInPage() {
  return (
    <div>
      <AuthNavbar />
      <div className="flex justify-center">
        <form
          action={signInAction}
          className="flex flex-col items-center text-center gap-2 mt-30 border-2 border-[#f493e7] rounded-md bg-[#ce6ec1] w-70 pt-2 pb-3 px-2"
        >
          <h1 className="text-xl font-semibold">Sign In</h1>
          <input
            type="text"
            name="email"
            required
            className="border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            required
            className="border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2"
            placeholder="Password"
          />

          <button type="submit" className="mt-2 border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2">
            Sign In
          </button>

          <span> Or </span>

          <Link href="/sign-up" className="text-[#fea0f2] hover:underline">
            <span>If you don't have an account click here</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
