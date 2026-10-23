import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import BookDetails from './pages/BookDetails'

export default function App() {
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('leaf-letter-favorites') || '[]') }
    catch { return [] }
  })
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('leaf-letter-theme') === 'dark')

  useEffect(() => {
    localStorage.setItem('leaf-letter-favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('leaf-letter-theme', darkMode ? 'dark' : 'light')
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  function toggleFavorite(bookId) {
    setFavorites((current) => current.includes(bookId)
      ? current.filter((id) => id !== bookId)
      : [...current, bookId])
  }

  return (
    <div className="app-shell">
      <Header favoritesCount={favorites.length} darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="/book/:id" element={<BookDetails favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="*" element={<main className="page-container not-found"><h1>Page not found.</h1><p>Let's find you a better page.</p><Link to="/" className="hero-cta">Back to library</Link></main>} />
      </Routes>
      <footer className="site-footer"><Link to="/" className="footer-brand">leaf <i>&</i> letter</Link><span>MADE FOR THE LOVE OF READING</span><span>© 2026 LEAF & LETTER</span></footer>
    </div>
  )
}