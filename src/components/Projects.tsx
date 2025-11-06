/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Modal from "./Modal";

export default function Projects() {
  type Project = {
    title: string;
    image: string;
    link: string;
    github?: string;
    colSpan: string;
    description?: string;
  };

  const projects: Project[] = [
    {
      title: "Projeto Rocketseat Notes",
      image:
        "https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      link: "https://rocketnotes-dev.netlify.app/",
      github: "https://github.com/Vinicius-Barbosa-Santos/rocketseat-notes", // substitua pelo repo do projeto
      colSpan: "col-span-1",
    },
    {
      title: "Electrolux",
      image:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcT5fJ_k7UpD4N2VyYNHqO_5EiLrmwVJgP6WR5i1V-zwJOMB9FIjxHJFDcjsy6xzmw",
      link: "https://storage.googleapis.com/bucket-testehtml8978/production/electrolux/45740/v4/IQ8WS/index.html",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Projeto Jogo da Memória",
      image:
        "https://plus.unsplash.com/premium_photo-1754236809656-827f3d359e6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      link: "https://memory-dev.netlify.app/",
      github:
        "https://github.com/Vinicius-Barbosa-Santos/react_jogo_da_memoria", // substitua pelo repo do projeto
      colSpan: "col-span-1",
    },
    {
      title: "Projeto IFood",
      image:
        "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
      link: "https://fws-foods.netlify.app/",
      github: "https://github.com/Vinicius-Barbosa-Santos/fsw-foods", // substitua pelo repo do projeto
      colSpan: "col-span-1",
    },
    {
      title: "Projeto Watch Me",
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=500&q=60",
      link: "https://watch-me-vinicius.netlify.app/",
      github: "https://github.com/Vinicius-Barbosa-Santos/watch-me", // substitua pelo repo do projeto
      colSpan: "col-span-1",
    },
  ];

  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projetos"
        className="scroll-mt-20 md:scroll-mt-24 rounded-tl-[80px] bg-gradient-to-tr from-slate-950 to-slate-900 text-white md:rounded-tl-[180px]"
      >
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelected(project)}
                className={`group relative h-52 cursor-pointer rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
                aria-label={`Abrir opções para ${project.title}`}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-cyan-600/80 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1 text-sm">
                    <HiArrowTopRightOnSquare className="h-5 w-5" />
                    <span>Ver opções</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <Modal
          open={!!selected}
          title={selected.title}
          onClose={() => setSelected(null)}
          actions={
            <>
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                >
                  Abrir GitHub
                </a>
              )}
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
              >
                Abrir site
              </a>
            </>
          }
        >
          <div
            className="h-40 w-full rounded-lg bg-cover bg-center ring-1 ring-white/10"
            style={{ backgroundImage: `url('${selected.image}')` }}
          />
          {selected.description && (
            <p className="text-sm text-white/80">{selected.description}</p>
          )}
        </Modal>
      )}

      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  );
}
