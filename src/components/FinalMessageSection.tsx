import { Mail } from "lucide-react";

export default function FinalMessageSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1707321580530-d4f7d303206c?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover"
          alt="love-bg"
        />
        {/* soft overlay */}
        <div className="absolute inset-0 bg-white/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">

        {/* Text Block */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-playfair text-rose-900 mb-6">
            Sweetu…
          </h1>

          <p className="text-lg md:text-xl text-rose-800 leading-relaxed mb-10">
            Tumhare bina sab kuch thoda adhura lagta hai.  
            Main perfect nahi hoon…  
            par jo feel karta hoon, wo bilkul real hai.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-3 rounded-full bg-white text-rose-700 font-semibold shadow-lg hover:scale-105 transition">
              <Mail className="inline mr-2 w-4 h-4" />
              Talk To Me When You're Ready
            </button>

            <button className="px-7 py-3 rounded-full bg-rose-500 text-white font-semibold shadow-lg hover:bg-rose-600 hover:scale-105 transition">
              Always Yours ❤️
            </button>
          </div>

          {/* Footer line */}
          <p className="mt-10 text-rose-700 italic">
            “Tum ho toh sab kuch hai… warna kuch bhi nahi.”
          </p>
        </div>
      </div>
    </section>
  );
}
