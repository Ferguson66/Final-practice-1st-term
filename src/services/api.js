const BASE_URL = "https://ghibliapi.vercel.app";

// Generic helper: all fetch calls of the project go through here.
async function request(path) {
  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`);
  } catch {
    throw new Error(
      "Could not reach the Studio Ghibli API. Check your connection.",
    );
  }

  if (!response.ok) {
    throw new Error(`The API answered with an error (${response.status}).`);
  }

  return response.json();
}

// GET /films -> array of films, sorted by release year.
export async function getFilms() {
  const films = await request("/films");
  return films.sort((a, b) => Number(a.release_date) - Number(b.release_date));
}

// GET /films/{id} -> a single film.
export async function getFilmById(id) {
  return request(`/films/${id}`);
}
