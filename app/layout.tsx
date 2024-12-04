'use client';
import type { Metadata } from 'next';
import './globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/react-query';
import { DataProvider } from '@/context/DataProvider/DataProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <DataProvider>{children}</DataProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
