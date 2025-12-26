import React from "react";

const apologyCards = [
  { title: "My Blunder", text: "I admit I hurt you. I should have been more careful with your heart." },
  { title: "Your Pain", text: "I see the pain I caused — and I truly regret it." },
  { title: "Reflection", text: "I’ve thought deeply about my actions and their impact on you." },
  { title: "Learning", text: "This taught me that love needs patience and presence." },
  { title: "Your Worth", text: "You deserve effort, softness, and consistency — always." },
  { title: "Commitment", text: "I’m committed to being better, not just saying sorry." },
  { title: "Forgiveness", text: "I ask for a chance to show my love through actions." },
  { title: "Us", text: "I still believe in us — healing, growing, choosing each other again." },
];

export default function ApologySection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#fff7fa] via-[#fffefe] to-[#fff1f6]">

      {/* Soft floating glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-200/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/30 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-playfair text-[#3a1d28] mb-6">
            From My Heart
          </h2>
          <p className="text-2xl font-cormorant italic text-[#6b3444] max-w-3xl mx-auto">
            These aren’t excuses…  
            they’re the thoughts that keep floating back to you.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="relative flex flex-wrap justify-center gap-10">

          {apologyCards.map((item, index) => (
            <div
              key={index}
              className={`
                group
                w-[280px] md:w-[320px]
                p-8
                rounded-[2.2rem]
                bg-white/30
                backdrop-blur-xl
                border border-white/40
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                transition-all duration-500
                hover:-translate-y-4 hover:rotate-[-0.5deg]
                animate-[float_6s_ease-in-out_infinite]
              `}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <h3 className="text-2xl font-playfair text-[#3a1d28] mb-4">
                {item.title}
              </h3>

              <p className="text-lg font-cormorant text-[#6b3444] leading-relaxed">
                {item.text}
              </p>

              {/* Soft tag */}
              <span className="inline-block mt-6 px-4 py-1 rounded-full bg-rose-100/70 text-[#7a2f47] text-sm">
                My Truth
              </span>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center mt-28">
          <p className="text-3xl md:text-4xl font-cormorant italic text-[#5c2a3a] max-w-4xl mx-auto leading-relaxed">
            I may not be perfect…  
            but every feeling here is real.  
            And you — you are still my safest place.
          </p>
        </div>

      </div>

       {/* ================= ROW 1 ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <img
            src="https://images.unsplash.com/photo-1628583338497-0cca0af5bd3e"
            className="rounded-3xl h-[240px] w-full object-cover shadow-lg"
            alt=""
          />

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h4 className="font-semibold text-rose-900 mb-2">Honesty</h4>
            <p className="text-rose-700 text-sm">
              I’ll be upfront about my mistakes.
            </p>
          </div>

          <img
            src="https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1651745889672-576f6ac829db%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTR8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=OTNv77Io1rxKh2N1PJ8K6zaqbZ5YpocqhSW-U6i-poA"
            className="rounded-3xl h-[240px] w-full object-cover shadow-lg"
            alt=""
          />

          <div className="bg-[#7b1b53] text-white rounded-3xl p-6 shadow-lg">
            <h4 className="font-semibold mb-2">Empathy</h4>
            <p className="text-sm opacity-90">
              I’ll try to understand your perspective.
            </p>
          </div>
        </div>


      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
