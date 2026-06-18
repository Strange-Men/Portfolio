import {
  AboutSection,
  CodePilotSection,
  ContactSection,
  HeroSection,
} from './components/sections';

function App() {
  return (
    <main className="min-h-screen bg-zinc-950" aria-label="Portfolio homepage">
      <HeroSection />
      <AboutSection />
      <CodePilotSection />
      <ContactSection />
    </main>
  );
}

export default App;
