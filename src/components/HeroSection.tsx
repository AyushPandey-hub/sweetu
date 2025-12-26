import { useEffect, useState } from "react";
import { ChevronDown, Heart } from "lucide-react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌸 Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1651745889672-576f6ac829db%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTR8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50')",
        }}
      />

      {/* 🌫 Soft romantic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-rose-50/70 to-pink-100/80 backdrop-blur-[2px]" />

      {/* 🌸 Floating Flowers */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300 opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 18}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* 💖 Content */}
      <div
        className={`relative z-10 text-center max-w-4xl px-6 transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top Line */}
        <p className="text-sm tracking-widest text-rose-600 italic mb-3">
          It was my bad…
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#7a1f3d] mb-4">
          My Dearest Sweetu ❤️
        </h1>

        {/* Sub Text */}
        <p className="text-lg md:text-xl text-rose-700 font-cormorant italic mb-10 leading-relaxed">
          I know I messed up.  
          This isn’t an excuse…  
          just something from my heart.
        </p>

        {/* Image Card */}
        <div className="relative mx-auto max-w-3xl rounded-[2.2rem] overflow-hidden shadow-2xl border border-white/50 bg-white/40 backdrop-blur-md">
          <img
            src="https://images.unsplash.com/photo-1583932107899-1c83d76ca2ca?auto=format&fit=crop&w=1400&q=80"
            className="w-full h-[380px] md:h-[440px] object-cover"
            alt="love"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <button className="px-10 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 transition">
            Maan Jao ❤️
          </button>

          <button className="px-10 py-3 rounded-full bg-white/80 backdrop-blur text-rose-700 font-semibold shadow-xl hover:scale-105 transition flex items-center gap-2">
            <Heart size={18} className="fill-rose-500 text-rose-500" />
            Always Yours
          </button>
        </div>

        {/* Bottom Line */}
        <p className="mt-12 text-rose-800 text-lg italic font-cormorant">
          “Ye page sirf ek apology nahi hai…  
          ye meri feelings ka sabse honest version hai.”
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 animate-bounce text-rose-500">
        <ChevronDown size={28} />
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-30px) rotate(8deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
