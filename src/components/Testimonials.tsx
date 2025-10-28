import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section id="linkedin" className="scroll-mt-16 md:scroll-mt-20 container mx-auto max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="font-handwriting text-4xl text-blue-800">
            Linkedin
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
      </div>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
            Vinicius é a típica pessoa que surpreende a todos com seu
            conhecimento. Tenho o prazer de recomendá-lo como Desenvolvedor Web
            FullStack. Durante o tempo em que trabalhei com Vinicius, pude
            encontrar uma inspiração para seguir no desenvolvimento web com
            React. Elaboramos diversas ideias de projetos e hoje seguimos com
            conhecimentos atuais do mercado FullStack.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <div className="flex items-center divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">
              José Víctor (Víctor) Ardasse
            </div>
            <div className="pl-3 text-sm font-light text-gray-500">
              Arizona.com
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
