import { Task } from "@/type";
import { TaskList } from "@/components/taskList";

export default async function Page() {
  const response = await fetch(`http://localhost:3001/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const tasks = (await response.json()) as Task[];
  return (
    <main>
      <h1>Home</h1>
      <TaskList tasks={tasks} category="" />
    </main>
  );
}
