import { useState, useEffect } from "react";
import { getFilms } from "../../services/api";
import MainTemplate from "../templates/MainTemplate";
import Header from "../organisms/Header";
import FilmList from "../organisms/FilmList";
import SearchBar from "../molecules/SearchBar";
import StatusMessage from "../molecules/StatusMessage";
import Spinner from "../atoms/Spinner";
import "./HomePage.css";

function HomePage({ onSelectFilm }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [attempt, setAttempt] = useState(0); // changing it re-runs the request

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    getFilms()
      .then((data) => {
        if (!ignore) setFilms(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [attempt]);

  const text = query.trim().toLowerCase();
  const visibleFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(text) ||
      film.director.toLowerCase().includes(text) ||
      film.release_date.includes(text)
  );

  let content;
  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = (
      <StatusMessage message={error} onRetry={() => setAttempt(attempt + 1)} />
    );
  } else {
    content = <FilmList films={visibleFilms} onSelectFilm={onSelectFilm} />;
  }

  return (
    <MainTemplate
      header={
        <Header
          title="Ghibli Explorer"
          subtitle="Browse every Studio Ghibli film and open one to see its details."
        />
      }
    >
      <div className="home-page__search">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by title, director or year"
        />
      </div>
      {content}
    </MainTemplate>
  );
}

export default HomePage;
