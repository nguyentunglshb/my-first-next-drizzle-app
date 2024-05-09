ALTER TABLE "user" ADD COLUMN "created-at" timestamp with time zone NOT NULL;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "create-ts";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "last_sign_in_at";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "updated_at";