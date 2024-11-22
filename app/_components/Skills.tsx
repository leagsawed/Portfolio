import { Card } from '@/components/ui/card';
import { NextLogo } from './icons/NextLogo';
import { NodeLogo } from './icons/NodeLogo';
import { ReactLogo } from './icons/ReactLogo';
import { Section } from './section';

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div className="w-full">
        <h2 className="text-3xl font-caption tracking-tight text-center pt-2 first:mt-0">
          Compétences
        </h2>
      </div>
      <div className="text-center w-full">
        <p>
          <span className="italic text-muted-foreground">
            Lors de la formation Développeur-web d&apos;
          </span>
          <a
            href="https://openclassrooms.com/fr/"
            className="hover:text-white/80 text-muted-foreground transition-colors duration-300"
          >
            <strong>OPENCLASSROOMS</strong>
          </a>
          <span className="italic text-muted-foreground">
            , j&apos;ai pu apprendre à maîtriser:
          </span>
        </p>
      </div>

      <div className="flex max-sm:flex-col gap-4">
        <Card className="flex flex-col gap-4 flex-1 items-center p-4">
          <NodeLogo size={64} className="md:w-16 sm:h-16 w-12 h-12 mt-2" />
          <div className="flex items-center justify-center w-full">
            <h3 className="pt-2 text-4xl max-md:text-2xl  font-caption tracking-tight">
              Node.js
            </h3>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Environnement d&apos;exécution JavaScript côté serveur permettant de
            créer des <strong>applications rapides</strong>.
          </p>
        </Card>

        <Card className="flex flex-col gap-4 max-md:gap-1 flex-1 items-center p-4">
          <ReactLogo
            size={64}
            className="animate-spin md:w-16 sm:h-16 w-12 h-12 mt-2"
            style={{ animationDuration: '15s' }}
          />
          <div className="flex items-center justify-center w-full">
            <h3 className="pt-2 text-4xl max-md:text-2xl font-caption tracking-tight">
              React
            </h3>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Pour construire des interfaces utilisateur{' '}
            <strong>interactives</strong> et <strong>dynamiques</strong>.
          </p>
        </Card>
        <Card className="flex flex-col gap-4 flex-1 items-center p-4">
          <NextLogo size={64} className="md:w-16 sm:h-16 w-12 h-12 mt-2" />
          <div className="flex items-center justify-center w-full">
            <h3 className="pt-2 text-4xl max-md:text-2xl font-caption tracking-tight">
              Next.js
            </h3>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Framework regroupant <strong>React</strong> et <strong>Node</strong>{' '}
            pour des performances <strong>optimisées</strong>.
          </p>
        </Card>
      </div>
    </Section>
  );
};
