import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "contacto@cesarorozco.dev",
    href: "mailto:contacto@cesarorozco.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@ScytherX",
    href: "https://github.com/ScytherX",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Cesar Orozco",
    href: "#",
    icon: Linkedin,
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Section label */}
          <div className="lg:w-2/5">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground lg:sticky lg:top-24">
              Contacto
            </h2>
          </div>

          {/* Contact content */}
          <div className="lg:w-3/5">
            <p className="text-lg leading-relaxed text-foreground">
              {"Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en escribirme. Siempre estoy abierto a nuevas oportunidades y conversaciones."}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon
                    size={20}
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
