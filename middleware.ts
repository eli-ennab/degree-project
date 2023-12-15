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

// // Background image working, but not language slugs.
export const config = {
  matcher: ['/((?!api|_next|.ico|).*)'],
}

// // Language slugs working, but not background image.
// export const config = {
//   matcher: ['/((?!_next).*)'],
// }
