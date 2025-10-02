import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {

  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
  const favorite = isFavorite(movie.id)

  const favouriteBtn = (e) => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id)
    }
    else {
      addToFavorites(movie)
    }
  }

  return (
    <>
      <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
        {/* Poster Section */}
        <div className="relative aspect-[2/3] w-full">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0
            hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
            {/* Favorite Button */}
            <button
              onClick={favouriteBtn}

              className={`absolute top-4 right-4 text-white text-xl p-2 rounded-full
              bg-black/50 hover:bg-black/80 transition-colors duration-200 w-10 h-10
                flex items-center justify-center `}
            >
              {favorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          <h3 className="text-white text-base font-semibold m-0">{movie.title}</h3>
          <p className="text-gray-400 text-sm">{movie.release_date.split("-")[0]}</p>
        </div>
      </div>

    </>
  );
}

export default MovieCard;