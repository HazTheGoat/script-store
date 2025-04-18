import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeRegistryProvider } from "@/providers/theme-registry-provider";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { ApplicationHeader } from "@/components/features/application-header";
import { GlobalCartDrawer } from "@/components/features/global-cart-drawer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ReactQueryProvider>
            <ThemeRegistryProvider>
              <ApplicationHeader />
              <GlobalCartDrawer />
              {children}
            </ThemeRegistryProvider>
          </ReactQueryProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
