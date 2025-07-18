import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const insumos = [
  {
    name: "Recarga 250gr tóner serie 55 o superior",
    image: "/insumos/TONER55+.png",
    price: "$135.000 COP",
    buttonLabel: "Realizar pedido",
  },
  {
    name: "Recarga 250gr tóner serie 40 o inferior",
    image: "/insumos/TONER40-.png",
    price: "$115.000 COP",
    buttonLabel: "Realizar pedido",
  },
  {
    name: "Tóner negro (kilo) serie 40 o inferior",
    image: "/insumos/TONERKILON.png",
    price: "$245.000 COP",
    buttonLabel: "Realizar pedido",
  },
  {
    name: "Tóner original Toshiba serie 55",
    image: "/insumos/TONERORIGINAL55C.png",
    price: "$395.000 COP",
    buttonLabel: "Realizar pedido",
  },
  {
    name: "Tóner original Toshiba 05AC / 15AC",
    image: "/insumos/TONERORIGINAL05AC.png",
    price: "$410.000 COP",
    buttonLabel: "Realizar pedido",
  },
  {
    name: "¿Necesitas otro insumo o servicio técnico?",
    image: "/insumos/ST.png",
    price: "¡Escríbenos y lo conseguimos por ti!",
    buttonLabel: "Agendar",
  },
];

const InsumosSection = () => {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setPopupImage(null), 300);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-black via-[#0f2027] to-[#1a1a1a] text-white">

      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-12">
        Insumos y Recargas
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-start">
        {insumos.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-6 flex flex-col items-center border border-white/10 hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 object-contain mb-4 cursor-pointer drop-shadow-lg"
              onClick={() => {
                setPopupImage(item.image);
                setShowPopup(true);
              }}
            />
            <h3 className="text-xl font-semibold text-white text-center">
              {item.name}
            </h3>
            <p className="text-green-300 mt-2 text-center">{item.price}</p>
            <a
              href={`https://wa.me/573219508837?text=Hola%2C%20quiero%20${encodeURIComponent(item.buttonLabel.toLowerCase())}%20sobre:%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition duration-300"
            >
              <FaWhatsapp className="text-xl animate-pulse" />
              {item.buttonLabel}
            </a>
          </div>
        ))}
      </div>

      {popupImage && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 ${showPopup ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={closePopup}
        >
          <img
            src={popupImage}
            alt="Vista ampliada"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default InsumosSection;
