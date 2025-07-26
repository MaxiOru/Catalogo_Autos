export function carFilter({ autosData, busqueda, tipoSeleccionado }) {
  const filteredCarData = autosData
    .filter((auto) =>
      (auto.marca + " " + auto.modelo)
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    )
    .filter(
      (auto) => tipoSeleccionado === "Todos" || auto.tipo === tipoSeleccionado
    );

  return { filteredCarData };
}
