import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="scroll-mt-20 md:scroll-mt-24 rounded-br-[80px] bg-gradient-to-tr from-slate-950 to-slate-900 text-white md:rounded-br-[180px] animate-[fadeIn_0.8s_ease-out_both]"
      >
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-14 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl text-slate-300">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Vinicius
              </span>
              <br />
              <span className="font-headline text-5xl font-light text-slate-300">
                Barbosa
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-500" />
              Desenvolvedor React Pleno
            </h2>

            <p className="mb-8 text-center text-slate-300 md:text-left">
              Desenvolvedor React Pleno com foco em interfaces escaláveis e de
              alta qualidade usando React 18, TypeScript e Next.js. Experiência
              em componentização, acessibilidade, performance, testes e boas
              práticas de UI. Entrego produtos com previsibilidade, atenção ao
              detalhe e impacto no negócio.
            </p>

            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-3 w-full">
              <a
                href="https://wa.me/5548992017424"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-4 py-2 md:px-5 md:py-2 w-full sm:w-auto text-sm md:text-base font-bold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-cyan-500 hover:shadow-xl"
              >
                Fale comigo
              </a>
              <a
                href="https://github.com/Vinicius-Barbosa-Santos"
                target="_blank"
                className="inline-flex gap-2 items-center justify-center rounded-full bg-white/10 px-4 py-2 md:px-5 md:py-2 w-full sm:w-auto text-sm md:text-base font-bold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-white/20 hover:shadow-xl"
                download
                rel="noreferrer"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vinicius-barbosa-68b722115/"
                target="_blank"
                className="inline-flex gap-2 items-center justify-center rounded-full bg-[#0A66C2] px-4 py-2 md:px-5 md:py-2 w-full sm:w-auto text-sm md:text-base font-bold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-[#084d99] hover:shadow-xl"
                rel="noreferrer"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:hidden">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs ring-1 ring-white/20">
                <SiReact className="h-4 w-4 text-cyan-400" />
                React
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs ring-1 ring-white/20">
                <SiTypescript className="h-4 w-4 text-blue-400" />
                TypeScript
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs ring-1 ring-white/20">
                <SiTailwindcss className="h-4 w-4 text-cyan-300" />
                Tailwind
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs ring-1 ring-white/20">
                <SiNextdotjs className="h-4 w-4 text-white" />
                Next.js
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs ring-1 ring-white/20">
                <SiNodedotjs className="h-4 w-4 text-green-500" />
                Node.js
              </span>
            </div>
          </div>

          <div className="basis-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative h-56 w-56 md:h-80 md:w-80 rounded-3xl ring-4 ring-white/10 shadow-2xl bg-cover bg-center brightness-75 saturate-75"
                style={{
                  backgroundImage:
                    "url('https://avatars.githubusercontent.com/u/41848606?v=4')",
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-black/40" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-6 rounded-[2rem] bg-cyan-500/20 blur-2xl"
                aria-hidden="true"
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-6 left-0 hidden md:inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm ring-1 ring-white/20"
              >
                <SiReact className="h-4 w-4 text-cyan-400" />
                React
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-10 -right-6 hidden md:inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm ring-1 ring-white/20"
              >
                <SiTypescript className="h-4 w-4 text-blue-400" />
                TypeScript
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 left-6 hidden md:inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm ring-1 ring-white/20"
              >
                <SiTailwindcss className="h-4 w-4 text-cyan-300" />
                Tailwind
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute bottom-10 -right-8 hidden md:inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm ring-1 ring-white/20"
              >
                <SiNextdotjs className="h-4 w-4 text-white" />
                Next.js
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute top-1/2 -left-10 hidden md:inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm ring-1 ring-white/20"
              >
                <SiNodedotjs className="h-4 w-4 text-green-500" />
                Node.js
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </>
  );
}
