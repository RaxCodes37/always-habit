import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import StreakPageClient from "../components/streak/streak-client";

export default async function StreakPage() {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  const userName = session.user.name;
  const userId = session.user.id;

  return <StreakPageClient userName={userName} userId={userId} />;
}
