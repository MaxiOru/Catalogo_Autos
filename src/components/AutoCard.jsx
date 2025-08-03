function AutoCard({ auto }) {
  return (
    <li className="card">
      <div className="image-container">
        <img
          src={auto.image ? auto.image : "assets/image-not-found.png"}
          alt=""
        />
      </div>

      <div className="content">
        <p className="title">{auto.marca} {auto.modelo}</p>
        <p>Tipo: {auto.tipo}</p>
        <p>Año: {auto.año}</p>
      </div>
    </li>
  );
}

export default AutoCard;
