"use client";

import { useRouter } from "next/navigation";

import { AccessTokens } from "~/utils/tokens";
import { api } from "../../utils/api";

export default function DashboardPage() {
  const router = useRouter();

  if (router) {
    // if you got here without an access token, go back and get it
    const token = AccessTokens.get();
    if (!token || token.length === 0) router.replace("/callback");
  }

  const { data, error, isLoading } = api.pinger.pingSecure.useQuery({
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
