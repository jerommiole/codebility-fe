export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/((?!api|auth/signin|auth/signup|codevs|_next/static|.*\\..*|_next/image|$).*)"],
}
