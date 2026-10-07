CREATE TABLE "habit_log" (
	"log_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"logged_habit_id" uuid NOT NULL,
	"date" timestamp DEFAULT now() NOT NULL,
	"logger_id" text NOT NULL,
	"logger_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "habits" (
	"habit_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"habit_name" varchar(50) NOT NULL,
	"description" varchar(200) DEFAULT 'No description provided',
	"habit_creator_name" text NOT NULL,
	"habit_creator_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "habit_log" ADD CONSTRAINT "habit_log_logged_habit_id_habits_habit_id_fk" FOREIGN KEY ("logged_habit_id") REFERENCES "public"."habits"("habit_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "habit_log" ADD CONSTRAINT "habit_log_logger_id_user_id_fk" FOREIGN KEY ("logger_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "habit_log" ADD CONSTRAINT "habit_log_logger_name_user_name_fk" FOREIGN KEY ("logger_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "habits" ADD CONSTRAINT "habits_habit_creator_name_user_name_fk" FOREIGN KEY ("habit_creator_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "habits" ADD CONSTRAINT "habits_habit_creator_id_user_id_fk" FOREIGN KEY ("habit_creator_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;