// app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Routes object
  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            ThePawTailz
          </Link>
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6">
            {routes.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className="hover:text-gray-300">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            {routes.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className="block hover:text-gray-300">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
