import { Heart, Home, Users, Smile, Sparkles } from "lucide-react";

const meanings = [
  {
    icon: Heart,
    title: "My Peace",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Home,
    title: "My Home",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "My Oldest Friend",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Smile,
    title: "My Smile",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    title: "My Strength",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function MeaningSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌸 BACKGROUND IMAGE (CLEARER) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1583668269572-441ed1128aca?auto=format&fit=crop&w=1800&q=90"
          className="w-full h-full object-cover opacity-65"
          alt="background"
        />
        {/* very light overlay */}
        <div className="absolute inset-0 bg-white/25" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-playfair text-[#3a1d28] text-center mb-20">
          What You Mean To Me
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {meanings.map((item, i) => (
            <div
              key={i}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white/25
                backdrop-blur-xl
                border border-white/40
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex items-center gap-4 bg-white/60 backdrop-blur-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <p className="text-xl font-serif text-[#3a1d28]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="mt-24 text-center font-cormorant text-3xl md:text-4xl text-[#5c2a3a] italic">
          You are not just a part of my life…  
          you are my habit.
        </p>
      </div>
    </section>
  );
}
