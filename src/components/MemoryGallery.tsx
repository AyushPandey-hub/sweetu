import ourimg1 from "../assets/ourimg1.jpeg";
import ourimg2 from "../assets/ourimg2.jpeg";
import ourimg3 from "../assets/ourimg3.jpeg";
import ourimg4 from "../assets/ourimg4.jpeg";
import ourimg5 from "../assets/ourimg5.jpeg";
import ourimg6 from "../assets/ourimg6.jpeg";

const memories = [
  {
    caption: "Little moments, big feelings",
    image: ourimg1,
    size: "md:col-span-1",
  },
  {
    caption: "Humari chhoti si duniya",
    image: ourimg2,
    size: "md:col-span-2 md:row-span-2",
  },
  {
    caption: "Yaadein jo kabhi purani nahi hoti",
    image: ourimg3,
    size: "md:col-span-1",
  },
  {
    caption: "Cozy window light",
    image: ourimg4,
    size: "md:col-span-1",
  },
  {
    caption: "Soft petals, softer moments",
    image: ourimg5,
    size: "md:col-span-1",
  },
  {
    caption: "Forever in my heart",
    image: ourimg6,
    size: "md:col-span-1",
  },
];

export default function MemoryGallery() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 overflow-hidden">

      {/* Soft ambient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200/25 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/25 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-playfair text-[#4a1d2b] text-center mb-4">
          Our Little Moments
        </h2>

        <p className="font-cormorant text-2xl text-[#6b2f42] text-center mb-16 italic">
          A collection of memories I never want to forget
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px] md:auto-rows-[280px]">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${memory.size}
                bg-white/70 backdrop-blur-md
                shadow-lg hover:shadow-2xl
                transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Image */}
              <img
                src={memory.image}
                alt={memory.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-cormorant text-white text-2xl drop-shadow-lg">
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
