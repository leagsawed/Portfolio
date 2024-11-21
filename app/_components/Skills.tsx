import { Card } from '@/components/ui/card';
import { NextLogo } from './icons/NextLogo';
import { NodeLogo } from './icons/NodeLogo';
import { ReactLogo } from './icons/ReactLogo';
import { Section } from './section';

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <div className="flex-1 w-full">
        <h2 className="pt-2 text-3xl font-caption tracking-tight first:mt-0 text-center ">
          Compétences
        </h2>
      </div>
      <div className="flex max-sm:flex-col gap-4">
        <Card className="flex flex-col gap-4 flex-1 items-center p-4">
          <NodeLogo size={64} className="md:w-16 sm:h-16 w-12 h-12" />
          <div className="flex items-center justify-center w-full">
            <h3 className="pt-2 text-4xl max-md:text-2xl  font-caption tracking-tight">
              Node.js
            </h3>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Environnement d'exécution JavaScript côté serveur permettant de
            créer des <strong>applications rapides</strong>.
          </p>
        </Card>

        <Card className="flex flex-col gap-4 max-md:gap-1 flex-1 items-center p-4">
          <ReactLogo
            size={64}
            className="animate-spin md:w-16 sm:h-16 w-12 h-12"
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
          <NextLogo size={64} className="md:w-16 sm:h-16 w-12 h-12" />
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
