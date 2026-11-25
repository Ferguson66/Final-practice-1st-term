import FilmCard from "../molecules/FilmCard";
import Text from "../atoms/Text";
import "./FilmList.css";

function FilmList({ films, onSelectFilm }) {
  if (films.length === 0) {
    return (
      <div className="film-list__empty">
        <Text>No films match your search. Try another title, director or year.</Text>
      </div>
    );
  }

  return (
    <ul className="film-list">
      {films.map((film) => (
        <li className="film-list__item" key={film.id}>
          <FilmCard film={film} onSelect={onSelectFilm} />
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
