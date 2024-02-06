import { NextRequest } from "next/server"

let locales = ['sv', 'fa-ir']

function getLocale(request: NextRequest) {
  return 'sv'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/favicon.ico') {
    return
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return
  
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
