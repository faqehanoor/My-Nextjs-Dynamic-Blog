"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        `${now.toLocaleDateString("en-US", options)} ${now.toLocaleTimeString("en-US", { hour12: false })}`
      );
    };
    updateDateTime();
    const intervalid = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalid);
  }, []);

  return (
    <header className="text-gray-800 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-black-500">
          <span>{currentDateTime}</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center space-x-4 text-red-500">
          <Link href="/" className="hover:text-black transition-colors duration-300 transform hover:scale-105">
            Home
          </Link>
          <Link href="/about" className="hover:text-black transition-colors duration-300 transform hover:scale-105">
            About
          </Link>
          <Link href="/blog" className="hover:text-black transition-colors duration-300 transform hover:scale-105">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors duration-300 transform hover:scale-105">
            Contact
          </Link>
        </nav>

        <button className="mt-4 md:mt-0 inline-flex items-center bg-blue-500 text-white border border-blue-700 py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300">
          LinkedIn
        </button>
      </div>
    </header>
  );
}
