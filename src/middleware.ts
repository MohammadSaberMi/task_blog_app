import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('Middleware triggered for path:', request.nextUrl.pathname);

  // Example: Protect a /dashboard route
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   // This logic is only a placeholder
  //   // You need to check if the user is authenticated
  //   const isAuthenticated = false; // Replace with actual auth check
  //   if (!isAuthenticated) {
  //     return NextResponse.redirect(new URL('/login', request.url));
  //   }
  // }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
