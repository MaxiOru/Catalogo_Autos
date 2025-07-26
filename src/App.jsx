import { useState } from "react";
import { autos } from "./autos";
import AutoCard from "./components/AutoCard";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const tipos = ["Todos", "Sedán", "Hatchback", "SUV"];
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Todos");
  const autosFiltrados = autos.filter((auto) => (auto.marca + " " + auto.modelo).toLowerCase().includes(busqueda.toLowerCase())
  )
  .filter((auto) => tipoSeleccionado === "Todos" || auto.tipo === tipoSeleccionado);
  return (
    
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Catálogo de Autos</h1>
      <input
        type="text"
        placeholder="Buscar por marca o modelo"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <select onChange={(e) => setTipoSeleccionado(e.target.value)} value={tipoSeleccionado}>
        {tipos.map((tipo) => (
        <option key={tipo} value={tipo}>{tipo}</option>
        ))}
      </select>
      {autosFiltrados.map((auto) => (
        <AutoCard key={auto.id} auto={auto} />
      ))}
    </div>
  );
}



export default App;
