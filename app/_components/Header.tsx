// import { Button } from '@/components/ui/button';
import { Section } from './section';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-gradient-to-b from-black from-30% to-transparent">
      <Section className="flex max-sm:flex-col max-sm:items-center max-sm:gap-4 items-baseline justify-between">
        <div className="flex items-baseline gap-4">
          <h1 className="text-lg text-muted-foreground font-caption font-bold">
            Gaël Dewas
          </h1>
          <ul className="flex items-center gap-4">
            <Link
              href="https://github.com/leagsawed"
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              <GithubIcon size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gaël-dewas-a3156a89"
              className="text-muted-foreground hover:text-white transition-colors duration-300"
            >
              <LinkedInIcon size={16} />
            </Link>
          </ul>
        </div>

        <nav className="max-sm:w-full">
          <ul className="flex max-sm:justify-center items-center gap-4">
            <li>
              <Link
                href="#hero"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Section>
    </header>
  );
};
