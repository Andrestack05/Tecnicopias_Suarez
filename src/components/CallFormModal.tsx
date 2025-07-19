import { useState } from "react";
import { supabase } from "../lib/supabase"; // Asegúrate de que la ruta es correcta

type Props = {
  onClose: () => void;
};

const CallFormModal = ({ onClose }: Props) => {
  const [form, setForm] = useState({
    nombre: "",
    ciudad: "",
    departamento: "",
    correo: "",
    telefono: "",
    autoriza: false,
  });

  const [errors, setErrors] = useState({
    nombre: "",
    ciudad: "",
    departamento: "",
    correo: "",
    telefono: "",
    autoriza: "",
  });

  const validate = (name: string, value: string | boolean) => {
    switch (name) {
      case "nombre":
        return value ? "" : "Por favor ingresa tu nombre.";
      case "ciudad":
        return value ? "" : "Por favor ingresa tu ciudad.";
      case "departamento":
        return value ? "" : "Selecciona un departamento.";
      case "correo":
        return /\S+@\S+\.\S+/.test(value as string)
          ? ""
          : "Ingresa un correo válido.";
      case "telefono":
        return /^[0-9]{7,15}$/.test(value as string)
          ? ""
          : "Ingresa un teléfono válido (solo números).";
      case "autoriza":
        return value ? "" : "Debes autorizar el contacto.";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    const fieldValue = type === "checkbox" ? checked : value;
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, fieldValue),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validar todos los campos antes de enviar
    const newErrors: typeof errors = {
      nombre: validate("nombre", form.nombre),
      ciudad: validate("ciudad", form.ciudad),
      departamento: validate("departamento", form.departamento),
      correo: validate("correo", form.correo),
      telefono: validate("telefono", form.telefono),
      autoriza: validate("autoriza", form.autoriza),
    };
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some((msg) => msg);
    if (hasError) return;

    // Guardar en Supabase
    const { error } = await supabase.from("llamadas").insert([
      {
        nombre: form.nombre,
        ciudad: form.ciudad,
        departamento: form.departamento,
        correo: form.correo,
        telefono: form.telefono,
        autoriza: form.autoriza,
      },
    ]);

    if (error) {
      console.error("Error al guardar:", error.message);
      alert("Ocurrió un error al enviar tu solicitud.");
      return;
    }

    alert("¡Solicitud enviada con éxito!");
    onClose();
  };

  // Función para saber si el formulario es válido
  const isFormValid =
    Object.values(form).every((v) => (typeof v === "boolean" ? v : !!v)) &&
    Object.values(errors).every((msg) => !msg);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white/10 text-white p-6 rounded-xl w-full max-w-md border border-white/20 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-xl font-bold hover:text-red-400"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-400">
          Agenda tu llamada
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              className="w-full bg-black/30 border border-white/20 p-2 rounded placeholder-gray-300"
            />
            {errors.nombre && (
              <span className="text-red-400 text-xs">{errors.nombre}</span>
            )}
          </div>
          <div>
            <input
              name="ciudad"
              value={form.ciudad}
              onChange={handleChange}
              placeholder="Ciudad"
              required
              className="w-full bg-black/30 border border-white/20 p-2 rounded placeholder-gray-300"
            />
            {errors.ciudad && (
              <span className="text-red-400 text-xs">{errors.ciudad}</span>
            )}
          </div>
          <div>
            <select
              name="departamento"
              value={form.departamento || ""}
              onChange={handleChange}
              required
              className="w-full bg-black/30 border border-white/20 p-2 rounded text-white"
            >
              <option value="">Selecciona un departamento</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Arauca">Arauca</option>
              <option value="Atlántico">Atlántico</option>
              <option value="Bolívar">Bolívar</option>
              <option value="Boyacá">Boyacá</option>
              <option value="Caldas">Caldas</option>
              <option value="Caquetá">Caquetá</option>
              <option value="Casanare">Casanare</option>
              <option value="Cauca">Cauca</option>
              <option value="Cesar">Cesar</option>
              <option value="Chocó">Chocó</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Guainía">Guainía</option>
              <option value="Guaviare">Guaviare</option>
              <option value="Huila">Huila</option>
              <option value="La Guajira">La Guajira</option>
              <option value="Magdalena">Magdalena</option>
              <option value="Meta">Meta</option>
              <option value="Nariño">Nariño</option>
              <option value="Norte de Santander">Norte de Santander</option>
              <option value="Putumayo">Putumayo</option>
              <option value="Quindío">Quindío</option>
              <option value="Risaralda">Risaralda</option>
              <option value="San Andrés y Providencia">San Andrés y Providencia</option>
              <option value="Santander">Santander</option>
              <option value="Sucre">Sucre</option>
              <option value="Tolima">Tolima</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Vaupés">Vaupés</option>
              <option value="Vichada">Vichada</option>
            </select>
            {errors.departamento && (
              <span className="text-red-400 text-xs">{errors.departamento}</span>
            )}
          </div>
          <div>
            <input
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Correo electrónico"
              type="email"
              required
              className="w-full bg-black/30 border border-white/20 p-2 rounded placeholder-gray-300"
            />
            {errors.correo && (
              <span className="text-red-400 text-xs">{errors.correo}</span>
            )}
          </div>
          <div>
            <input
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              required
              className="w-full bg-black/30 border border-white/20 p-2 rounded placeholder-gray-300"
            />
            {errors.telefono && (
              <span className="text-red-400 text-xs">{errors.telefono}</span>
            )}
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="autoriza"
              checked={form.autoriza}
              onChange={handleChange}
              required
            />
            Autorizo ser contactado por Tecnicopias Suárez.
          </label>
          {errors.autoriza && (
            <span className="text-red-400 text-xs">{errors.autoriza}</span>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid}
          >
            Agendar llamada
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallFormModal;
