import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ScytherX",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "#contacto",
    icon: Mail,
  },
];

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left column - sticky info */}
        <div className="flex flex-col gap-6 lg:w-2/5">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">Cesar Orozco</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-primary">
              Desarrollador Web
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Creo experiencias digitales accesibles y de alto
              rendimiento para la web.
            </p>
          </div>

          {/* Navigation hints */}
          <nav className="hidden flex-col gap-3 lg:flex" aria-label="Secciones">
            {[
              { label: "SOBRE MI", href: "#sobre-mi" },
              { label: "PROYECTOS", href: "#proyectos" },
              { label: "EXPERIENCIA", href: "#experiencia" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right column - about */}
        <div id="sobre-mi" className="lg:w-3/5">
          <p className="text-base leading-relaxed text-muted-foreground">
            Soy un desarrollador apasionado por crear interfaces que combinan
            un{" "}
            <span className="font-medium text-foreground">
              {"diseno cuidado"}
            </span>{" "}
            con una{" "}
            <span className="font-medium text-foreground">
              ingenieria robusta
            </span>
            . Mi trabajo favorito se encuentra en la interseccion del diseno y el
            desarrollo, creando experiencias que no solo se ven geniales sino que
            estan construidas para el rendimiento y la usabilidad.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            He tenido la oportunidad de desarrollar software en una variedad de
            entornos, desde{" "}
            <span className="font-medium text-foreground">
              proyectos personales
            </span>{" "}
            hasta{" "}
            <span className="font-medium text-foreground">
              colaboraciones en equipo
            </span>
            . Me especializo en tecnologias web modernas y siempre estoy
            aprendiendo nuevas herramientas y tecnicas.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Cuando no estoy programando, me encuentro explorando nuevas
            tecnologias, contribuyendo a proyectos open source, o disfrutando de
            un buen cafe mientras leo sobre las ultimas tendencias en
            desarrollo web.
          </p>
        </div>
      </div>
    </section>
  );
}
