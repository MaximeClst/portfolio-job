/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: Url;
  className?: string;
}) => {
  const { image, mediumImage, name, description, url, className } = props;
  const safeUrl = url || "/default-path"; // Remplacer '/default-path' par le chemin par défaut souhaité

  return (
    <Link href={safeUrl} className={cn("w-full", className)}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative w-10 h-10">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={mediumImage}
            alt={name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-md font-semibold">{name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};

// <Link href={props.name} className={cn("w-full", props.className)}>
//   <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
//     <div className="relative w-10 h-10">
//       <img
//         src={props.image}
//         alt={props.name}
//         className="w-10 h-10 rounded-full object-contain"
//       />
//       <img
//         src={props.mediumImage}
//         alt={props.name}
//         className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
//       />
//     </div>
//     <div className="flex-1">
//       <div className="flex items-center gap-2">
//         <p className="text-md font-semibold">{props.name}</p>
//       </div>
//       <p className="text-xs text-muted-foreground">{props.description}</p>
//     </div>
//     <ArrowUpRight
//       className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
//       size={16}
//     />
//   </Card>
// </Link>
