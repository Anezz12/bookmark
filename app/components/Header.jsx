"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import Image from "next/image";
import Link from "next/link";
import navIcon from "@/public/images/logo-bookmark.svg";

export default function Header() {
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  // State for loading bar
  const [progress, setProgress] = useState(0);

  // Get current path
  const pathname = usePathname();

  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Update progress based on pathname
  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  return (
    <header className="container relative mx-auto p-6">
      <nav className="flex items-center justify-between space-x-20 my-6">
        <LoadingBar
          color="#6028ff"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {/* Logo */}
        <div className="z-30">
          <Image src={navIcon} width={200} height={100} alt="Logo" />
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-gray-500 md:flex">
          <NavLink href={"/blog"}>Features</NavLink>
          <NavLink href="#download">Download</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink
            href="#login"
            className="px-8 py-2 text-white bg-red-500 border-2 border-red-500 rounded-lg shadow-md hover:text-red-500 hover:bg-white"
          >
            Login
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle menu"
          className={`z-30 block md:hidden focus:outline-none hamburger ${
            menuOpen ? "open" : ""
          }`}
          onClick={navToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full max-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-blue-900">
          <NavLink href="#features" mobile>
            Features
          </NavLink>
          <NavLink href="#download" mobile>
            Download
          </NavLink>
          <NavLink href="#faq" mobile>
            FAQ
          </NavLink>
          <NavLink href="#login" mobile>
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, mobile, className = "" }) {
  const baseClasses = "tracking-widest hover:text-red-400";
  const mobileClasses = "w-full py-3 text-center block hover:text-red-500";

  return (
    <Link
      href={href}
      className={`${mobile ? mobileClasses : baseClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
