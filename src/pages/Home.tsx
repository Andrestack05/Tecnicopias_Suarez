import { useState } from "react";
import CallFormModal from "../components/CallFormModal"; // Asegúrate de que el archivo existe

import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/footer";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="relative w-full overflow-hidden">

      {/* Fondo animado con un gif o video */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/printer-background.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Contenido principal */}
        <div className="relative z-10 text-white px-6 py-8 max-w-3xl mx-auto rounded-xl backdrop-blur-md bg-black/60 shadow-2xl border border-white/10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Expertos en Impresoras y Multifuncionales
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Venta, alquiler y servicio técnico especializado en Toshiba y otras marcas.
          </p>
          <a
            href="https://wa.me/573103681052"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            <FaWhatsapp className="text-xl animate-pulse" />
            Cotiza ahora por WhatsApp
          </a>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section
  id="nosotros"
  className="relative z-10 px-6 py-16 md:py-24 text-center text-white"
>
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <img
      src="/bg-nosotros.png"
      alt="Imagen de multifuncional con fondo desenfocado"
      className="w-full h-full object-cover "
    />
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
  </div>

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400 drop-shadow-md">
      ¿Quiénes somos?
    </h2>
    <p className="text-lg leading-relaxed mb-6 drop-shadow-md">
      En <strong>Tecnicopias Suárez</strong> contamos con más de 6 años de experiencia en la venta, alquiler y mantenimiento de impresoras y multifuncionales. Nuestro enfoque principal está en equipos <strong className="text-red-600">Toshiba</strong>, aunque también trabajamos con marcas como <strong>Ricoh</strong> y <strong>Kyocera</strong>. Nos destacamos por brindar un servicio técnico ágil, confiable y con cobertura en Boyacá y otros departamentos.
    </p>
    <a
      href="/productos"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
    >
      Conoce nuestros productos
    </a>
    <div className="relative mt-16 overflow-hidden">
  <div className="flex gap-12 animate-marquee whitespace-nowrap">
    <img src="/logos/toshiba.png" alt="Toshiba" className="h-12 object-contain" />
    <img src="/logos/ricoh.png" alt="Ricoh" className="h-12 object-contain" />
    <img src="/logos/kyocera.png" alt="Kyocera" className="h-12 object-contain" />
    <img src="/logos/hp.png" alt="HP" className="h-12 object-contain" />
    <img src="/logos/samsung.png" alt="Samsung" className="h-12 object-contain" />
    <img src="/logos/canon.png" alt="Canon" className="h-12 object-contain" />
    {/* Duplicado para scroll infinito */}
    <img src="/logos/toshiba.png" alt="Toshiba" className="h-12 object-contain" />
    <img src="/logos/ricoh.png" alt="Ricoh" className="h-12 object-contain" />
    <img src="/logos/kyocera.png" alt="Kyocera" className="h-12 object-contain" />
    <img src="/logos/hp.png" alt="HP" className="h-12 object-contain" />
    <img src="/logos/samsung.png" alt="Samsung" className="h-12 object-contain" />
    <img src="/logos/canon.png" alt="Canon" className="h-12 object-contain" />
  </div>
</div>
  </div>
</section>

{/* Botón flotante "Te llamamos" */}
<button
  onClick={() => setShowModal(true)}
  className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2"
>
  📞 Te llamamos
</button>
{/* Modal de formulario */}
{showModal && <CallFormModal onClose={() => setShowModal(false)} />}

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
