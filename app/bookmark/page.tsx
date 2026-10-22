import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import BookmarkPageClient from "../components/bookmark/bookmark-page-client";

export default async function BookmarkPage() {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  const userId = session.user.id;

  return <BookmarkPageClient userId={userId}/>;
}
