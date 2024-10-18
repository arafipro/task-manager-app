"use client";

import { Button } from "@/components/ui/button";
import { Task } from "@/types/task";
import { Edit2Icon, TrashIcon } from "lucide-react";

export default function TaskActions({ task }: { task: Task }) {
  return (
    <div>
      <Button
        variant="ghost"
        className="h-8 w-8 text-gray-500"
        size="icon"
        onClick={() => console.log(task.id)}
      >
        <Edit2Icon className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        className="h-8 w-8 text-gray-500"
        size="icon"
        onClick={() => console.log(task.id)}
      >
        <TrashIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
