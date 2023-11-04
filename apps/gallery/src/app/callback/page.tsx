"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { AccessTokens } from "~/utils/tokens";

export default function CallbackPage() {
  const router = useRouter();
  const { getToken, isSignedIn } = useAuth();
  if (!isSignedIn) router.replace("/");
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  (async () => {
    const token = await getToken({ template: "rollemtech-api" });
    if (token) {
      AccessTokens.store(token);
      router.replace("/dashboard");
    }
  })();
  return <></>;
}
