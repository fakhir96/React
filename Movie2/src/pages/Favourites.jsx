import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favourites() {

    const { favourites } = useMovieContext();

    if (favourites) return (
        <div>

            <h2 className='text-center text-3xl mt-5 mb-5 font-bold' >Your Favourites</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4 w-full box-border">

                {favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>
        </div>

    )

    return (
        <>
            <div className="p-8 w-full">
                {/* Empty Favorites Box */}
                <div className="text-center py-16 px-8 bg-white/5 rounded-xl mx-auto my-8 max-w-[600px]">
                    <h2 className="mb-4 text-3xl font-bold text-[#e50914]">
                        No Movies Yet
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Add Some plzzz
                    </p>
                </div>
            </div>

        </>
    );
}

export default Favourites;