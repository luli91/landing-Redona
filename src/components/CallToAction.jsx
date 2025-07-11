import React from "react";

const CallToAction = () => {
  return (
    <section className="relative bg-white px-6 py-24 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12">
        {/* Texto + Imagen lateral grande */}
        <div className="relative px-6 md:px-12 lg:px-16">
          <div className="md:flex md:items-start md:gap-8">
            {/* Texto */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Transformá lo que ya no usás en nuevas oportunidades
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                Conectá con quienes más lo necesitan, de forma cercana, gratuita y segura.
                Cada objeto tiene el poder de cambiar una historia.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.integracionav.com.ar/login"
                  className="inline-block rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-teal-700 transition"
                >
                  Empezá a ayudar hoy
                </a>
              </div>
            </div>

            {/* Imagen grande junto al texto */}
            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/img/ropa.jpg"
                  alt="Ropa en buen estado"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Galería debajo del botón */}
          <div className="relative h-[420px] px-6 md:px-12 lg:px-16">
            {/* Imagen central grande */}
            <div className="absolute top-1/2 left-1/2 w-[32rem]  h-96 transform -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-xl z-10">
              <img
                src="/img/alimentos.jpeg"
                alt="Alimentos para donar"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Imagen izquierda superior */}
            <div className="absolute top-8 left-0 w-96 h-64 rounded-xl overflow-hidden shadow-lg z-0">
                <img
                    src="/img/niños.jpg"
                    alt="Niños felices recibiendo"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Imagen derecha inferior */}
            <div className="absolute bottom-8 right-0 w-96 h-64 rounded-xl overflow-hidden shadow-lg z-0">
                <img
                    src="/img/adultos_mayores.jpg"
                    alt="Personas mayores recibiendo ayuda"
                    className="object-cover w-full h-full"
                />
            </div>      
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
