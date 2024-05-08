import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
// Read the .env file if it exists, or a file specified by the
// dotenv_config_path parameter that's passed to Node.js
dotenv.config();
if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL not found in environment");
export default {
  schema: "./db/schema/index.ts",
  out: "./db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  strict: true,
} satisfies Config;
