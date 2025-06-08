import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { OpenaiLogo } from "./icons/OpenaiLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Skill = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            Mon framework est <Code>React</Code>. Ainsi j&#39;utilise{" "}
            <Code>Nexs.js</Code> pour mon frontend et mon backend.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            Je crée de <u>belles</u> applications en quelques <i>secondes</i>{" "}
            grâce à <Code>TailwindCSS</Code>.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <OpenaiLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            AI Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            J&#39;intègre l&#39;intelligence artificielle à mes projets pour une
            meilleur <u>user experience</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
