import { NextResponse } from 'next/server';
import { getAuth } from 'firebase/auth';

export async function middleware(request) {
  const authToken = await getAuth().currentUser;

  if (!authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home'],
};
