ALTER TABLE "user" ADD COLUMN "create-ts" timestamp DEFAULT now() NOT NULL;