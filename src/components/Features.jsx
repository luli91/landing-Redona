import React from "react";
import {
  FaCloudUploadAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaMagic,
} from "react-icons/fa";

const features = [
  {
    name: "Doná en segundos",
    description:
      "Subí lo que querés regalar en pocos pasos. Sin comisiones, sin complicaciones.",
    icon: FaCloudUploadAlt,
  },
  {
    name: "Ubicación visible",
    description:
      "Cada donación muestra ciudad y provincia para que quien la necesita sepa dónde está disponible.",
    icon: FaMapMarkerAlt,
  },
  {
    name: "Vos tenés el control",
    description:
      "Podés editarla, ocultarla, mostrarla o cambiar su estado: entregada, cancelada o pendiente.",
    icon: FaShieldAlt,
  },
  {
    name: "Solidaridad con impacto",
    description:
      "Hay muchas personas esperando ayuda. Con un clic pueden contactarte directamente para recibir lo que necesitan.",
    icon: FaMagic,
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-24 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
            Características clave
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Lo que hace única a Redona
          </p>
          <p className="mt-6 text-lg text-gray-700">
            Cada detalle está pensado para que donar sea una experiencia empática, fácil y segura.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-lg font-medium text-gray-900 leading-6">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                    <feature.icon size={24} className="text-teal-600" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
