"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MapSection = dynamic(() => import("@/components/MapSection"), { ssr: false });

const pathCards = [
  {
    icon: "🌿",
    title: "Hidden Gems",
    color: "#4A7C59",
    cta: "Discover →",
    description:
      "The places locals call home and tourists haven't found yet. No crowds. No noise. Just real Uttarakhand.",
  },
  {
    icon: "🛕",
    title: "Most Visited",
    color: "#E07B39",
    cta: "Explore →",
    description:
      "The places that made Uttarakhand famous. Pilgrims. Families. Honeymooners. Everyone comes here.",
  },
  {
    icon: "🧗",
    title: "Explorer Trails",
    color: "#5B8DB8",
    cta: "Trek In →",
    description:
      "Not for everyone. Altitude. Cold. Heavy backpacks. If you know, you know.",
  },
];

function makeParticles() {
  return Array.from({ length: 42 }, (_, i) => {
    const left = (i * 37) % 100;
    const size = 1 + (i % 3);
    const alpha = 0.2 + ((i * 17) % 40) / 100;
    const speed = 10 + (i % 16);
    const delay = (i % 8) * 0.45;
    return {
      id: i,
      left: `${left}%`,
      size: `${size}px`,
      alpha: alpha.toFixed(2),
      speed: `${speed}s`,
      delay: `${delay}s`,
      color: i % 7 === 0 ? "#F2C94C" : "#F5F0E8",
    };
  });
}

export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const [hovered, setHovered] = useState(false);
  const particles = makeParticles();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const toType = "You face them.";
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(toType.slice(0, index));
      if (index >= toType.length) clearInterval(interval);
    }, 75);

    const dot = document.querySelector<HTMLElement>(".mountain-cursor-dot");
    const ring = document.querySelector<HTMLElement>(".mountain-cursor-ring");
    const onMove = (event: MouseEvent) => {
      if (!dot || !ring) return;
      dot.style.left = `${event.clientX}px`;
      dot.style.top = `${event.clientY}px`;
      ring.style.left = `${event.clientX}px`;
      ring.style.top = `${event.clientY}px`;
    };

    const hoverTargets = document.querySelectorAll("a, button");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => setHovered(true));
      target.addEventListener("mouseleave", () => setHovered(false));
    });

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power2.out",
      });
      gsap.to(".hero-image", { scale: 1.08, duration: 12, ease: "none" });
      gsap.from(".path-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: "#paths", start: "top 75%" },
      });
      gsap.from(".truth-line", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.35,
        scrollTrigger: { trigger: "#truth", start: "top 70%" },
      });
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <main className="bg-[#0d1b2a] text-[#f5f0e8]">
      <div className="mountain-cursor-dot" />
      <div className={`mountain-cursor-ring ${hovered ? "is-active" : ""}`} />

      <section className="relative min-h-screen overflow-hidden">
        <div
          className="hero-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,27,42,0.65), rgba(13,27,42,0.82)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        <div className="hero-particles">
          {particles.map((particle) => (
            <span
              key={particle.id}
              style={
                {
                  left: particle.left,
                  "--size": particle.size,
                  "--alpha": particle.alpha,
                  "--speed": particle.speed,
                  "--particle": particle.color,
                  animationDelay: particle.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <header className="fixed top-0 z-30 w-full bg-[#0d1b2a]/45 backdrop-blur-sm border-b border-white/5">
          <div className="section-shell py-4 flex items-center justify-between">
            <p className="font-bold tracking-wider text-[#f2c94c]">UTTARAKHAND</p>
            <nav className="flex gap-6 text-sm">
              <a href="#paths" className="hover:text-[#f2c94c] transition-colors">
                Paths
              </a>
              <a href="#map" className="hover:text-[#f2c94c] transition-colors">
                Map
              </a>
              <a href="#call" className="hover:text-[#f2c94c] transition-colors">
                Journey
              </a>
            </nav>
          </div>
        </header>
        <div className="relative z-10 section-shell pt-36 pb-20 min-h-screen flex flex-col justify-center">
          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#f2c94c] max-w-5xl leading-tight">
            You Don&apos;t Visit Mountains.
          </h1>
          <p className="hero-reveal mt-5 text-2xl md:text-3xl font-body italic">
            {typedText}
            <span className="animate-pulse text-[#f2c94c]">|</span>
          </p>
          <p className="hero-reveal mt-6 text-lg md:text-xl font-body text-[#c9c3b5] max-w-2xl">
            Uttarakhand - Devbhoomi. Land of the Gods. Three paths. One truth. Choose yours.
          </p>
          <a
            className="hero-reveal mt-10 inline-block border border-[#f2c94c] text-[#f2c94c] px-7 py-3 font-semibold hover:bg-[#f2c94c] hover:text-[#0d1b2a] transition-all duration-300"
            href="#paths"
          >
            Explore Uttarakhand ↓
          </a>
        </div>
      </section>

      <section id="paths" className="py-24 bg-[#090f16]">
        <div className="section-shell">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Three Paths. One State. Completely Different Worlds.</h2>
          <p className="font-body italic text-[#c9c3b5] mb-10 text-xl">Which one are you?</p>
          <div className="grid md:grid-cols-3 gap-6">
            {pathCards.map((card) => (
              <article
                key={card.title}
                className="path-card glow-card border border-white/10 p-6 bg-[#0d1b2a]"
                style={{ boxShadow: `0 0 0px ${card.color}` }}
              >
                <p className="text-3xl">{card.icon}</p>
                <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>
                <p className="font-body mt-4 text-[#c9c3b5]">{card.description}</p>
                <button className="mt-6 font-semibold" style={{ color: card.color }}>
                  {card.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="truth"
        className="py-28 md:py-36 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,27,42,0.8), rgba(13,27,42,0.8)), url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1880&auto=format&fit=crop')",
        }}
      >
        <div className="section-shell min-h-[70vh] flex flex-col justify-center gap-5">
          <p className="truth-line text-4xl md:text-6xl font-extrabold">No comfort.</p>
          <p className="truth-line text-4xl md:text-6xl font-extrabold">No shortcuts.</p>
          <p className="truth-line text-4xl md:text-6xl font-extrabold">No guarantee.</p>
          <p className="truth-line text-4xl md:text-6xl font-extrabold text-[#f2c94c] mt-4">Still want to go?</p>
        </div>
      </section>

      <section className="py-24 bg-[#0d1b2a] text-center">
        <div className="section-shell">
          <div className="mx-auto h-52 w-52 rounded-full border border-[#f2c94c]/40 flex items-center justify-center relative">
            <div className="absolute inset-0 animate-spin [animation-duration:20s] text-[#f2c94c]/60 text-xs tracking-widest flex items-center justify-center">
              ॐ Om Mani Padme Hum ॐ Om Mani Padme Hum
            </div>
            <div className="text-5xl opacity-30">⛰</div>
          </div>
          <blockquote className="mt-10 space-y-2">
            <p className="font-body italic text-2xl text-[#f2c94c]">পাহাড় তোমাকে ভাঙবে। তারপর নতুন করে গড়বে।</p>
            <p className="font-body text-[#c9c3b5]">The mountain will break you. Then rebuild you.</p>
          </blockquote>
        </div>
      </section>

      <MapSection />

      <section className="py-24 bg-[#090f16]">
        <div className="section-shell">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">No Surprises. Just Numbers.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              ["Hidden Gems", "₹10,000 - ₹28,000"],
              ["Most Visited", "₹12,000 - ₹45,000"],
              ["Explorer Trails", "₹14,000 - ₹1,00,000+"],
            ].map(([name, cost]) => (
              <div key={name} className="border border-white/10 p-6">
                <p className="font-body text-[#c9c3b5]">{name}</p>
                <p className="text-3xl md:text-4xl font-extrabold text-[#f2c94c] mt-2">{cost}</p>
                <p className="font-body text-sm text-[#c9c3b5] mt-2">Per person, mid-range estimate</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#090f16] border-y border-white/5">
        <div className="section-shell space-y-5 text-2xl md:text-4xl font-bold">
          <p>&quot;You&apos;ve been planning this trip for 3 years.&quot;</p>
          <p>&quot;You have 14 unread Trek blogs saved.&quot;</p>
          <p>&quot;You bought trekking poles you&apos;ve never used.&quot;</p>
          <p className="text-[#f2c94c] mt-6 text-3xl md:text-5xl">
            The mountain doesn&apos;t care. It&apos;s still there. Waiting. Are you?
          </p>
        </div>
      </section>

      <section id="call" className="py-28 bg-[#060d14] text-center">
        <div className="section-shell">
          <p className="font-body italic text-2xl md:text-4xl max-w-3xl mx-auto">
            Uttarakhand doesn&apos;t need your bucket list. It needs your presence.
          </p>
          <button className="mt-10 border border-[#f2c94c] px-8 py-4 text-[#f2c94c] font-bold hover:bg-[#f2c94c] hover:text-[#0d1b2a] transition-colors duration-300">
            Begin Your Journey
          </button>
          <p className="font-body italic text-[#c9c3b5]/70 mt-9">
            पहाड़ देखने नहीं - महसूस करने जाना। Don&apos;t go to see the mountains. Go to feel them.
          </p>
          <footer className="mt-14 text-[#a0a0a0] text-sm">
            © 2026 Uttarakhand - Devbhoomi. Built by a trekker, for trekkers.
          </footer>
        </div>
      </section>
    </main>
  );
}
