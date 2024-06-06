/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { SIDE_PROJECTS, SideProject } from "./SIDE_PROJECTS";
import { Section } from "./Section";
import { WORKS, Work } from "./WORKS";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-1">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://x.com/maxime_clst"
            name="@maximeclst"
            image="https://avatars.githubusercontent.com/u/122441440?v=4"
            mediumImage="data:image/png;base64,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"
            description="100"
          />
          <ContactCard
            url="https://www.linkedin.com/in/celeste-maxime-581352235/"
            name="Maxime CELESTE"
            image="https://avatars.githubusercontent.com/u/122441440?v=4"
            mediumImage="data:image/png;base64,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"
            description="100"
          />
        </Card>
      </div>
    </Section>
  );
};
