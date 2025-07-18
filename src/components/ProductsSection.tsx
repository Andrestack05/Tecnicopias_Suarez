import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Product = {
  name: string;
  image: string;
  specs: string[];
};

const products: Product[] = [
  {
    name: "Toshiba 4540C",
    image: "/products/T4540C.png",
    specs: ["Color", "Velocidad: 45 ppm", "Doble cara", "Escáner incluido", "Tamaño: A3/A4"],
  },
  {
    name: "Toshiba 4555C",
    image: "/products/T4555C.png",
    specs: ["Color", "Velocidad: 55 ppm", "Doble cara", "Escáner incluido", "Red y USB"],
  },
  {
    name: "Toshiba 4515AC",
    image: "/products/T4515AC.png",
    specs: ["Color", "Velocidad: 45 ppm", "Panel táctil", "Escáner dúplex", "Tamaño: A4/A3"],
  },
  {
    name: "Toshiba 5516AC",
    image: "/products/T5516AC.png",
    specs: ["Color", "Velocidad: 55 ppm", "Doble cara automática", "Escaneo a red", "Pantalla 10”"],
  },
  {
    name: "Toshiba 2802AF",
    image: "/products/T2802AF.png",
    specs: ["Blanco y negro", "Velocidad: 28 ppm", "Impresión USB", "Copiado", "Tamaño A4"],
  },
  {
    name: "Toshiba 2809A",
    image: "/products/T2809A.png",
    specs: ["Blanco y negro", "Velocidad: 28 ppm", "Compacta", "Escáner y copiado", "Tamaño A4"],
  },
];

const ProductCard = ({
  product,
  onImageClick,
}: {
  product: Product;
  onImageClick: (src: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-green-500/40 flex flex-col items-center border border-white/10 max-w-xs w-full mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 object-contain mb-4 drop-shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => onImageClick(product.image)}
      />
      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-green-400 hover:underline"
      >
        {open ? "Ocultar especificaciones" : "Mostrar especificaciones"}
      </button>

      {open && (
        <ul className="mt-3 text-sm text-gray-300 list-disc list-inside text-left w-full">
          {product.specs.map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>
      )}

      {/* Botón de cotizar */}
      <a
        href={`https://wa.me/573219508837?text=Hola%2C%20quiero%20cotizar%20el%20producto%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition duration-300"
      >
        <FaWhatsapp className="text-xl animate-pulse" />
        Cotizar este producto
      </a>
    </div>
  );
};

const Products = () => {
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
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#a8edea] text-white">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
        Nuestros Equipos
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto items-start">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onImageClick={(src) => {
              setPopupImage(src);
              setShowPopup(true);
            }}
          />
        ))}
      </div>

      {/* Popup */}
      {popupImage && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closePopup}
        >
          <img
            src={popupImage}
            alt="Vista ampliada"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};



export default Products;
