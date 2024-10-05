import "./globals.css";
import Header from "../components/Header";
import LogoWa from "../components/ui/LogoWa";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden !scroll-smooth">
        <Header />
        {children}
        <LogoWa />
      </body>
    </html>
  );
}
