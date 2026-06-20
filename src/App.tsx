import {
  AboutSection,
  CodePilotSection,
  ContactSection,
  HeroSection,
} from './components/sections';
import { StickyNav } from './components/ui';

function App() {
  return (
    <>
      <StickyNav />
      <main
        className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-50"
        aria-label="Portfolio homepage"
      >
        <div className="site-ambient-bg" aria-hidden="true" />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <CodePilotSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}

export default App;
