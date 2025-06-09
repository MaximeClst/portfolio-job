import { Globe, LucideIcon } from "lucide-react";
import Link from "next/link";

export const WORKS: WorkProps[] = [
  {
    Logo: Globe,
    title: "Smart Power System",
    description: "Site web de coaching sportif en ligne",
    url: "https://smart-power-system.fr/",
  },
];

type WorkProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const Work = (props: WorkProps) => {
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
