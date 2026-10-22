DROP TABLE "bookmark" CASCADE;--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "is_bookmarked" boolean DEFAULT false;