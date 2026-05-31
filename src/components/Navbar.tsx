import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#how-it-works" },
  { label: "Güvenlik", href: "#security" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/30 transition-shadow duration-300">
              <Video className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Cindy<span className="text-violet-400">Go</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-600/25 active:scale-[0.97]">
              Hemen Başla
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label={isOpen ? "Kapat" : "Menüyü Aç"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-[#09090B]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-zinc-400 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-600/25 active:scale-[0.97]">
                Hemen Başla
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
