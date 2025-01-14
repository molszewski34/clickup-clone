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
        <div>
          <TopbarNav />
          <div className="flex items-start">
            {shouldRenderSidebar && <SidebarContainer />}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
