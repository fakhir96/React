import { React, useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { searchMovies, getPopularMovies } from '../services/api';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies")
      }
      finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)

    try {
      const serarchResults = await searchMovies(searchQuery)
      setMovies(serarchResults)
      setError(null)

    }
    catch (err) {
      setError("Failed To Search")
    }
    finally {
      setLoading(false)
    }
    // setSearchQuery("");
  }

  return (
    <>
      <div className="w-full py-8 sm:py-4 box-border">
        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="max-w-[600px] mx-auto mb-8 sm:mb-4 flex gap-4 px-4 box-border"
        >
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white text-base
                 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white rounded-md font-medium whitespace-nowrap
                 hover:bg-red-700 transition-colors duration-200"
          >
            Search
          </button>
        </form>

        {error && <div>{error}</div>}

        {loading ? <div className=''>Loading...</div> : <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4 w-full box-border">

          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}

        </div>
        }

      </div>


    </>
  );
}

export default Home;