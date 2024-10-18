import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Task } from "@/types/task";
import { CalendarIcon, StarIcon } from "lucide-react";

export default function TaskMetaData({ task }: { task: Task }) {
  return (
    <div className="flex items-center gap-2">
      <CalendarIcon className="h-5 w-5" />
      期日: {task.dueDate}
      <Button variant="ghost" size="icon" className="h-5 w-5">
        <StarIcon
          className={`h-8 w-8 text-yellow-500 ${
            task.important ? "fill-current" : ""
          }`}
        />
      </Button>
      <Badge
        className="text-sm select-none"
        variant={task.important ? "secondary" : "destructive"}
      >
        {task.important ? "完了済" : "未完了"}
      </Badge>
    </div>
  );
}
