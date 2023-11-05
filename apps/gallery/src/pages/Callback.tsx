import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAccessToken } from "../hooks/access-token";

export default function CallbackPage() {
  const accessToken = useAccessToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard", { replace: true });
    }
  }, [accessToken, navigate]);
  return <></>;
}
