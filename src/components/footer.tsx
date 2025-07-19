import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-8 text-sm">
        {/* Contacto principal */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-2">Contacto</h3>
          <p>Calle 10 #5-45, Duitama, Boyacá</p>
          <p>Colombia</p>
          <p><FaPhone className="inline mr-2" /> Servicio técnico: 314 323 1244</p>
          <p><FaWhatsapp className="inline mr-2" /> Cotizaciones: 310 368 1052</p>
          <p>Email: Tecnicopiasuarez@gmail.com</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-2">Enlaces</h3>
          <ul className="space-y-1">
            <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="/productos" className="hover:underline">Productos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Síguenos</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/tecnicopiassuarez07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </a>
            <a href="https://wa.me/573103681052" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Tecnicopias Suárez. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
