ALTER TABLE "user" ADD COLUMN "first_name" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "image_url" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "last_name" text DEFAULT '';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "gender" text DEFAULT 'male';