'use client';
import './globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/react-query';
import { DataProvider } from '@/context/DataProvider/DataProvider';
import { UserProvider } from '@/context/DataProvider/UserDataProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <DataProvider>{children}</DataProvider>
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
