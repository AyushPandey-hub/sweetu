import React from "react";

const promises = [
  "I’ll listen — really listen, not just hear.",
  "Less anger, more patience, always more love.",
  "I’ll never let you feel alone, even in silence.",
  "I’ll choose calm over ego, every single time.",
  "I’ll protect your peace like it’s my own.",
  "I’ll grow, even when it’s uncomfortable.",
  "And yes… even if you cut my hair wrong again, I won’t complain 😄",
];

export default function PromisesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-[#fff7fa] via-[#fffefe] to-[#fff1f6]">

      {/* Soft floating glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-rose-200/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/30 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-playfair text-[#3a1d28] mb-6">
            I Promise…
          </h2>
          <p className="text-2xl font-cormorant italic text-[#6b3444] max-w-3xl mx-auto">
            Not perfection — just effort, honesty,  
            and a heart that chooses you every day.
          </p>
        </div>

        {/* Floating Promise Cards */}
        <div className="flex flex-wrap justify-center gap-10">

          {promises.map((text, index) => (
            <div
              key={index}
              className="
                group
                w-[280px] md:w-[320px]
                p-8
                rounded-[2.2rem]
                bg-white/30
                backdrop-blur-xl
                border border-white/40
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                transition-all duration-500
                hover:-translate-y-4 hover:rotate-[-0.4deg]
                animate-[float_7s_ease-in-out_infinite]
              "
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <p className="text-xl font-cormorant text-[#6b3444] leading-relaxed">
                {text}
              </p>

              {/* Soft accent */}
              <div className="mt-6 h-[2px] w-10 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="text-center mt-28">
          <p className="text-3xl md:text-4xl font-cormorant italic text-[#5c2a3a] max-w-4xl mx-auto leading-relaxed">
            I may stumble…  
            but I promise I’ll never stop trying —  
            for you, for us.
          </p>
        </div>

      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
