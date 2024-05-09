import { customType } from "drizzle-orm/pg-core";

type CustomTimeStamp = {
  data: Date;
  driverData: number | string;
  config?: { withTimezone: boolean; precision?: number };
};

export const customTimestamp = customType<CustomTimeStamp>({
  dataType(config: CustomTimeStamp["config"]) {
    const precision =
      typeof config?.precision !== "undefined" ? ` (${config.precision})` : "";
    return `timestamp${precision}${
      config?.withTimezone ? " with time zone" : ""
    }`;
  },
  fromDriver(value: number | string): Date {
    return new Date(value);
  },
});
