import React from "react";
import { motion } from "framer-motion";
import { Video, Shield, Zap, Globe, MessageCircle, Heart } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Görüntülü Sohbet",
    description: "Kristal netliğinde ses ve görüntü kalitesiyle kesintisiz iletişim deneyimi.",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Shield,
    title: "Tam Güvenlik",
    description: "Uçtan uca şifreleme ile tüm konuşmalarınız güvende. Verileriniz asla üçüncü taraflarla paylaşılmaz.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "Anında Bağlantı",
    description: "Saniyeler içinde bağlantı kurun. Bekleme yok, kesinti yok, sadece anlık iletişim.",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Globe,
    title: "Küresel Topluluk",
    description: "50 binden fazla aktif kullanıcıyla dünyanın her yerinden yeni insanlarla tanışın.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: MessageCircle,
    title: "Akıllı Çeviri",
    description: "Yerleşik çeviri özelliğiyle dil engellerini aşın, herkesle anlaşın.",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Heart,
    title: "Özel İlgi Alanları",
    description: "İlgi alanlarınıza göre eşleşmeler bulun. Hobilerinizi paylaşan insanlarla bağlantı kurun.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
            Özellikler
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Neden Cindy<span className="text-violet-400">Go</span>?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Sıradan sohbet uygulamalarının ötesinde, gerçek bağlantılar kurmanız için tasarlandı.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-white/[0.04] border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
