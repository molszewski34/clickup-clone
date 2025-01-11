"use client";

import { usePathname } from "next/navigation"; // Importujemy usePathname z next/navigation
import { useUser } from "@/context/DataProvider/UserDataProvider"; // Import kontekstu użytkownika
import TopbarNav from "../topBar-Nav/components/TopbarNav";
import SidebarContainer from "./_components/SidebarContainer/SidebarContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Pobieramy aktualną ścieżkę
  const { userId } = useUser(); // Pobieramy userId z kontekstu

  // Sprawdzamy, czy aktualna ścieżka jest '/userId/setting/profile'
  const shouldRenderSidebar = pathname !== `/${userId}/setting/profile`;

  return (
    <html lang="en">
      <body>
        <div>
          <TopbarNav />
          <div className="flex items-start">
            {shouldRenderSidebar && <SidebarContainer />}
            {/* Renderujemy Sidebar tylko, gdy warunek jest spełniony */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
