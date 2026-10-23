import { BookOpen, Heart, Sun, Moon } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

export default function Header({ favoritesCount, darkMode, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Leaf and Letter home">
          <span className="brand-mark"><BookOpen size={21} strokeWidth={1.8} /></span>
          <span>leaf <i>&</i> letter</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Discover</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <Heart size={16} /> Favorites <span className="favorite-count">{favoritesCount}</span>
          </NavLink>
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} title={darkMode ? 'Light theme' : 'Dark theme'}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}