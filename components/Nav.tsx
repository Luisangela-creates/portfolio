"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-gray-900 dark:text-white tracking-tight">
          {profile.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in touch
        </a>

        <button
          className="md:hidden text-gray-700 dark:text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 dark:text-slate-300 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium text-blue-600 dark:text-blue-400"
          >
            Get in touch →
          </a>
        </div>
      )}
    </header>
  );
}
