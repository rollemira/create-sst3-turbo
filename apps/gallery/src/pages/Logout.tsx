import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AccessTokens } from "../utils/tokens";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AccessTokens.clear();
    navigate("/", { replace: true });
  }, [navigate]);
  return <></>;
}
