function OccasionCard({ name, icon, description, selected, onClick }) {
  return (
    <div
      className={selected ? "occasion-card selected" : "occasion-card"}
      onClick={onClick}
    >
      <h2>{icon} {name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default OccasionCard;