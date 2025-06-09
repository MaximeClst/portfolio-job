import {
  Cloudy,
  Handshake,
  LucideIcon,
  Notebook,
  Dumbbell,
} from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Cloudy,
    title: "Weather-App",
    description:
      "Application de meteo permettant de connaitre le temps qui fait dans les pluis grandes villes du monde.",
    url: "https://weather-app-three-gilt-82.vercel.app/",
  },

  {
    Logo: Handshake,
    title: "Find Your Dev",
    description: "Trouver son nouveau partenaire de développement",
    url: "https://find-your-developper.vercel.app",
  },
  {
    Logo: Notebook,
    title: "Task Trek",
    description: "Application de création de notes",
    url: "https://get-task-trek.vercel.app",
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
