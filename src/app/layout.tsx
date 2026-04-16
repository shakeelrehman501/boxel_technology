import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { bricolage } from "@/lib/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";
import ScrollPreserve from "@/components/ui/Scrollcontrol";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col bg-primary dark:bg-secondary ${bricolage.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollPreserve />
          <Navbar />
          <main>{children}
            
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
