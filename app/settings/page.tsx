import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import UserSettingsClient from "../components/settings/user-settings-client";

export default async function UserSettings() {
  const session = await getSession();
  if(!session) redirect("/sign-in");

  return (
    <div>
      <UserSettingsClient />
    </div>
  )
}
