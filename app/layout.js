import "./globals.css";
import Header from "../components/Header";
import LogoWa from "../components/ui/LogoWa";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bookmark Landing Page",
  description:
    "Bookmark is a modern and responsive landing page template to showcase your app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden ">
        <Header />
        <main>{children}</main>
        <LogoWa />
        <Footer />
      </body>
    </html>
  );
}
