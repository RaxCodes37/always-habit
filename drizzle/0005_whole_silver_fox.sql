CREATE TABLE "bookmark" (
	"bookmark_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"bookmarked_habit_name" varchar NOT NULL,
	"bookmarked_habit_id" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_bookmarked_habit_name_habits_habit_name_fk" FOREIGN KEY ("bookmarked_habit_name") REFERENCES "public"."habits"("habit_name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_bookmarked_habit_id_habits_habit_id_fk" FOREIGN KEY ("bookmarked_habit_id") REFERENCES "public"."habits"("habit_id") ON DELETE no action ON UPDATE no action;