import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; // Asegúrate de tener esta configuración exportada desde lib/supabase.ts

type Llamada = {
  id: string;
  nombre: string;
  ciudad: string;
  departamento: string;
  correo: string;
  telefono: string;
  autoriza: boolean;
  creado?: string;
  created_at?: string;
  atendido?: boolean;
};

const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [llamadas, setLlamadas] = useState<Llamada[]>([]);

  const handleAccess = () => {
    if (input === "tecnicopias2019") {
      setAuthorized(true);
      fetchData();
    } else {
      alert("Clave incorrecta");
    }
  };

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("llamadas")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error cargando datos:", error);
    } else {
      setLlamadas(data as Llamada[]);
    }
  };

  const marcarComoAtendido = async (id: string) => {
    const { error } = await supabase
      .from("llamadas")
      .update({ atendido: true })
      .eq("id", id);

    if (error) {
      alert("Error al actualizar el estado");
    } else {
      fetchData();
    }
  };

  const eliminarRegistro = async (id: string) => {
    const confirmacion = confirm("¿Estás seguro de eliminar este registro?");
    if (!confirmacion) return;

    const { error } = await supabase.from("llamadas").delete().eq("id", id);
    if (error) {
      alert("Error al eliminar el registro");
    } else {
      fetchData();
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4">Ingresa la clave de administrador</h2>
        <input
          type="password"
          className="p-2 rounded bg-[#1a1a1a] text-white border border-gray-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="mt-4 bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
          onClick={handleAccess}
        >
          Ingresar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">
        Solicitudes de Llamadas
      </h1>

      {llamadas.length === 0 ? (
        <p className="text-center text-gray-400">No hay solicitudes registradas aún.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg text-sm">
            <thead>
              <tr className="bg-green-800/30 text-left text-green-300 uppercase">
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Ciudad</th>
                <th className="px-4 py-2">Departamento</th>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Teléfono</th>
                <th className="px-4 py-2">Autorización</th>
                <th className="px-4 py-2">Fecha</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {llamadas.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#2c2c2c] border-b border-gray-700"
                >
                  <td className="px-4 py-2">{item.nombre}</td>
                  <td className="px-4 py-2">{item.ciudad}</td>
                  <td className="px-4 py-2">{item.departamento}</td>
                  <td className="px-4 py-2">{item.correo}</td>
                  <td className="px-4 py-2">{item.telefono}</td>
                  <td className="px-4 py-2">{item.autoriza ? "Sí" : "No"}</td>
                  <td className="px-4 py-2">
                    {new Date(item.creado || item.created_at).toLocaleString("es-CO")}
                  </td>
                  <td className="px-4 py-2">
                    {item.atendido ? (
                      <span className="text-green-400">Atendido</span>
                    ) : (
                      <button
                        onClick={() => marcarComoAtendido(item.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded text-xs"
                      >
                        Marcar como atendido
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => eliminarRegistro(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
