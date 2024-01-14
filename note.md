in server dir
npx json-server --watch db.json --port=3001

make client sibling to server dir
npx create-next-app@latest

kosongin home page

page /
render all task + del btn (server)

(make sure json id is string)

```tsx
import { Task } from "@/type";

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.category}</td>
              <td>{/* del btn here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
```

do del later

make /create-task page
category + title
ok? kick to /

look at the rest of code from here on out
