import { Section } from './section';
import { PROJECTS } from './projects/projectData';
import { Project } from './projects/Project';

export const Projects = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex flex-col gap-4 flex-[3] w-full">
        <h2 className="text-3xl font-caption tracking-tight first:mt-0 text-center">
          Projets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {PROJECTS.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};
