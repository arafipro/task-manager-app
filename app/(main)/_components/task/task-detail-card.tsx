import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTask } from "../../action";
import TaskActions from "./task-actions";
import TaskMetaData from "./task-meta-data";

export default async function TaskDetailCard() {
  const task = await getTask(1);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task[0].title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{task[0].description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <TaskMetaData task={task[0]} />
        <TaskActions task={task[0]} />
      </CardFooter>
    </Card>
  );
}
