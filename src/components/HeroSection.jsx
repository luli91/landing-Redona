import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/ReDonar_banner2.png"; 

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#C2ECEB] overflow-hidden text-gray-900">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-6 py-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-teal-700"
        >
          Doná lo que ya no usás
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl max-w-xl mx-auto mb-8 text-gray-700"
        >
          Conectamos personas que quieren ayudar con quienes más lo necesitan. Hacé la diferencia y unite a la comunidad.
        </motion.p>
        <motion.a
          href="https://www.integracionav.com.ar/login"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition shadow-lg"
        >
          Empezá a ayudar
        </motion.a>
      </div>

      {/* Imagen decorativa en el pie del Hero */}
      <motion.img
        src={heroImage}
        alt="Decoración Redona"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] md:max-w-[10240px] max-h-[96vh] object-cover z-0 pointer-events-none select-none"
      />
    </div>
  );
};

export default HeroSection;

