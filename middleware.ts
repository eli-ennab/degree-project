let locales = ['sv', 'fa-ir']

function getLocale(request: any) {
  return 'sv'
}

export function middleware(request: any) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

// export const config = {
//   matcher: ['/((?!_next|.ico|).*)'],
// }

export const config = {
  matcher: ['/((?!_next).*)'],
}
