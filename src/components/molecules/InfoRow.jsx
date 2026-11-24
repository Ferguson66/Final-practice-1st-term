import "./InfoRow.css";

function InfoRow({ label, children }) {
  return (
    <div className="info-row">
      <dt className="info-row__label">{label}</dt>
      <dd className="info-row__value">{children}</dd>
    </div>
  );
}

export default InfoRow;