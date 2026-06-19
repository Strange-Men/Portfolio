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
        className="page-ambient-bg min-h-screen overflow-x-hidden bg-zinc-950"
        aria-label="Portfolio homepage"
      >
        <HeroSection />
        <AboutSection />
        <CodePilotSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
