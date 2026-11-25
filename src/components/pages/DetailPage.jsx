import { useState, useEffect } from "react";
import { getFilmById } from "../../services/api";
import MainTemplate from "../templates/MainTemplate";
import Header from "../organisms/Header";
import FilmDetail from "../organisms/FilmDetail";
import StatusMessage from "../molecules/StatusMessage";
import Button from "../atoms/Button";
import Spinner from "../atoms/Spinner";
import "./DetailPage.css";

function DetailPage({ filmId, onBack }) {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  // Always start the detail view at the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    getFilmById(filmId)
      .then((data) => {
        if (!ignore) setFilm(data);
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
  }, [filmId, attempt]);

  let content;
  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = (
      <>
        <StatusMessage message={error} onRetry={() => setAttempt(attempt + 1)} />
        <div className="detail-page__error-actions">
          <Button variant="ghost" onClick={onBack}>
            Back to all films
          </Button>
        </div>
      </>
    );
  } else {
    content = <FilmDetail film={film} onBack={onBack} />;
  }

  return (
    <MainTemplate
      header={<Header title="Ghibli Explorer" subtitle="Film details" />}
    >
      {content}
    </MainTemplate>
  );
}

export default DetailPage;
