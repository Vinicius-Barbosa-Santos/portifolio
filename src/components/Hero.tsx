/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { HiDownload } from "react-icons/hi"

export default function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Vinicius
              </span>
              <br />
              <span className="font-headline text-5xl font-light text-blue-400">
                Barbosa
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-800" />
              Desenvolvedor React.js Front-end
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
            Meu objetivo como desenvolvedor front-end é criar soluções inovadoras que impactem positivamente a sociedade. Tenho um compromisso firme em ajudar as empresas em que atuo a alcançarem o sucesso, oferecendo serviços profissionais e de excelência. Acredito que a tecnologia tem o poder de transformar negócios e melhorar a vida das pessoas, e é isso que me motiva diariamente.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a
                href="https://wa.me/5548992017424"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a
                href="https://github.com/Vinicius-Barbosa-Santos/Vinicius-Barbosa-Santos/blob/master/Profile.pdf"
                target="_blank"
                className="button flex items-center gap-2 text-gray-600 hover:text-gray-200"
                download={'Profile.pdf'}
              >
                <HiDownload />
                Baixe meu CV
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </>
  )
}
