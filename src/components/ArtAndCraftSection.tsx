import { useState } from "react";
import roomBg from "../assets/room.png";

const artItems = [
  { title: "Paintings", image: "/assets/art/painting.jpg" },
  { title: "Paper Crafts", image: "/assets/art/papercraft.jpg" },
  { title: "Sketches", image: "/assets/art/sketch.jpg" },
  { title: "Handmade", image: "/assets/art/handmade.jpg" },
];

export default function ArtAndCraftSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* 🏡 CLEAR BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${roomBg})` }}
      />

      {/* 🌫 MUCH LIGHTER OVERLAY (background visible now) */}
      <div className="absolute inset-0 bg-white/40" />

      {/* ✨ Soft glow (very subtle) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-playfair text-[#4a1d2b] text-center mb-4">
          Tumhare Haathon Ka Jaadu
        </h2>

        <p className="text-[#5c2a3a] text-center text-2xl font-cormorant italic mb-16">
          Tum jo banati ho… it not only has colors, it has you.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(item.image)}
              className="
                group cursor-pointer
                bg-white/85
                rounded-3xl
                shadow-xl
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-serif text-[#4a1d2b]">
                  {item.title}
                </h3>
                <p className="text-[#7a3a4a] text-sm mt-1">
                  Tap to see closely
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Line */}
        <div className="mt-20 text-center">
          <p className="text-3xl font-cormorant text-[#5c2a3a] italic leading-relaxed">
            Tumhare haath jab kuch banate hain…  
            toh duniya thodi zyada khoobsurat lagti hai.
          </p>
        </div>
      </div>

      {/* 🖼 IMAGE MODAL */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
        >
          <div className="relative animate-scaleIn">
            <img
              src={activeImage}
              className="max-w-[90vw] max-h-[80vh] rounded-3xl shadow-2xl"
              alt="Artwork"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-4 -right-4 bg-white text-[#4a1d2b] w-10 h-10 rounded-full shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
