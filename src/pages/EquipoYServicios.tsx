import { useState } from "react";
import { FaTools, FaPrint, FaFileAlt, FaTruck } from "react-icons/fa";

type Persona = {
  nombre: string;
  cargo: string;
  titulo: string;
  descripcion: string;
  fotografia: string;
};

const equipo: Persona[] = [
  {
    nombre: "Ivan Suárez",
    cargo: "CEO & Fundador",
    titulo: "Ingeniero Certificado por Toshiba",
    descripcion:
      "Apasionado por la tecnología y la eficiencia. Ivan lidera nuestra visión estratégica y desarrollo digital.",
      fotografia: "/assets/team1.png",
  },
  {
    nombre: "Viviana Suárez",
    cargo: "Jefe de Operaciones",
    titulo: "Administradora de Empresas",
    descripcion:
      "Especialista en logística y atención al cliente. Asegura que todos nuestros procesos funcionen con eficiencia y calidad.",
      fotografia: "/assets/team2.png"
  },
  {
    nombre: "Andrés Suárez",
    cargo: "Técnico Especializado",
    titulo: "Ingeniero de Sistemas",
    descripcion:
      "Encargado de brindar mantenimiento profesional y soluciones técnicas precisas en todos los equipos.",
      fotografia: "/assets/team3.png"
  },
];

const EquipoYServicios = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0d1117] text-white min-h-screen pt-1 px-6">
      {/* Nuestro Equipo */}
      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          Nuestro Equipo
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {equipo.map((persona, index) => (
            <div
              key={index}
              className="bg-[#2a2f3b] rounded-xl p-6 shadow-xl flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <div className="w-24 h-24 rounded-full border-4 border-green-400 flex items-center justify-center text-white text-center mb-4 overflow-hidden">
                <img
                  src={persona.fotografia}
                  alt={persona.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{persona.nombre}</h3>
              <p className="text-green-400 font-medium">{persona.cargo}</p>
              <p className="text-sm text-gray-300">{persona.titulo}</p>

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="mt-3 text-green-400 hover:underline"
              >
                {expandedIndex === index ? "Ver menos" : "Ver más"}
              </button>

              {expandedIndex === index && (
                <p className="mt-3 text-sm text-gray-200 text-center">
                  {persona.descripcion}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ¿Qué ofrecemos? */}
      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          ¿Qué ofrecemos?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-700/10 backdrop-blur-sm p-6 rounded-xl text-center border border-green-500 hover:scale-105 transition-transform shadow-lg">
            <FaTools className="text-4xl mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Servicio técnico</h3>
            <p className="text-gray-300 text-sm">
              Reparación profesional de multifuncionales Toshiba, Kyocera, Ricoh y más.
            </p>
          </div>

          <div className="bg-blue-700/10 backdrop-blur-sm p-6 rounded-xl text-center border border-blue-500 hover:scale-105 transition-transform shadow-lg">
            <FaPrint className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Venta de equipos</h3>
            <p className="text-gray-300 text-sm">
              Nuevos y remanufacturados con garantía de 1 año directamente con nosotros.
            </p>
          </div>

          <div className="bg-purple-700/10 backdrop-blur-sm p-6 rounded-xl text-center border border-purple-500 hover:scale-105 transition-transform shadow-lg">
            <FaTruck className="text-4xl mx-auto text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Renta de impresoras</h3>
            <p className="text-gray-300 text-sm">
              Alquiler de multifuncionales para empresas, instituciones y eventos.
            </p>
          </div>

          <div className="bg-yellow-700/10 backdrop-blur-sm p-6 rounded-xl text-center border border-yellow-500 hover:scale-105 transition-transform shadow-lg">
            <FaFileAlt className="text-4xl mx-auto text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Impresión a gran volumen</h3>
            <p className="text-gray-300 text-sm">
              Servicio de impresión de guías, documentos empresariales, tesis y más.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipoYServicios;
