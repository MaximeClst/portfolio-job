import { Building2, Globe, LucideIcon, Users } from "lucide-react";
import Link from "next/link";

export const WORKS: WorkProps[] = [
  {
    Logo: Building2,
    title: "Site E-commerce",
    description:
      "Développement d'une plateforme e-commerce complète avec système de paiement intégré",
    url: "https://example-client-1.com",
  },
  {
    Logo: Users,
    title: "Application CRM",
    description:
      "Système de gestion de la relation client pour une entreprise de services",
    url: "https://example-client-2.com",
  },
  {
    Logo: Globe,
    title: "Site Vitrine",
    description: "Site web professionnel pour une agence de communication",
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
