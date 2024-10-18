import { taskTable } from "@/drizzle/schema";

export type Task = typeof taskTable.$inferInsert;
