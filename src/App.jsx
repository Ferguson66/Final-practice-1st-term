import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";


function App() {
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  if (selectedFilmId === null) {
    return <HomePage onSelectFilm={setSelectedFilmId} />;
  }

  return (
    <DetailPage
      filmId={selectedFilmId}
      onBack={() => setSelectedFilmId(null)}
    />
  );
}

export default App;
