export default function FilterForm({
  busqueda,
  setBusqueda,
  tipos,
  tipoSeleccionado,
  setTipoSeleccionado,
  onSorteo,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* input de texto */}
      <input
        type="text"
        placeholder="Buscar por marca o modelo"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* selector de tipo */}
      <select
        value={tipoSeleccionado}
        onChange={(e) => setTipoSeleccionado(e.target.value)}
      >
        {tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

      {/* botón Sorteo */}
      <button type="button" onClick={onSorteo} className="btn-primary">
        Sorteo
      </button>
    </form>
  );
}