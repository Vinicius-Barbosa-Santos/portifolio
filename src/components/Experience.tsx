import { motion } from "framer-motion";
import { HiBriefcase, HiArrowDownTray, HiPhone } from "react-icons/hi2";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Front-end",
      company: "Arizona",
      period: "2021 — Feb 2026",
      summary:
        "Atuação em projetos de alta visibilidade para Bradesco, Vivo, XP, Natura, Electrolux e Grupo Pão de Açúcar, incluindo criação de landing pages, componentes reutilizáveis e páginas de alto tráfego. Migração e otimização da revista digital do GPA, com foco em performance e melhoria do fluxo entre React e a camada de front-end. Experiência em componentização, design systems, acessibilidade, SEO, consumo de APIs e integração com squads multidisciplinares.",
      tags: ["HTML", "CSS", "Javascript", "React"],
    },
  ];

  return (
    <section
      id="experiencia"
      className="scroll-mt-20 md:scroll-mt-24 container mx-auto my-12 max-w-5xl p-4"
    >
      <div className="relative mb-6 p-4 text-center">
        <h2 className="relative mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-white">
            Experiência
          </span>
          <span className="font-handwriting text-4xl text-white">
            Profissional
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-cyan-400/10" />
      </div>

      <div className="mx-auto mb-8 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/vinicius-barbosa-68b722115/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/20"
        >
          <HiArrowDownTray className="h-5 w-5" />
          Baixar currículo (LinkedIn)
          <FaLinkedin className="h-4 w-4" />
        </a>
        <a
          href="https://wa.me/5548992017424"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-cyan-500"
        >
          <HiPhone className="h-5 w-5" />
          Entrar em contato
          <FaWhatsapp className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-start gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-600/20">
              <HiBriefcase className="h-5 w-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-headline text-lg font-extrabold text-white">
                  {exp.role}
                </h3>
                <span className="text-white/70">•</span>
                <span className="text-sm font-semibold text-white/90">
                  {exp.company}
                </span>
                <span className="ml-auto text-xs text-white/60">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/80">{exp.summary}</p>
              {!!exp.tags?.length && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
