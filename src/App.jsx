import { useState } from "react";
import autosData from "./constants/autos";
import FilterForm from "./components/FilterForm";
import SorteoModal from "./components/SorteoModal";
import Footer from "./components/Footer"; 
import { TIPOS } from "./constants/tipos";
import { carFilter } from "./helpers/carFilter";
import { AutoCardGrid } from "./components/AutoCardGrid";
import { sortearVehiculo } from "./helpers/sortearVehiculo";


function App() {
  const [busqueda, setBusqueda] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Todos");
  const { filteredCarData } = carFilter({
    autosData,
    tipoSeleccionado,
    busqueda,
  });
  const [showModal, setShowModal] = useState(false);
  const [sorteado, setSorteado] = useState(null);

  const handleSorteo = (e) =>
    sortearVehiculo({ e, filteredCarData, setSorteado, setShowModal });

  return (
    <>
      <main>
        <header>
          <h1>Catálogo de Autos</h1>
        </header>

        <section>
          <FilterForm
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            tipos={TIPOS}
            tipoSeleccionado={tipoSeleccionado}
            setTipoSeleccionado={setTipoSeleccionado}
            onSorteo={handleSorteo}
          />

          <AutoCardGrid filteredCarData={filteredCarData} />
        </section>

        {showModal && sorteado && (
          <SorteoModal auto={sorteado} onClose={() => setShowModal(false)} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
