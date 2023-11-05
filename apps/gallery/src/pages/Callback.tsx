import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import { AccessTokens } from "../utils/tokens";

export default function CallbackPage() {
  const { isSignedIn, getToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      getToken({ template: "rollemtech-api" }).then((token) => {
        AccessTokens.store(token!);
        navigate("/dashboard");
      });
    }
  }, [getToken, isSignedIn, navigate]);
  return <></>;
}
