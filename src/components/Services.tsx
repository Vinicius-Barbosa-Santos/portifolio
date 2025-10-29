import {
  HiCommandLine,
  HiComputerDesktop,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Typescript, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description: "Desenvolvimento de aplicativos Android e iOS.",
      icon: <HiDevicePhoneMobile className="h-12 w-12" />,
    },
  ];

  return (
    <section id="servicos" className="scroll-mt-16 md:scroll-mt-20 container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-cyan-400">O que faço de melhor</p>
        <h2 className="mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Meus</span>
          <span className="font-handwriting text-4xl text-cyan-300">Serviços</span>
        </h2>
        <p className="text-sm text-slate-400">
          Posso atender uma gama completa de serviços, do front-end ao back-end com banco de dados e sistemas.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            className="group rounded-2xl bg-white/5 p-5 text-slate-200 shadow-sm ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
            key={`service-${index}`}
          >
            <div className="mb-3 text-cyan-400 transition group-hover:text-cyan-300">{service.icon}</div>
            <h3 className="mb-1 text-lg font-bold">{service.title}</h3>
            <p className="text-sm text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
