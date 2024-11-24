import { z } from "zod";

export const taskSchema = z.object({
  id: z.number(),
  title: z
    .string({ required_error: "タスクのタイトルを入力してください" })
    .trim()
    .min(2, { message: "2文字以上入力してください" })
    .max(20, { message: "20文字以内にしてください" }),
  description: z
    .string({ required_error: "タスクの内容を入力してください" })
    .trim()
    .min(2, { message: "2文字以上入力してください" })
    .max(100, { message: "100文字以内にしてください" }),
  dueDate: z.date({ required_error: "日付を選択してください" }),
  important: z.boolean({ required_error: "重要度を選択してください" }),
  completed: z.boolean({ required_error: "完了したかどうか選択してください" }),
  userId: z.string(),
});

export const createTaskSchema = taskSchema.omit({
  id: true,
  completed: true,
  userId: true,
});
