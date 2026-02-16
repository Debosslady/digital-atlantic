// components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-[1000]
                               
        border-b border-primary/30       
        shadow-md                        
        transition-all duration-300
      "
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="text-lg md:text-xl font-heading font-bold text-white">
            Digital Atlantic Republic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              About
            </Link> 
            <Link 
              href="/events" 
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Events
            </Link>
            <Link 
              href="/news" 
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              News
            </Link>
            <Link
              href="/join"
              className="
                bg-accent hover:bg-accent/90 
                text-primary font-semibold 
                py-2 px-6 rounded-lg 
                transition-all duration-300
                shadow-md hover:shadow-lg
              "
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary/30">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            <Link 
              href="/" 
              className="text-white/90 hover:text-white" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white/90 hover:text-white" 
              onClick={() => setIsOpen(false)}
            >
              About
            </Link> 
            <Link 
              href="/events" 
              className="text-white/90 hover:text-white" 
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/news" 
              className="text-white/90 hover:text-white" 
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="/join"
              className="
                bg-accent hover:bg-accent/90 
                text-primary font-semibold 
                py-3 px-8 rounded-lg text-center 
                transition-all
              "
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}