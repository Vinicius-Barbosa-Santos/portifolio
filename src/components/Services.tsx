import {
  HiComputerDesktop,
} from "react-icons/hi2"

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Typescript, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
  ]

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className=" text-sm text-gray-600">
          Tenho a capacidade de lidar com uma alta demanda de serviços em front-end de forma eficiente e eficaz.
        </p>
      </div>

      <div className="mt-6 flex justify-center md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-2/3 rounded-lg bg-blue-700 p-4 text-white flex flex-col items-center"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
