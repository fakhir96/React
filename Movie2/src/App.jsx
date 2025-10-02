import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>


  )
}

export default App
