import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

import { AccessTokens } from "./utils/tokens";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/", "/archive", "/about", "/pricing", "/gallery(.*)"],
  afterAuth(auth, req, _evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    console.log(">>> Authenticated as", auth.userId);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    auth.getToken({ template: "rollemtech-api" }).then((token) => {
      AccessTokens.store(token!);
    });
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
