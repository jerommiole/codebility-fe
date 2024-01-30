export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/auth", "/api/:path*", "/dashboard", "/Interns", "/projects-completed"],
}
