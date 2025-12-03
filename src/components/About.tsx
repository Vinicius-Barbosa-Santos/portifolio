/* eslint-disable react/jsx-no-target-blank */
export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 md:scroll-mt-24 container mx-auto my-12 max-w-5xl p-4"
    >
      <div className="relative p-4 text-center">
        <h2 className="relative mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-white">Sobre</span>
          <span className="font-handwriting text-4xl text-white">Mim</span>
        </h2>
        <p className="relative text-sm text-white">
          Estou sempre em busca de aprimoramento contínuo, mantendo-me
          atualizado com as últimas tendências e melhores práticas do setor.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-cyan-400/10" />
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          {/* Avatar com brilho */}
          <div className="relative shrink-0">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-500/20 blur-2xl" />
            <div className="h-64 w-64 rounded-3xl bg-[url(https://avatars.githubusercontent.com/u/41848606?v=4)] bg-cover bg-center ring-4 ring-white/20 shadow-2xl md:h-72 md:w-72" />
          </div>

          {/* Cartão glass com informações */}
          <div className="relative flex-1 rounded-2xl bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur md:p-8">
            <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="font-handwriting text-lg font-bold text-white">
                Olá,
              </p>
              <p className="text-white">
                <span className="mr-1">Meu nome é</span>
                <span className="font-headline font-bold tracking-wide text-white">
                  VINICIUS
                </span>
                <br />
                <span className="font-headline font-bold text-white">
                  BARBOSA
                </span>
              </p>

              <table className="mt-5 w-full text-sm text-white">
                <tbody>
                  <tr>
                    <td className="w-32 font-headline font-bold uppercase text-white">
                      Idade:
                    </td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold uppercase text-white">
                      Celular:
                    </td>
                    <td>
                      <a
                        href="https://wa.me/5548992017424"
                        className="underline hover:text-cyan-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +55 48 99201-7424
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold uppercase text-white">
                      Endereço:
                    </td>
                    <td>
                      <a
                        href="https://www.google.com/maps/place/Gov.+Celso+Ramos,+SC,+88190-000/@-27.3153024,-48.5624844,16z/data=!3m1!4b1!4m6!3m5!1s0x952759d8bab09ea1:0x661be0ca9dd5db00!8m2!3d-27.3159368!4d-48.5571297!16s%2Fm%2F09rxwl8?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-cyan-300"
                      >
                        Gov.Celso Ramos - SC
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-headline font-bold uppercase text-white">
                      Disponível:
                    </td>
                    <td>
                      <span className="relative ml-1 inline-flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
