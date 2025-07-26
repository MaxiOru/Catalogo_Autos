import AutoCard from "./AutoCard";

export const AutoCardGrid = ({ filteredCarData }) => {
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
