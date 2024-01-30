export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/((?!api|auth/signin|auth/signup|_next/static|.*\\..*|_next/image|$).*)"],
}
