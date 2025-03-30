import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Twitter, Linkedin } from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="text-2xl font-serif text-blue-900 flex items-center">
              <img src="/pcmc.png" alt="PCMC" className="h-16" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  "text-sm font-semibold leading-6 transition-colors duration-200",
                  location.pathname === item.href
                    ? "text-tricolor-saffron"
                    : "text-gray-900 hover:text-tricolor-saffron"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/getstarted" className="btn-primary">
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col p-6 space-y-4 shadow-md">
            <button
              className="self-end text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-semibold text-gray-900 hover:text-tricolor-saffron transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="pt-16">
        <Outlet />
      </div>

      <footer className="bg-tricolor-blue text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 tricolor-border">
                Political campaign management committee
              </h3>
              <p className="text-gray-300">
                Your trusted partner in political campaign strategy and success.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Political campaign management committee. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
