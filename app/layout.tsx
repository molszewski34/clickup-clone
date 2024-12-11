'use client';
import './globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/react-query';
import { DataProvider } from '@/context/DataProvider/DataProvider';
import { UserProvider } from '@/context/DataProvider/UserDataProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { WorkspaceFormProvider } from '@/context/FormProviders/WorkspaceFormProvider';
import { TaskFormProvider } from '@/context/FormProviders/TaskFormProvider';

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
            <WorkspaceFormProvider>
              <TaskFormProvider>
                <DataProvider>{children}</DataProvider>
              </TaskFormProvider>
            </WorkspaceFormProvider>
          </UserProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
