
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "../common/Button"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services me", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-border bg-bg">
      <nav className="container mx-auto flex items-center justify-between text-md px-4 py-8 text-gray-500">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          <span className="text-primary">DREAM</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-12 md:flex text-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-text transition hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <Button href="#contact" className="text-white">
           Hire Me
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-heading md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X/> : <Menu/>}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-bg px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-text transition hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 block rounded-lg bg-primary px-5 py-3 text-center font-semibold text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
