import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import redonaLogo from "../assets/ReDona_logo.png"; 

const Footer = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
    .then(() => {
      setStatusMessage("✅ ¡Gracias! Tu mensaje fue enviado con éxito 💚");
      form.current.reset(); 
    }, () => {
      setStatusMessage("⚠️ Ups... no se pudo enviar el mensaje. Intentá de nuevo.");
    });
  };

  return (
    <footer id="contact" className="bg-gradient-to-t from-[#C2ECEB] to-white px-6 py-16 text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Bloque emocional */}
        <div>
          <img src={redonaLogo} alt="Logo Redona" className="w-20 mb-4" />
          <h2 className="text-xl font-semibold">Gracias por ser parte</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Redona es más que una plataforma: es un puente entre personas. Lo que vos compartís puede transformar una realidad.
          </p>
          <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Redona</p>
        </div>

        {/* Navegación resumida */}
        <div className="space-y-3 flex flex-col items-center pt-6 text-center">
          <h3 className="text-lg font-medium">Enlaces</h3>
          <ul className="text-gray-700">
            <li><a href="#how-it-works" className="hover:text-teal-600">Cómo funciona</a></li>
            <li><a href="#features" className="hover:text-teal-600">¿Por qué donar?</a></li>
            <li><a href="#contact" className="hover:text-teal-600">Contacto</a></li>
            <li><a href="https://www.integracionav.com.ar/login" className="hover:text-teal-600">Empezar</a></li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <h3 className="text-lg font-medium">Escribinos</h3>
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Tu mensaje"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Enviar mensaje
          </button>

          {/* Cartel visual con estado */}
          {statusMessage && (
            <div className="bg-teal-100 border border-teal-300 text-teal-700 mt-4 px-4 py-2 rounded-md text-center">
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </footer>
  );
};

export default Footer;
