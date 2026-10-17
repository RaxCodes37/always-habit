import HabitPageClient from "@/app/components/habit-page/habit-page-client";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type HabitPageParams = {
  params: Promise<{ habitId: string }>;
};

export default async function HabitPage({ params }: HabitPageParams) {
  const session = await getSession();
  if (!session) redirect("/sign-in");

  const { habitId } = await params;

  return (
    <div>
      <HabitPageClient habitId={habitId} />
    </div>
  );
}
