import AutoCard from "./AutoCard";

export default function SorteoModal({ auto, onClose }) {

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Auto Sorteado 🎉</h2>
        <AutoCard auto={auto} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}