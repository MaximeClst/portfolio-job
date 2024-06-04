/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl">Maxime CELESTE</h2>
        <h3 className="font-caption text-3xl">FrontEnd Developer</h3>
        <p>
          Développeur Front End Junior passionné par la création
          d&#39;interfaces utilisateurs modernes et performantes. Expertise en
          React, Tailwind CSS, Next.js et TypeScript. Motivé par les défis
          techniques et l&#39;apprentissage continu, je m&#39;engage à apporter
          des solutions innovantes et efficaces.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://avatars.githubusercontent.com/u/122441440?v=4"
          className="w-full h-auto max-w-xs rounded-full"
          alt="maxime' picture"
        />
      </div>
    </Section>
  );
};
