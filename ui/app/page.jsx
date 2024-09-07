"use client";

import { useGetApiV1Users } from "./client/gen/node/users/users";

export default function Home() {
  const { data, isLoading } = useGetApiV1Users();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{data}</h1>
    </div>
  );
}
