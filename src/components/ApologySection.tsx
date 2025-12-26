import { useState } from "react";

const STORY_TABS = [
  {
    key: "mistake",
    label: "My Mistake",
    title: "My Mistake",
    text: "I messed up, and I’m truly sorry for the pain I’ve caused you.",
    img: "https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1613758812084-4e2be896fd04%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTl8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=OYn_yfISj_cp5yw61Sj2DqnOMFnGsuH3McflI5cYPTc",
  },
  {
    key: "feelings",
    label: "Your Feelings",
    title: "Your Feelings",
    text: "I understand that you’re hurt, and your feelings are completely valid.",
    img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    key: "promise",
    label: "My Promise",
    title: "My Promise",
    text: "I promise to listen better, grow, and never take you for granted again.",
    img: "https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1660918262717-b08af8df4d82%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MjN8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=8HTNXqliF4lyvPhlSp9qOj3YeDrdyRnxkqSh3cX7iOE",
  },
  {
    key: "future",
    label: "Our Future",
    title: "Our Future",
    text: "I hope we can heal, rebuild, and choose each other again — every day.",
    img: "https://proxy.electricblaze.com/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1536953784228-c8aeb3efb458%3Fixid%3DM3w0Mzc5fDB8MXxzZWFyY2h8MTV8fGZsb3dlcnMlMkMlMjBoZWFydCUyQyUyMGxldHRlcnxlbnwwfDB8fHwxNzY1MzcyNTE3fDA%26ixlib%3Drb-4.1.0%26auto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D50&e=1770336000&s=gFU6xBrxyGjX92_QYP_Kj9p9fSS08fQSsQjQyhoF07o",
  },
];

export default function ApologySection() {
  const [activeStory, setActiveStory] = useState(STORY_TABS[0]);

  return (
    <section className="bg-[#fff7f3] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= HEADER ================= */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-rose-400 mb-2">
            My Apology
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-3">
            A Sincere Sorry
          </h2>
          <p className="text-rose-700 max-w-xl mx-auto">
            I'm not proud of what happened, but I am committed to making amends.
          </p>
        </div>

        {/* ================= MAIN APOLOGY ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1625480886337-3d5d5a395577"
            className="rounded-[2rem] h-[420px] w-full object-cover shadow-2xl"
            alt=""
          />

          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl">
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-2">
              A Sincere Sorry
            </p>

            <h3 className="text-4xl font-serif text-rose-900 mb-6">
              My Sweetu…
            </h3>

            <p className="text-lg text-rose-800 mb-4">
              Wo ladka jo uss din baarish mein akele khada tha,
              aaj phir se thoda akela hai.
            </p>

            <p className="text-lg text-rose-800 mb-4">
              Bas iss baar… wo chahta hai tum uska haath pakad lo.
            </p>

            <p className="text-lg text-rose-700">
              Maine galti ki hai. Par tumhari value kabhi kam nahi hui.
            </p>
          </div>
        </div>

        {/* ================= STORY TABS ================= */}
        <div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {STORY_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveStory(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    activeStory.key === tab.key
                      ? "bg-rose-900 text-white shadow-md"
                      : "bg-white border border-rose-200 text-rose-700 hover:bg-rose-50"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* TEXT */}
            <div>
              <h3 className="text-4xl font-serif text-rose-900 mb-6">
                {activeStory.title}
              </h3>

              <p className="text-xl text-rose-700 leading-relaxed max-w-lg">
                {activeStory.text}
              </p>
            </div>

            {/* IMAGE */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={activeStory.img}
                alt={activeStory.title}
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>
        </div>

        {/* ================= FINAL NOTE ================= */}
        <div className="text-center pt-24">
          <h2 className="text-4xl font-serif text-rose-900 mb-6">
            Sweetu…
          </h2>
          <p className="text-lg text-rose-700 max-w-2xl mx-auto">
            I don’t want perfection.  
            I just want us — honest, healing, and together.
          </p>
        </div>

      </div>
    </section>
  );
}
