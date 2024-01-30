export { default } from "next-auth/middleware"

// matcher: ["/auth", "/api/:path*", "/dashboard/:path*", "/Interns/:path*", "/projects-completed/:path*"],

export const config = {
  matcher: ["/((?!api|auth/signin|auth/signup|_next/static|.*\\..*|_next/image|$).*)"],
}
