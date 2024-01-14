"use client";

import { useSearchParams } from "next/navigation";

export default async function ErrorDialog() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  return <>{errorMessage && <p>{errorMessage}</p>}</>;
}
