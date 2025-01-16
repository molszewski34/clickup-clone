"use client";

import { usePathname } from "next/navigation";
import SidebarContainer from "./_components/SidebarContainer/SidebarContainer";
import TopbarNav from "./_components/TopbarNav/TopbarNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldRenderSidebar = !pathname.includes("/setting");

  return (
    <html lang="en">
      <body>
        <TopbarNav />
        <div className="flex flex-row items-start" style={{ height: `calc(100vh - 40px)` }}>
          {shouldRenderSidebar && <SidebarContainer />}
          {/* Renderujemy Sidebar tylko, gdy warunek jest spełniony */}
          {children}
        </div>
      </body>
    </html>
  );
}
