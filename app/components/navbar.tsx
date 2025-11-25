"use client";

import { useEffect, useState } from "react";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { Link } from "react-router";
import { cn } from "~/utils/cn";

export function Navbar() {
  const [showNavItems, setshowNavItems] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Service",
      to: "/service",
    },
    {
      name: "Portfolio",
      to: "/portfolio",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Contact Us",
      to: "/contact-us",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center justify-between z-99999 fixed top-0 left-0 w-full py-6 px-4 lg:px-section transition-all duration-500 ease-in-out",
        isScrolled ? "bg-white shadow-md py-4 duration-1000" : "bg-transparent"
      )}
    >
      <div>
        <img src="/assets/logo.svg" alt="hexodea" width={140} height={50} />
      </div>

      <div
        className={cn(
          "lg:w-5/7 w-full lg:flex gap-2 lg:items-center lg:justify-between lg:relative lg:top-auto lg:left-auto lg:bg-transparent lg:p-0 absolute top-full left-0 bg-white p-4 z-50 duration-1000",
          showNavItems && " shadow-lg lg:shadow-none",
          !showNavItems && "-top-full opacity-0 lg:opacity-100",
          isScrolled && "mt-0"
        )}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "w-full block text-shadow-dark py-2 px-4 rounded-4xl font-medium text-sm lg:text-lg hover:text-white hover:bg-main transition-colors duration-300"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="bg-main button-shadow ring-4 ring-main/10 text-white px-4 py-2 h-full rounded-3xl text-lg font-medium block text-center mt-6 lg:mt-0"
          to="/"
        >
          Get Started
        </Link>
      </div>

      <div className="flex items-center gap-4 lg:hidden">
        <div
          onClick={() => setshowNavItems(!showNavItems)}
          className="bg-white p-2 rounded-2xl block lg:hidden cursor-pointer z-99"
        >
          {showNavItems ? (
            <LuX className="w-8 h-8 text-red-600" />
          ) : (
            <LuAlignJustify className="w-8 h-8 text-main" />
          )}
        </div>
      </div>
    </div>
  );
}
