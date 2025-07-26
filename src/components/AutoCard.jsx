
function AutoCard({ auto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>{auto.marca} {auto.modelo}</h2>
      <p>Tipo: {auto.tipo}</p>
      <p>Año: {auto.año}</p>
    </div>
  );
}

export default AutoCard;



