"use client";

import { api } from "../../utils/api";

export default function DashboardPage() {
  const { data, error, isLoading } = api.pinger.ping.useQuery({
    name: "gallery",
  });
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error: {error.message}</p>;

  return (
    <div className="flex w-full flex-col gap-4 text-center">
      <h1 className="text-4xl">Dashboard</h1>
      <h2 className="text-xl">tRPC Query</h2>
      <pre>{data.reply}</pre>
    </div>
  );
}
