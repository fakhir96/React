

export const getPopularMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3fd2be6f0c70a2a598f084ddfb75487c`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
