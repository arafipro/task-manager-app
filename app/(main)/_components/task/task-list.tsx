import { Task } from "@/types/task";
import AddTaskCard from "./add-task-card";
import TaskDetailCard from "./task-detail-card";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskDetailCard key={task.id} task={task} />
      ))}
      <AddTaskCard />
    </div>
  );
}
