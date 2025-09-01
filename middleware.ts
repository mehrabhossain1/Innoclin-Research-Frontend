import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      console.log('No auth token found, redirecting to login');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // For now, just check if token exists and redirect to login if not
    // We'll handle JWT verification in the API routes instead
    console.log('Token found, allowing access to admin routes');
    
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};
