import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electronico moderna construida con React y Node.js. Incluye carrito de compras, autenticacion de usuarios y pasarela de pagos.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Panel de control interactivo para visualizar datos de negocio en tiempo real con graficos dinamicos y filtros avanzados.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#",
  },
  {
    title: "App de Gestion de Tareas",
    description:
      "Aplicacion web para gestionar tareas y proyectos con funcionalidades de arrastrar y soltar, etiquetas y colaboracion en equipo.",
    tags: ["React", "Firebase", "Drag & Drop", "PWA"],
    link: "#",
  },
  {
    title: "API REST de Microservicios",
    description:
      "Arquitectura de microservicios con autenticacion JWT, documentacion Swagger y despliegue con Docker y Kubernetes.",
    tags: ["Node.js", "Express", "Docker", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Landing Page Creativa",
    description:
      "Pagina de aterrizaje con animaciones fluidas, scroll parallax y diseno responsive optimizado para conversion.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "#",
  },
  {
    title: "Chat en Tiempo Real",
    description:
      "Aplicacion de mensajeria instantanea con salas de chat, notificaciones push y soporte para archivos multimedia.",
    tags: ["React", "Socket.io", "Redis", "WebRTC"],
    link: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-lg border border-transparent p-5 transition-all hover:border-border hover:bg-card/50 sm:flex-row sm:items-start"
    >
      <div className="flex-1">
        <h3 className="flex items-center gap-2 font-medium text-foreground">
          {project.title}
          <ExternalLink
            size={14}
            className="text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Section label for large screens */}
          <div className="lg:w-2/5">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground lg:sticky lg:top-24">
              Proyectos
            </h2>
          </div>

          {/* Project list */}
          <div className="flex flex-col gap-2 lg:w-3/5">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
