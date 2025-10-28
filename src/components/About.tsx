/* eslint-disable react/jsx-no-target-blank */
export default function About() {
  return (
    <section id="sobre" className="scroll-mt-16 md:scroll-mt-20 container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Estou sempre em busca de aprimoramento contínuo, mantendo-me
          atualizado com as últimas tendências e melhores práticas do setor.
          Tenho um interesse genuíno em aprender novas tecnologias e explorar
          formas inovadoras de criar interfaces intuitivas e visualmente
          atraentes para os usuários.
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-black-100/40" />
      </div>
      {/* restante inalterado */}
      <div className="mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-2xl bg-white/60 p-6 ps-24 shadow-xl backdrop-blur-md md:h-64 md:ps-48">
          <div className="relative h-full w-full rounded-2xl bg-gray-50/70 p-6 ring-1 ring-gray-200/50">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Vinicius Barbosa
              </span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td className="text-gray-800">28</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="https://wa.me/5548992017424"
                      className="underline hover:text-blue-800"
                    >
                      +55 48 99201-7424
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://www.google.com/maps/place/Gov.+Celso+Ramos,+SC,+88190-000/@-27.3153024,-48.5624844,16z/data=!3m1!4b1!4m6!3m5!1s0x952759d8bab09ea1:0x661be0ca9dd5db00!8m2!3d-27.3159368!4d-48.5571297!16s%2Fm%2F09rxwl8?entry=ttu"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      Gov.Celso Ramos - SC
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-24 rounded-2xl bg-gray-600 bg-[url(https://avatars.githubusercontent.com/u/41848606?v=4)] bg-cover bg-center ring-4 ring-white shadow-2xl md:-left-12 md:-top-12 md:h-64 md:w-64 md:rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
