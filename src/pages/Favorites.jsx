import { Heart, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { books } from '../data/books'
import BookGrid from '../components/BookGrid'

export default function Favorites({ favorites, onToggleFavorite }) {
  const favoriteBooks = books.filter((book) => favorites.includes(book.id))
  return (
    <main className="page-container">
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to discover</Link>
      <div className="page-heading">
        <span className="eyebrow muted"><Heart size={14} /> YOUR PERSONAL SHELF</span>
        <h1>Books to <em>come back to.</em></h1>
        <p>Your saved reads, all in one place. Keep the stories you love close.</p>
      </div>
      <div className="results-line"><span>{favoriteBooks.length} SAVED {favoriteBooks.length === 1 ? 'BOOK' : 'BOOKS'}</span><span>YOUR LITTLE COLLECTION</span></div>
      <BookGrid books={favoriteBooks} favorites={favorites} onToggleFavorite={onToggleFavorite} emptyTitle="Your shelf is waiting" emptyMessage="Tap the heart on any book to save it here." />
    </main>
  )
}