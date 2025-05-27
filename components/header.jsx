"use client";

/**
 * Header Component
 *
 * Displays the site header with logo and navigation menu
 * Includes responsive mobile menu toggle and improved mobile experience
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { content } from "@/content/content";

export default function Header() {
  const { company, navigation } = content;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu open/closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll events to add shadow to header when scrolled
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Add catalog link to navigation
  const updatedNavigation = [...navigation];

  // Only add catalog if it doesn't already exist
  if (!updatedNavigation.some((item) => item.name === "Catalog")) {
    updatedNavigation.push({ name: "Catalog", href: "/catalog" });
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200 ${""}`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-2 z-10">
          <span className="text-xl font-bold text-orange-600">
            {company.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {updatedNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-orange-600 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Integrated directly in header for better transitions */}
      <div
        className={`fixed inset-0 bg-gray-900/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu header with close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-orange-600">
              {company.name}
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {updatedNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2.5 px-4 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div className="p-4 border-t text-sm text-gray-600 bg-gray-50">
            <p className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {company.phone}
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {company.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
