import { redirect } from "next/navigation";
import ErrorDialog from "@/components/errorDialog";
import { revalidatePath } from "next/cache";
export default async function Page() {
  async function postTask(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const category = formData.get("category");
    const response = await fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, category }),
    });
    if (!title) {
      return redirect(`/create-task?error=please input title`);
    }
    if (response.ok) {
      revalidatePath(`/`);
      return redirect(`/`);
    } else {
      console.error("Failed to post task");
    }
  }
  return (
    <main>
      <h1>Create Task</h1>
      <ErrorDialog />
      <form className="craete-task-form" action={postTask}>
        <label htmlFor="title">Title:</label>
        <input className="text-input" type="text" id="title" name="title" />

        <label htmlFor="category">Category:</label>
        <select className="text-input" id="category" name="category">
          <option value="backend">Backend</option>
          <option value="frontend">Frontend</option>
          <option value="mobile">Mobile</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
