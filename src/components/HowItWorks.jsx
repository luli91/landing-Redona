import React from "react";
import { FaBoxOpen, FaEdit, FaEnvelopeOpenText } from "react-icons/fa";

const steps = [
  {
    title: "Cargá tu donación",
    description:
      "Subí lo que querés donar: nombre, cantidad y categoría. Es rápido y gratuito.",
    icon: <FaBoxOpen size={36} className="text-teal-600" />,
  },
  {
    title: "Gestioná tu publicación",
    description:
      "Editás desde 'Mis Publicaciones': foto, mensaje, descripción, estado y visibilidad.",
    icon: <FaEdit size={36} className="text-teal-600" />,
  },
  {
    title: "Compartí y recibí interés",
    description:
      'Al hacerla visible, aparece en "Publicaciones". Otros usuarios pueden enviarte un mail con "Quiero esta donación".',
    icon: <FaEnvelopeOpenText size={36} className="text-teal-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-[#C2ECEB] text-gray-800 px-6"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
          ¿Cómo funciona Redona?
        </h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Desde la carga del producto hasta el contacto con quien lo necesita — un flujo simple y empático.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
