/*  eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent p-1 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Maxime CELESTE</h2>
        <h3 className="font-caption text-3xl">FrontEnd Developer</h3>
        <p>
          Développeur Front End Junior passionné par la création
          d&#39;interfaces utilisateurs modernes et performantes. Expertise en{" "}
          <Code>React</Code>, <Code>Tailwind CSS</Code>, <Code>Next.js</Code> et{" "}
          <Code>TypeScript</Code>. Motivé par les défis techniques et
          l&#39;apprentissage continu, je m&#39;engage à apporter des solutions
          innovantes et efficaces.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/122441440?v=4"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="maxime' picture"
        />
      </div>
    </Section>
  );
};
