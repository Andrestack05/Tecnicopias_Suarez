import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-green-900/80 backdrop-blur-sm shadow-lg transition-all duration-300">
      <nav className="container mx-auto px-4 h-20 flex justify-between items-center font-[Poppins] text-white">
        
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
  <img src="/tecnicopias-logo.png" alt="Logo" className="h-18" />
  <div className="flex flex-col leading-tight">
    <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
      Tecnicopias Suárez
    </span>
    <span className="text-sm italic text-green-300">
      Calidad y servicio
    </span>
  </div>
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm md:text-base items-center">
          <li><Link to="/" className="hover:text-[#FFC107] transition">Inicio</Link></li>
          <li><Link to="/productos" className="hover:text-[#FFC107] transition">Productos</Link></li>
          <li><Link to="/nosotros" className="hover:text-[#FFC107] transition">Nosotros</Link></li>
          <li><Link to="/contacto" className="hover:text-[#FFC107] transition">Contacto</Link></li>
          <li><Link to="/admin" className="hover:text-[#FFC107] transition">Admin</Link></li>

          {/* Botón WhatsApp */}
          <li>
            <a
              href="https://wa.me/573103681052"
              target="_blank"
              className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-[#00e676] hover:text-white transition-all duration-300 shadow-md"
            >
              <FaWhatsapp className="text-xl animate-pulse" />
              Cotizar
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2E7D32] px-4 pb-4 text-white">
          <ul className="flex flex-col gap-4 pt-4 text-lg">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
            <li><Link to="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
            <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
            <li><Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link></li>
            <li>
              <a
                href="https://wa.me/573001112222"
                target="_blank"
                className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-[#00e676] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp className="text-xl animate-pulse" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
