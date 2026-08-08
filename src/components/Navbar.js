"use client";

import { useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant bg-opacity-70">
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">
          <span className="font-label-mono tracking-tighter">SHUVRO</span>
          <span className="text-primary">.DEV</span>
        </div>

        <div className="hidden md:flex gap-unit*8 font-label-mono text-label-mono">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              href={`#${link.id}`}
              className={`relative group transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left transition-transform duration-200 ${
                  activeSection === link.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          ))}
        </div>

        <button className="bg-primary text-background font-label-mono text-label-mono py-2 px-6 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/20 hidden md:block">
          download Resume
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary focus:outline-none flex items-center justify-center p-1"
        >
          <span className="material-symbols-outlined" data-icon="menu">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant px-margin-mobile py-4 space-y-4 font-label-mono text-label-mono">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className={`block py-2 border-b border-outline-variant/10 transition-colors ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-primary text-background py-3 rounded-lg hover:opacity-90 transition-opacity">
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
}
