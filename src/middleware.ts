import { NextRequest, NextResponse } from "next/server"


export const middleware = (request: NextRequest) => {
    const { pathname } = request.nextUrl
    // const auth = Cookie.get('auth')
    let auth = !!request?.cookies.get('auth')

    const PUBLIC_ROUTES = ['/login', '/register']
    if (!PUBLIC_ROUTES.includes(pathname) && !auth) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (auth && PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.redirect(new URL("/branda", request.url));
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)"]
};
