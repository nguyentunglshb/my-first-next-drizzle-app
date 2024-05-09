CREATE TABLE IF NOT EXISTS "user_messages" (
	"user_id" text PRIMARY KEY NOT NULL,
	"create_ts" timestamp DEFAULT now() NOT NULL,
	"message" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"birthday" text,
	"create-ts" timestamp DEFAULT now() NOT NULL,
	"email_addresses" text[],
	"first_name" text,
	"image_url" text,
	"last_name" text DEFAULT '',
	"gender" text DEFAULT 'male',
	"id" text PRIMARY KEY NOT NULL,
	"last_sign_in_at" timestamp DEFAULT now() NOT NULL,
	"phone_numbers" text[],
	"updated_at" timestamp,
	"username" text,
);
