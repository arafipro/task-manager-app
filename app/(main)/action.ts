"use server";

import { Task } from "@/types/task";

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${process.env.API_URL}/api/tasks`);
  return res.json();
}

export async function getTask(id: number): Promise<Task[]> {
  const res = await fetch(`${process.env.API_URL}/api/tasks/${id}`);
  return res.json();
}
