import AutoCard from "./AutoCard";

export const AutoCardGrid = ({ filteredCarData }) => {
  if (filteredCarData.length === 0) {
    return (
      <div className="grid-wrapper">
        <p className="no-results">
          Resultado no encontrado para la búsqueda realizada
        </p>
      </div>
    );
  }

  return (
    <div className="grid-wrapper">
      <ul className="grid">
        {filteredCarData.map((auto) => (
          <AutoCard key={auto.id} auto={auto} />
        ))}
      </ul>
    </div>
  );
};