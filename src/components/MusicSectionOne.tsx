import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicSectionOne() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

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
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌸 BACKGROUND IMAGE – USER PROVIDED */}
      <div className="absolute inset-0">
        <img
          src="https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692709761055-18278a5cbffb%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8Mjd8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50"
          className="w-full h-full object-cover"
          alt="bg"
        />

        {/* 🌸 SECOND BACKGROUND (chosen by me – soft depth) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />

        {/* Soft romantic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-rose-50/60 to-pink-100/75 backdrop-blur-[2px]" />
      </div>

      {/* 🌻 FLOATING SUNFLOWERS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-float text-yellow-300 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 22}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${20 + Math.random() * 12}s`,
            }}
          >
            🌻
          </span>
        ))}
      </div>

      {/* 🌸 CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Text */}
        <p className="text-sm tracking-widest text-rose-600 uppercase mb-2">
          A Word From Me
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#7a1f3d] mb-6">
          I Messed Up… And I Know It
        </h2>

        <p className="text-lg text-rose-700 leading-relaxed max-w-2xl mx-auto mb-16">
          This song reminds me of you — of the silence, the emotions,
          and everything I couldn’t say out loud.
        </p>

        {/* 🎵 MUSIC CARD (UNCHANGED) */}
        <div className="relative mx-auto max-w-md bg-black/90 rounded-3xl shadow-2xl overflow-hidden">

          {/* Cover */}
          <div className="relative">
            <img
              src="https://i.imgur.com/2nCt3Sbl.jpg"
              alt="Song cover"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Player */}
          <div className="p-6 text-white text-center">
            <h3 className="text-xl font-semibold">
              Heer Toh Badi Sad Hai
            </h3>
            <p className="text-sm text-gray-300">
              Tamasha • Mika Singh
            </p>

            {/* Progress */}
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="mt-5 flex justify-center">
              <button
                onClick={togglePlay}
                className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                {isPlaying ? (
                  <Pause className="text-white" />
                ) : (
                  <Play className="text-white ml-1" />
                )}
              </button>
            </div>
          </div>

          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/audio/song1.mp3" type="audio/mpeg" />
          </audio>
        </div>

        {/* Closing Line */}
        <p className="mt-14 text-xl text-rose-800 italic font-cormorant">
          “Meri phatakdi…  
          ye gaana udaasi nahi, tumhari gehraai yaad dilata hai.”
        </p>
      </div>

      {/* 🌻 Floating animation */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-35px) rotate(8deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) rotate(0deg);
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
