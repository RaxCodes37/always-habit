import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import HomePageClient from "../components/home/home-client";

export default async function HomePage() {
  const session = await getSession();
  if(!session) redirect("/sign-in");

  return (
    <div  className="flex justify-center">
      <HomePageClient/>
    </div>
  )
}
