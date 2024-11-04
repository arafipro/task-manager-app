import { Card } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

export default function AddTaskCard() {
  return (
    <Card className="flex items-center justify-center h-full border-dashed border-gray-300 shadow-sm">
      <PlusIcon />
      タスクを追加
    </Card>
  );
}
