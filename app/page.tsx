import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Skills } from './_components/Skills';
import { Spacing } from './_components/Spacing';
import { Projects } from './_components/Projects';
import { Contact } from './_components/Contact';
import { Footer } from './_components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing />
      <div id="hero" className="scroll-mt-32">
        <Hero />
      </div>
      <Spacing />
      <div id="skills" className="scroll-mt-32">
        <Skills />
      </div>
      <Spacing />
      <div id="projects" className="scroll-mt-32">
        <Projects />
      </div>
      <Spacing />
      <div id="contact" className="scroll-mt-32">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
