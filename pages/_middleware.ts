import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  console.log(token);

  const { pathname, origin } = req.nextUrl;
  console.log(origin);

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(`${origin}/login`);
  }

  // return new Response('Hello, world! ✅');
}
