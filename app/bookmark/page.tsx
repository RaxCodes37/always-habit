import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function BookmarkPage() {
  const session = getSession();
  if(!session) redirect("/sign-in")

  return (
    <div>
      
    </div>
  )
}
