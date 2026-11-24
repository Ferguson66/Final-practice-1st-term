import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Badge from "../atoms/Badge";
import "./FilmCard.css";

function FilmCard({ film, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(film.id);
    }
  };

  return (
    <div
      className="film-card"
      role="button"
      tabIndex={0}
      aria-label={`See details of ${film.title}`}
      onClick={() => onSelect(film.id)}
      onKeyDown={handleKeyDown}
    >
      <div className="film-card__image">
        <Image src={film.image} alt={`Poster of ${film.title}`} shape="poster" />
      </div>
      <div className="film-card__body">
        <Title level={3}>{film.title}</Title>
        <Text muted>{film.director}</Text>
        <div className="film-card__badges">
          <Badge>{film.release_date}</Badge>
          <Badge variant="score">{film.rt_score}%</Badge>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;