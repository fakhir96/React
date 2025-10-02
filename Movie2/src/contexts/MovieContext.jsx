import { React, useState, useEffect, useContext, createContext, use } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([])


    useEffect(() => {
        const stored = localStorage.getItem("favourites")

        if (stored) setFavourites(JSON.parse(stored))
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addToFavorites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}