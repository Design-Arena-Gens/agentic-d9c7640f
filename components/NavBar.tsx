"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Route } from "next";

type NavLink = {
  href: Route;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx("nav-link", {
            active: pathname === link.href
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
