"use client";

import { Task } from "@/type";
import { delTask } from "@/actions/delTask";

export const TaskList: React.FC<{ tasks: Task[]; category: string }> = ({
  tasks,
  category,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.category}</td>
            <td>
              <button
                onClick={() => {
                  delTask(task.id, category);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
