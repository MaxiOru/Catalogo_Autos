export const sortearVehiculo = ({
  e,
  filteredCarData,
  setSorteado,
  setShowModal,
}) => {
  e.preventDefault();
  if (filteredCarData.length === 0) return;

  const randomIndex = Math.floor(Math.random() * filteredCarData.length);
  setSorteado(filteredCarData[randomIndex]);
  setShowModal(true);
};
