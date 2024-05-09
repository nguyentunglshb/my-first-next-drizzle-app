import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { customTimestamp } from "@/utils/custom-type";

export const User = pgTable("user", {
  birthday: text("birthday"),
  created_at: customTimestamp("created-at", {
    withTimezone: true,
  }).notNull(),
  //   email_addresses: text("email_addresses").array(),
  first_name: text("first_name"),
  image_url: text("image_url"),
  last_name: text("last_name").default(""),
  gender: text("gender").default("male"),
  id: text("id").primaryKey().unique(),
  //   last_sign_in_at: timestamp("last_sign_in_at").defaultNow().notNull(),
  phone_numbers: text("phone_numbers").array(),
  //   updated_at: timestamp("updated_at").defaultNow().notNull(),
  username: text("username"),
});
