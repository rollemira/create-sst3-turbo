export const AccessTokens = {
  store: (accessToken: string, expiresAt?: number, idToken?: string) => {
    if (typeof window === "undefined") return null;
    window.localStorage.setItem("accessToken", accessToken);
    if (expiresAt) {
      window.localStorage.setItem("expiresAt", expiresAt.toString());
    }
    if (idToken) {
      window.localStorage.setItem("idToken", idToken);
    }
  },
  get: () => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("accessToken");
  },
  clear: () => {
    if (typeof window === "undefined") return null;
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("expiresAt");
    window.localStorage.removeItem("idToken");
  },
  expiresAt: () => {
    if (typeof window === "undefined") return null;
    const expiresAtJson = window.localStorage.getItem("expiresAt");
    if (!expiresAtJson) {
      return undefined;
    }
    return Number(JSON.parse(expiresAtJson));
  },
};
