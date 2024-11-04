import AddTaskForm from "./_components/task/add-task-form";
import TaskList from "./_components/task/task-list";
import { getTasks } from "./action";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <>
      <TaskList tasks={tasks} />
      <AddTaskForm />
    </>
  );
}
