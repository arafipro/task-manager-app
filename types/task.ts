import {
  createTaskSchema,
  taskSchema,
} from "@/lib/validation-schema/taskSchema";
import { z } from "zod";

// export type Task = typeof taskTable.$inferInsert;
export type Task = z.infer<typeof taskSchema>;
export type CreateTask = z.infer<typeof createTaskSchema>;
