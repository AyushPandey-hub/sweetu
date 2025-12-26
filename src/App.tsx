import { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import MusicSectionOne from './components/MusicSectionOne';
import ApologySection from './components/ApologySection';
import MeaningSection from './components/MeaningSection';
import MemoryGallery from './components/MemoryGallery';
import ArtAndCraftSection from './components/ArtAndCraftSection';
import MusicSectionTwo from './components/MusicSectionTwo';
import PromisesSection from './components/PromisesSection';
import FinalMessageSection from './components/FinalMessageSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <MusicSectionOne />
      <ApologySection />
      <MeaningSection />
      <MemoryGallery />
      <ArtAndCraftSection />
      <MusicSectionTwo />
      <PromisesSection />
      <FinalMessageSection />
    </div>
  );
}

export default App;
