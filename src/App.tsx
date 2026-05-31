import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
