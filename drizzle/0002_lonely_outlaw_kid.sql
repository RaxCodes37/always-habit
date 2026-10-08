ALTER TABLE "habits" ALTER COLUMN "habit_name" SET DATA TYPE varchar(28);--> statement-breakpoint
ALTER TABLE "habits" ALTER COLUMN "description" SET DATA TYPE varchar(28);--> statement-breakpoint
ALTER TABLE "habits" ALTER COLUMN "description" SET DEFAULT 'No description provided';