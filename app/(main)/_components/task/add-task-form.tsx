"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const taskSchema = z.object({
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

const createTaskSchema = taskSchema.omit({
  id: true,
  completed: true,
  userId: true,
});

type CreateTask = z.infer<typeof createTaskSchema>;

export default function AddTaskForm() {
  const form = useForm<CreateTask>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      important: false,
    },
  });

  const onSubmit = (task: CreateTask) => {
    console.log(task);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-4 bg-white rounded-sm"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input {...field} value={field.value} />
              </FormControl>
              {form.formState.errors.title && (
                <FormMessage>{form.formState.errors.title.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>内容</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value} />
              </FormControl>
              {form.formState.errors.title && (
                <FormMessage>{form.formState.errors.title.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>期日</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "yyyy-MM-dd")
                      ) : (
                        <span>期日を選択</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : new Date()}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {form.formState.errors.dueDate && (
                <FormMessage>
                  {form.formState.errors.dueDate.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="important"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>重要度</FormLabel>
                <FormDescription>重要度高い時はチェック</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          タスク作成
        </Button>
      </form>
    </Form>
  );
}
