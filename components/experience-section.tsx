import { ExternalLink } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    period: "2024 -- Presente",
    title: "Desarrollador Frontend",
    company: "Freelance",
    description:
      "Desarrollo de interfaces modernas y responsive para clientes diversos. Implementacion de mejores practicas en accesibilidad y rendimiento web.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2023 -- 2024",
    title: "Desarrollador Web",
    company: "Proyectos Personales",
    companyUrl: "https://github.com/ScytherX",
    description:
      "Creacion y mantenimiento de multiples aplicaciones web. Implementacion de APIs REST, integracion con servicios de terceros y optimizacion de rendimiento.",
    tags: ["JavaScript", "Node.js", "MongoDB", "Git"],
  },
  {
    period: "2021 -- 2023",
    title: "Desarrollador Junior",
    company: "Aprendizaje Continuo",
    description:
      "Formacion intensiva en desarrollo web full-stack. Participacion en proyectos colaborativos y hackatones. Construccion de portafolio de proyectos reales.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Python"],
  },
];

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="group flex flex-col gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-border hover:bg-card/50 sm:flex-row">
      <p className="shrink-0 pt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:w-36">
        {experience.period}
      </p>
      <div className="flex-1">
        <h3 className="font-medium text-foreground">
          {experience.title}
          <span className="mx-1 text-muted-foreground">{"·"}</span>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              {experience.company}
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-primary">{experience.company}</span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Section label */}
          <div className="lg:w-2/5">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground lg:sticky lg:top-24">
              Experiencia
            </h2>
          </div>

          {/* Experience list */}
          <div className="flex flex-col gap-2 lg:w-3/5">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.period} experience={exp} />
            ))}

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-2 px-5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Ver curriculum completo
              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
