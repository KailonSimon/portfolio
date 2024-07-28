import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-zinc-900 pt-[64px]">
        <Navbar />
        <main className="flex-grow mx-auto w-full px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
