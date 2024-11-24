"use client";

import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import AddTaskForm from "./add-task-form";

export default function AddTaskCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Card className="flex items-center justify-center h-52 border-dashed border-gray-300 shadow-sm">
          <PlusIcon />
          タスクを追加
        </Card>
      </DialogTrigger>
      <DialogContent className="p-0">
        <AddTaskForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
