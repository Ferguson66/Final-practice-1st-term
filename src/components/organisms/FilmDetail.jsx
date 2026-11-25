import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Badge from "../atoms/Badge";
import InfoRow from "../molecules/InfoRow";
import "./FilmDetail.css";

function FilmDetail({ film, onBack }) {
  return (
    <article className="film-detail">
      <div className="film-detail__back">
        <Button variant="ghost" onClick={onBack}>
          Back to all films
        </Button>
      </div>

      <div className="film-detail__banner">
        <Image
          src={film.movie_banner}
          alt={`Banner of ${film.title}`}
          shape="banner"
        />
      </div>

      <div className="film-detail__layout">
        <div className="film-detail__poster">
          <Image src={film.image} alt={`Poster of ${film.title}`} shape="poster" />
        </div>

        <div className="film-detail__content">
          <Title level={2}>{film.title}</Title>
          <Text muted>
            {film.original_title} ({film.original_title_romanised})
          </Text>

          <div className="film-detail__badges">
            <Badge>{film.release_date}</Badge>
            <Badge variant="score">Rotten Tomatoes {film.rt_score}%</Badge>
          </div>

          <Text>{film.description}</Text>

          <dl className="film-detail__info">
            <InfoRow label="Director">{film.director}</InfoRow>
            <InfoRow label="Producer">{film.producer}</InfoRow>
            <InfoRow label="Release year">{film.release_date}</InfoRow>
            <InfoRow label="Running time">{film.running_time} min</InfoRow>
            <InfoRow label="Original title">{film.original_title}</InfoRow>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default FilmDetail;
