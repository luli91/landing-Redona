import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    nombre: "Luisa G.",
    ciudad: "Merlo, Buenos Aires",
    frase:
      "Encontré lo que necesitaba sin pagar nada. Redona me ayudó cuando más lo necesitaba.",
    imagen: "/img/adolecente.png",
  },
  {
    nombre: "Martín R.",
    ciudad: "La Plata",
    frase:
      "Doné una mochila que ya no usábamos. La sonrisa de quien la recibió fue todo.",
    imagen: "/img/hombre.png",
  },
  {
    nombre: "Ana M.",
    ciudad: "San Miguel",
    frase:
      "Me sorprendió lo fácil que fue publicar y entregar. Redona es cercanía real.",
    imagen: "/img/mujer.png",
  },
];

const Testimonials = () =>  {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6000ms = 6 segundos

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[index];

  return (
    <section className="bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Cada historia deja una huella</h2>
        <p className="mt-4 text-lg text-gray-600">
          Lo que para vos es un objeto en desuso, para otros puede ser un motivo para sonreír. Gracias por hacerlo posible.
        </p>

        {/* Carrusel animado */}
        <div className="mt-12 relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.nombre}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="px-6"
            >
              <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
                <p>“{item.frase}”</p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="mx-auto size-10 rounded-full object-cover"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">{item.nombre}</div>
                  <svg width={3} height={3} viewBox="0 0 2 2" className="fill-gray-900">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-gray-600">{item.ciudad}</div>
                </div>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
