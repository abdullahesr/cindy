import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stats = [
  { icon: Users, value: "50K+", label: "Aktif Kullanıcı" },
  { icon: Shield, value: "%100", label: "Güvenli Sohbet" },
  { icon: Sparkles, value: "4.9", label: "Kullanıcı Puanı" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-violet-300">
                Yeni Nesil Görüntülü Sohbet
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-6">
              Gerçek{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Bağlantılar
              </span>
              <br />
              Anında Kurulur
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              CindyGo ile dünyanın dört bir yanındaki insanlarla yüksek kaliteli görüntülü sohbetler yapın. 
              Güvenli, hızlı ve tamamen ücretsiz.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-violet-600/25 active:scale-[0.97] flex items-center justify-center gap-2">
                Hemen Başla
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-base font-semibold text-zinc-300 bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:bg-white/[0.08] hover:text-white transition-all duration-200 active:scale-[0.97]">
                Nasıl Çalışır?
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white tabular-nums">{stat.value}</div>
                    <div className="text-xs text-zinc-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Video Chat Mockup */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-[#09090B] shadow-2xl shadow-black/50">
              {/* Mockup Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-zinc-500 font-medium">CindyGo - Görüntülü Sohbet</span>
                </div>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-2 gap-1 p-1">
                {/* Main Video */}
                <div className="col-span-2 aspect-video rounded-2xl bg-gradient-to-br from-violet-900/40 to-indigo-900/40 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-violet-600/30">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm text-zinc-400">Sohbet Başlatılıyor...</p>
                    </div>
                  </div>
                  {/* Connection Status */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/[0.06]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-zinc-300">HD Kalite</span>
                  </div>
                </div>

                {/* Participant Thumbnails */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden relative border border-white/[0.04]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                        <Users className="w-4 h-4 text-zinc-500" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm">
                      <span className="text-[10px] text-zinc-400">Katılımcı {i}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls Bar */}
              <div className="flex items-center justify-center gap-4 px-5 py-4 border-t border-white/[0.06]">
                <button className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center transition-colors active:scale-95" aria-label="Mikrofon">
                  <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center transition-colors active:scale-95" aria-label="Kamera">
                  <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9.75a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors active:scale-95 shadow-lg shadow-red-500/30" aria-label="Aramayı Sonlandır">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/20 backdrop-blur-sm">
              <span className="text-xs font-semibold text-emerald-400">✦ Canlı Demo</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
