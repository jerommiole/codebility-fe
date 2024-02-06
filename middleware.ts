// import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
// import { options } from "app/api/auth/[...nextauth]/options"
// import { jwtDecode } from "jwt-decode"

// export async function middleware(request: NextRequest) {
//   const { nextUrl, cookies, headers } = request
//   let cookie1 = cookies.get("x-auth-cookie")
//   let sessionToken = cookies.get("next-auth.session-token")
//   if (!cookies.has("x-auth-cookie") && !cookies.has("next-auth.session-token")) {
//     return NextResponse.redirect(new URL(`${options.pages?.signIn}`, request.url))
//   }
//   if (nextUrl.pathname === "/auth/signout") {
//     const response = NextResponse.redirect(new URL(options.pages?.signIn as string, request.url))
//     response.cookies.delete("x-auth-cookie")
//     response.cookies.delete("next-auth.session-token")
//     return response
//   }
//   if (cookie1) {
//     const decodedData: any = jwtDecode(cookie1?.value as string)
//     if (decodedData?.exp * 1000 < Date.now()) {
//       const response = NextResponse.redirect(new URL(options.pages?.signIn as string, request.url))
//       response.cookies.delete("x-auth-cookie")
//       return response
//     }
//   }
// }
// TODO:

export async function middleware(request: NextRequest) {
  // Removed auth on routes
}

export const config = {
  matcher: ["/((?!api|auth/signin|auth/signup|codevs|_next/static|.*\\..*|_next/image|$).*)"],
}
