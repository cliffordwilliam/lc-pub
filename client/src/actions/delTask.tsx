"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const delTask = async (id: string, category: string) => {
  const deleteResponse = await fetch(
    `http://localhost:3001/tasks/${id}?category=${category}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (deleteResponse.ok) {
    console.log(`Tasks with category ${category} deleted successfully.`);
  } else {
    console.error("Failed to delete tasks based on category.");
  }
  revalidatePath(`/${category}`);
  return redirect(`http://localhost:3000/${category}`);
};
