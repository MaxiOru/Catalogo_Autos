import { useState } from "react";
import autosData from "./constants/autos";
import AutoCard from "./components/AutoCard";
import { carFilter } from "./helpers/carFilter";
import { AutoCardGrid } from "./components/AutoCardGrid";
import { sortearVehiculo } from "./helpers/sortearVehiculo";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const tipos = ["Todos", "Sedán", "Hatchback", "SUV"];
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Todos");
  const { filteredCarData } = carFilter({
    autosData,
    tipoSeleccionado,
    busqueda,
  });
  const [showModal, setShowModal] = useState(false);
  const [sorteado, setSorteado] = useState(null);

  return (
    <main>
      <header>
        <h1>Catálogo de Autos</h1>
      </header>

      <section>
        <form>
          <input
            type="text"
            placeholder="Buscar por marca o modelo"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <select
            onChange={(e) => setTipoSeleccionado(e.target.value)}
            value={tipoSeleccionado}
          >
            {tipos.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
          <button
            onClick={(e) =>
              sortearVehiculo({ e, filteredCarData, setSorteado, setShowModal })
            }
            className="btn-primary"
          >
            Sorteo
          </button>
        </form>
        <AutoCardGrid filteredCarData={filteredCarData} />
      </section>

      {showModal && sorteado && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          {console.log("here")}
          <div className="modal-content">
            <h2>Auto Sorteado 🎉</h2>
            <AutoCard auto={sorteado} />
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
