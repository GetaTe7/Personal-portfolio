import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center">
      <p>
        © {new Date().getFullYear()} Getabalew Tekalign. All rights reserved.
      </p>
    </footer>
  );
}
