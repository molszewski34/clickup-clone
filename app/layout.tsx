"use client";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/react-query";
import { DataProvider } from "@/context/DataProvider/DataProvider";
import { UserProvider } from "@/context/DataProvider/UserDataProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WorkspaceFormProvider } from "@/context/FormProviders/WorkspaceFormProvider";
import { TaskFormProvider } from "@/context/FormProviders/TaskFormProvider";
import { AuthGuard } from "./(auth)/_components/AuthGuard";
import { Suspense } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingScreen isLoading={true} />}>
          <QueryClientProvider client={queryClient}>
            <UserProvider>
              <AuthGuard>
                <WorkspaceFormProvider>
                  <TaskFormProvider>
                    <DataProvider>{children}</DataProvider>
                  </TaskFormProvider>
                </WorkspaceFormProvider>
              </AuthGuard>
            </UserProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
