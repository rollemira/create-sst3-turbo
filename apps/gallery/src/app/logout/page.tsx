"use client";

import { useRouter } from "next/navigation";

import { AccessTokens } from "~/utils/tokens";

export default function LogoutPage() {
  const router = useRouter();
  AccessTokens.clear();
  router.replace("/");
  return <></>;
}
