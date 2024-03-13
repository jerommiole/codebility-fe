import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtDecode } from "jwt-decode"

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies, headers } = request
  // let cookie1 = cookies.get("x-auth-cookie")

  let sessionToken = cookies.get("next-auth.session-token")
  if (!cookies.has("codebility-auth")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url))
  }
  if (nextUrl.pathname === "/auth/signout") {
    const response = NextResponse.redirect(new URL("/auth/signin", request.url))
    response.cookies.delete("codebility-auth")
    return response
  }
  // if (cookie1) {
  //   const decodedData: any = jwtDecode(cookie1?.value as string)
  //   if (decodedData?.exp * 1000 < Date.now()) {
  //     const response = NextResponse.redirect(new URL("/auth/signin", request.url))
  //     response.cookies.delete("x-auth-cookie")
  //     return response
  //   }
  // }
}
// TODO:

// export async function middleware(request: NextRequest) {
//   // Removed auth on routes
// }

export const config = {
  matcher: ["/((?!api|auth/signin|auth/signup|codevs|_next/static|.*\\..*|_next/image|$).*)"],
}
