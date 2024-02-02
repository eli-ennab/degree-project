import { NextResponse } from 'next/server'

let locales = ['sv', 'fa-ir']

function getLocale(request: any) {
  return 'sv'
}

export function middleware(request: any) {
  let nextResponse: NextResponse = NextResponse.next();
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
  
  nextResponse.cookies.set({
  name: 'NEXT_LOCALE',
  value: locale,
  path: '/',
  maxAge: 60 * 60 * 24 * 30,
  })

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
