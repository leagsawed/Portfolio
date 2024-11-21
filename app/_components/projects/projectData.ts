import { House, Camera, KeySquare, LampDesk } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  challenge: string;
  solution: string;
  target: '_blank';
  rel: 'noopener noreferrer';
};

export const PROJECTS: ProjectProps[] = [
  {
    Logo: House,
    title: 'Booki',
    description:
      "Création d'une application de réservation d'hébergements avec HTML/CSS",
    challenge: "Création d'une mise en page responsive sans framework",
    solution:
      'Utilisation des media queries et flexbox pour une adaptation fluide sur tous les écrans',
    url: 'https://github.com/leagsawed/Booki',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    Logo: LampDesk,
    title: 'Sophie Bluel',
    description:
      "Création d'une page web dynamique pour une architecte avec JavaScript",
    challenge: "Implémentation d'une galerie dynamique avec filtrage",
    solution:
      'Utilisation de JavaScript natif pour la manipulation du DOM et la gestion des événements',
    url: 'https://github.com/leagsawed/P3_Sophie-Bluel-final',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    Logo: Camera,
    title: 'Nina Carducci',
    description: "Optimisation du site d'une photographe professionnelle",
    challenge: 'Amélioration des performances et du SEO',
    solution:
      "Optimisation des images, mise en place du lazy loading et amélioration de l'accessibilité",
    url: 'https://leagsawed.github.io/P4_Ninna-Carducci/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    Logo: KeySquare,
    title: 'Kasa',
    description:
      "Création d'une application web de location immobilière avec React",
    challenge: "Gestion d'état complexe et animations fluides",
    solution:
      "Utilisation des hooks React et implementation d'animations CSS pour une meilleure expérience utilisateur",
    url: 'https://github.com/leagsawed/Kasa',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
