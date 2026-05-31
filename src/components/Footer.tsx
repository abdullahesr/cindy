import React from "react";
import { Video, Github, Twitter, Instagram, Heart } from "lucide-react";

const footerLinks = {
  ürün: ["Özellikler", "Güvenlik", "Fiyatlandırma", "SSS"],
  şirket: ["Hakkımızda", "Blog", "Kariyer", "İletişim"],
  yasal: ["Gizlilik Politikası", "Kullanım Şartları", "Çerez Politikası"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Video className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <span className="text-base font-bold text-white">
                Cindy<span className="text-violet-400">Go</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
              Gerçek bağlantılar kurmanız için tasarlanmış, güvenli ve kaliteli görüntülü sohbet platformu.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 group"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-zinc-400 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © 2024 CindyGo. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-zinc-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> by CindyGo Team
          </p>
        </div>
      </div>
    </footer>
  );
}
