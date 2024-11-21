import Link from 'next/link';
import type { ProjectProps } from './projectData';

export const Project = (props: ProjectProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className=" flex flex-col p-6  bg-card hover:bg-accent/10 transition-colors rounded-xl border shadow-sm"
    >
      <div className="flex justify-center">
        <span className=" text-accent-foreground p-2 rounded-lg">
          <props.Logo size={50} />
        </span>
      </div>

      <div className="flex flex-col space-y-2 text-left">
        <h3 className="text-2xl font-semibold text-center ">{props.title}</h3>
        <p className="text-md text-foreground/80">{props.description}</p>
        <div className="text-sm text-muted-foreground italic">
          <p>
            <strong>Défi :</strong> {props.challenge}
          </p>
          <p>
            <strong>Solution :</strong> {props.solution}
          </p>
        </div>
      </div>
    </Link>
  );
};
