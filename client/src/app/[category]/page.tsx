import { TaskList } from "@/components/taskList";
import { Task } from "@/type";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const response = await fetch(
    `http://localhost:3001/tasks?category=${params.category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const tasks = (await response.json()) as Task[];
  return (
    <main>
      <h1>{params.category}</h1>
      <TaskList tasks={tasks} category={params.category} />
    </main>
  );
}
