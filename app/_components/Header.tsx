import { Section } from './section';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 w-full z-50 py-4 bg-gradient-to-b from-black from-40% to-transparent ">
      <Section className="flex  justify-between ">
        <div className="flex sm:items-center gap-4  ">
          <h1 className=" text-lg text-muted-foreground font-caption font-bold hidden sm:block">
            Gaël Dewas
          </h1>
          <ul className="flex  gap-4 ">
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

        <nav>
          <ul className="flex items-center gap-4 md:gap-3 ">
            <li>
              <Link
                href="#hero"
                className="text-muted-foreground hover:text-white transition-colors duration-300 hidden sm:block"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-white transition-colors duration-300 hidden sm:block"
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-white transition-colors duration-300 hidden sm:block"
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
