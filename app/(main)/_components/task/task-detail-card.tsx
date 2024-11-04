import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@/types/task";
import TaskActions from "./task-actions";
import TaskMetaData from "./task-meta-data";

export default async function TaskDetailCard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <TaskMetaData task={task} />
        <TaskActions task={task} />
      </CardFooter>
    </Card>
  );
}
