import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="scroll-mt-20 md:scroll-mt-24 rounded-br-[80px] bg-gradient-to-tr from-slate-950 to-slate-900 text-white md:rounded-br-[180px]"
      >
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-14 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl text-slate-300">Olá, me chamo</span>
              <span className="mr-2 font-headline text-5xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Vinicius
              </span>
              <br />
              <span className="font-headline text-5xl font-light text-slate-300">Barbosa</span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-500" />
              Desenvolvedor React.js Front-end
            </h2>

            <p className="mb-8 text-center text-slate-300 md:text-left">
              Meu objetivo como desenvolvedor front-end é criar soluções
              inovadoras que impactem positivamente a sociedade. Tenho um
              compromisso firme em ajudar as empresas em que atuo a alcançarem o
              sucesso, oferecendo serviços profissionais e de excelência.
              Acredito que a tecnologia tem o poder de transformar negócios e
              melhorar a vida das pessoas, e é isso que me motiva diariamente.
            </p>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <a
                href="https://wa.me/5548992017424"
                className="inline-flex items-center rounded-full bg-cyan-600 px-5 py-2 font-bold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-cyan-500 hover:shadow-xl"
              >
                Fale comigo
              </a>
              <a
                href="https://github.com/Vinicius-Barbosa-Santos"
                target="_blank"
                className="inline-flex gap-2 items-center rounded-full bg-white/10 px-5 py-2 font-bold text-white shadow-lg ring-1 ring-white/10 transition hover:bg-white/20 hover:shadow-xl"
                download rel="noreferrer"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </>
  );
}
