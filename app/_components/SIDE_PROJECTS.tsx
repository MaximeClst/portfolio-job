import { Binary, Cloudy, Laptop, LucideIcon, TimerReset } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Cloudy,
    title: "Weather-App",
    description:
      "Application de meteo permettant de connaitre le temps qui fait dans les pluis grandes villes du monde.",
    url: "https://github.com/MaximeClst/Weather-App",
  },
  {
    Logo: Laptop,
    title: "Landing Page Afpar",
    description: "Création d'une landing page pour le site de l'Afpar",
    url: "https://github.com/MaximeClst/Refonte_siteAfpar",
  },
  {
    Logo: Binary,
    title: "Chinese Matrix",
    description: "Fun project",
    url: "https://github.com/MaximeClst/chinese-matrix",
  },
  {
    Logo: TimerReset,
    title: "New Year Countdown",
    description: "Fun Project",
    url: "https://github.com/MaximeClst/NewYear-Countdown",
  },
];
type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transiton-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
