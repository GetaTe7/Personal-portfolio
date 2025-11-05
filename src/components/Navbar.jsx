import React, { useEffect, useState } from "react";
import logo from "../assets/geta_logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      if (typeof document !== "undefined") {
        if (
          document.documentElement.classList.contains("dark") ||
          document.body.classList.contains("dark")
        )
          return true;
      }
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDark) {
      root.classList.add("dark");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 text-center md:text-left">
      <li>
        <a href="#home" className="hover:text-blue-400 transition">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-400 transition">
          Projects
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-blue-400 transition">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/80 text-gray-900 dark:text-white backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Getabalew Logo"
            className="w-10 h-10 rounded-full border-2 border-black" // only black border
          />
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            Getabalew's Portfolio
          </h1>
        </div>

        {/* Desktop nav + extras */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks}

          <a
            href="#contact"
            aria-label="Connect with me"
            className="ml-2 inline-flex items-center px-6 py-3 rounded-full text-white text-base font-semibold shadow-xl hover:scale-105 transform transition duration-200 bg-[linear-gradient(90deg,#3b82f6_0%,#ec4899_33%,#ef4444_66%,#f59e0b_100%)] cursor-pointer no-underline tracking-wide"
          >
            Connect with me
          </a>

          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setIsDark((v) => !v)}
            className="p-1 rounded-full hover:scale-105 transform transition"
          >
            {isDark ? (
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5zM12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM18.72 6.72a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06zM4.28 17.28a.75.75 0 011.06 0l1.06-1.06a.75.75 0 10-1.06-1.06L4.28 16.22a.75.75 0 010 1.06zM19.5 12a.75.75 0 01.75.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0119.5 12zM3 12a.75.75 0 01.75-.75H5.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.72 5.28a.75.75 0 011.06-1.06L8.84 5.28a.75.75 0 11-1.06 1.06L6.72 5.28zM17.28 18.72a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06z" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800 dark:text-gray-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setIsDark((v) => !v)}
            className="p-1 rounded-full hover:scale-105 transform transition"
          >
            {isDark ? (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5zM12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM18.72 6.72a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06zM4.28 17.28a.75.75 0 011.06 0l1.06-1.06a.75.75 0 10-1.06-1.06L4.28 16.22a.75.75 0 010 1.06zM19.5 12a.75.75 0 01.75.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0119.5 12zM3 12a.75.75 0 01.75-.75H5.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.72 5.28a.75.75 0 011.06-1.06L8.84 5.28a.75.75 0 11-1.06 1.06L6.72 5.28zM17.28 18.72a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06z" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-800 dark:text-gray-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4 items-start">
            {navLinks}
            <a
              href="#contact"
              aria-label="Connect with me"
              className="w-full text-center inline-flex items-center justify-center px-6 py-3 rounded-full text-white text-base font-semibold shadow-xl bg-[linear-gradient(90deg,#3b82f6_0%,#ec4899_33%,#ef4444_66%,#f59e0b_100%)] cursor-pointer no-underline tracking-wide"
            >
              Connect with me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
