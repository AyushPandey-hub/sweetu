import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicSectionTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100
    );
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-rose-50 to-amber-50 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-rose-300/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/30 blur-[160px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* 🎵 MUSIC CARD */}
        <div className="bg-black/90 rounded-[2.5rem] shadow-2xl overflow-hidden">

          <div className="relative">
            <img
              src="/assets/music-cover.jpg"
              className="w-full h-[340px] object-cover"
              alt="music"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="p-8 text-center text-white">
            <h3 className="text-3xl font-semibold">O Rangrez</h3>
            <p className="text-gray-300 mt-1">
              Bhaag Milkha Bhaag • Arijit Singh
            </p>

            <div className="mt-4 h-1 bg-white/20 rounded-full">
              <div
                className="h-full bg-pink-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={togglePlay}
                className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                {isPlaying ? <Pause /> : <Play className="ml-1" />}
              </button>
            </div>

            <p className="mt-6 text-lg italic text-rose-200">
              “Humne decide kiya tha na…  
              iss gaane pe saath dance karenge.”
            </p>
          </div>

          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/audio/song2.mp3" type="audio/mpeg" />
          </audio>
        </div>

        {/* 🌸 CONTINUOUS SCROLLING MEMORY STRIP */}
        <div className="mt-24 overflow-hidden relative">
          <div className="flex gap-8 animate-marquee">

            {[
              "https://images.unsplash.com/photo-1623406794883-d61f113b621a?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1628583338616-f02a9faec6b4?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1555530809-5a4680c18bdd?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1653201170732-be851e4e3406?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1623406794883-d61f113b621a?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1628583338616-f02a9faec6b4?auto=format&fit=crop&w=1200&q=80",
            ].map((img, i) => (
              <div
                key={i}
                className="min-w-[360px] h-[240px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="memory"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🌙 CINEMATIC END */}
        <div className="mt-40 text-center">
          <h2 className="text-4xl font-serif text-rose-900 mb-6">
            Bas ek hi baat…
          </h2>
          <p className="text-lg text-rose-700 max-w-2xl mx-auto leading-relaxed">
            Main galat ho sakta hoon…  
            par jo mehsoos karta hoon, wo kabhi jhooth nahi hota.  
            Agar tum saath ho — toh sab theek ho sakta hai.
          </p>
        </div>
      </div>
    </section>
  );
}
