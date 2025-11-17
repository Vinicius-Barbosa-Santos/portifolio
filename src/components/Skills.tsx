import { motion } from "framer-motion";
import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiVitest,
} from "react-icons/si";

export default function Skills() {
  const educations = [
    {
      name: "Análise e desenvolvimento de sistemas | FIAP",
    },
    {
      name: "Gestão em tecnologia da informação | FIAP",
    },
  ];

  // imports de ícones adicionais
  type SkillItem = {
    name: string;
    level: number;
    icon?: string; // caminho para imagem em /public/images
    iconNode?: React.ReactNode; // componente de ícone (react-icons)
  };

  const skills: SkillItem[] = [
    { name: "HTML5/CSS3", icon: "images/html.svg", level: 95 },
    { name: "JavaScript", icon: "images/javascript.svg", level: 90 },
    { name: "TypeScript", icon: "images/typescript.svg", level: 95 },
    { name: "React.js", icon: "images/react.svg", level: 90 },
    { name: "React Native", icon: "images/react.svg", level: 75 },
    { name: "Node.js", icon: "images/nodejs.svg", level: 60 },
    {
      name: "Next.js",
      iconNode: <SiNextdotjs className="h-10 w-10 text-white" />,
      level: 85,
    },
    {
      name: "Tailwind CSS",
      iconNode: <SiTailwindcss className="h-10 w-10 text-cyan-400" />,
      level: 90,
    },
    {
      name: "Vite",
      iconNode: <SiVite className="h-10 w-10 text-purple-400" />,
      level: 80,
    },
    {
      name: "Git",
      iconNode: <SiGit className="h-10 w-10 text-orange-500" />,
      level: 85,
    },
    {
      name: "Vitest",
      iconNode: <SiVitest className="h-10 w-10 text-emerald-400" />,
      level: 75,
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 md:scroll-mt-24 rounded-br-[80px] bg-gradient-to-tr from-slate-950 to-slate-900 md:rounded-br-[180px]"
    >
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-white">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-white">Skills</span>
          </h2>
          <p className="relative text-sm text-white">
            Front-end Developer | React.js | TypeScript | JavaScript
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-cyan-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white">
              <HiAcademicCap className="h-8 w-8 text-cyan-500" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white/5 p-4 text-sm font-semibold text-white ring-1 ring-white/10"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white">
              <HiCodeBracketSquare className="h-8 w-8 text-cyan-500" />
              Stacks
            </h3>

            {/* Grid mais bonito visualmente */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={`skill-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="group rounded-xl bg-white/5 p-4 ring-1 ring-white/10 shadow-sm transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-800/40 ring-1 ring-white/10 transition group-hover:ring-cyan-500/40">
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="h-10 w-10 rounded"
                        />
                      ) : (
                        skill.iconNode
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-white text-center">
                      {skill.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
