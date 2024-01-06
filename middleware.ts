import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Specify public routes using the proper wildcard syntax
  publicRoutes: ["/", "/posts", "/posts/:path*"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|/posts).*)"],
};
