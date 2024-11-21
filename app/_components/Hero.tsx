import Image from 'next/image';
import { Section } from './section';
import Link from 'next/link';
import profileImage from '@/images/Vintage_square.png';

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2 ">
        <h2 className="font-caption text-5xl"> Gaël Dewas</h2>
        <h3 className="text-3xl font-caption text-primary ">
          Développeur Front end
        </h3>
        <p>
          Je combine ma passion pour la <strong>création visuelle</strong> et le{' '}
          <strong>développement web</strong> afin de concevoir des interfaces{' '}
          <strong>élégantes</strong>, <strong>intuitives</strong> et{' '}
          <strong>immersives</strong>, offrant une expérience utilisateur{' '}
          <strong>agréable</strong> et <strong>créative</strong>. <br />
          <br />
          N&apos;hésitez pas à découvrir{' '}
          <Link href="#projects" className="italic">
            <strong>mes projets</strong>
          </Link>
          , en attendant que je puisse <strong>donner vie aux vôtres</strong>!
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto px-10">
        <Image
          src={profileImage}
          width={500}
          height={500}
          alt="Gaël"
          className="rounded-full object-cover "
          priority
        />
      </div>
    </Section>
  );
};
