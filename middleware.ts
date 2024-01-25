import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { jwtDecode } from "jwt-decode"

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request
  let cookie = request.cookies.get("x-auth-cookie")

  /* const protectedRoutes = ["/dashboard"]
  if (!cookie && protectedRoutes.includes(nextUrl.pathname)) {
    console.log("Cookie is missing")
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  if (cookie) {
    const decodedData: any = jwtDecode(cookie?.value as string)

    if (decodedData?.exp * 1000 < Date.now()) {
      console.log("Token has expired")
    } else {
      console.log("Token is still valid")
    }
  }*/
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
