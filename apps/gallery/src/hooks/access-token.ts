import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

export function useAccessToken() {
  const { getToken, isSignedIn } = useAuth();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    getToken({ template: "rollemtech-api" }).then((token) =>
      setAccessToken(token),
    );
  }, [getToken, isSignedIn]);
  return accessToken;
}
