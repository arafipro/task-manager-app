"use server";

import { CreateTask, Task } from "@/types/task";

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${process.env.API_URL}/api/tasks`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getTask(id: number): Promise<Task[]> {
  const res = await fetch(`${process.env.API_URL}/api/tasks/${id}`);
  return res.json();
}

export async function createTask({
  title,
  description,
  dueDate,
  important,
}: CreateTask) {
  await fetch(`${process.env.API_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, dueDate, important }),
  });
}

export async function deleteTask(id: number) {
  await fetch(`${process.env.API_URL}/api/tasks/${id}`, {
    method: "DELETE",
  });
}
