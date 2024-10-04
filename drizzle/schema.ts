import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const taskTable = sqliteTable("task_table", {
  id: integer("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  dueDate: text("due_date"),
  completed: integer("completed", { mode: "boolean" }),
  important: integer("important", { mode: "boolean" }),
  userId: text("user_id"),
});
