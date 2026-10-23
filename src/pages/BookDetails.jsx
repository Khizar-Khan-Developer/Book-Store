import { ArrowLeft, Heart, Star, BookOpen, CalendarDays, BookmarkCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { books } from '../data/books'

export default function BookDetails({ favorites, onToggleFavorite }) {
  const { id } = useParams()
  const book = books.find((item) => item.id === Number(id))

  if (!book) {
    return <main className="page-container not-found"><h1>We couldn't find that book.</h1><p>It may have moved to another shelf.</p><Link to="/" className="hero-cta">Back to library</Link></main>
  }

  const isFavorite = favorites.includes(book.id)
  return (
    <main className="page-container detail-page">
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to library</Link>
      <div className="detail-layout">
        <div className="detail-cover" style={{ '--cover-color': book.color }}>
          <img src={book.cover} alt={`Cover artwork for ${book.title}`} onError={(event) => { event.currentTarget.style.display = 'none' }} />
          <div className="detail-cover-fallback">{book.title}</div>
        </div>
        <div className="detail-content">
          <span className="eyebrow muted">{book.category.toUpperCase()} · BOOK DETAILS</span>
          <h1>{book.title}<span className="period">.</span></h1>
          <p className="detail-author">Written by <strong>{book.author}</strong></p>
          <div className="detail-rating"><Star size={17} fill="currentColor" /> <strong>{book.rating}</strong><span>reader rating</span></div>
          <p className="detail-description">{book.description}</p>
          <blockquote>“{book.quote}”</blockquote>
          <div className="detail-facts">
            <div><BookOpen size={18} /><span><strong>{book.pages}</strong><small>Pages</small></span></div>
            <div><CalendarDays size={18} /><span><strong>{book.year}</strong><small>Published</small></span></div>
            <div><BookmarkCheck size={18} /><span><strong>{book.category}</strong><small>Category</small></span></div>
          </div>
          <button className={`save-button ${isFavorite ? 'saved' : ''}`} onClick={() => onToggleFavorite(book.id)}>
            <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} /> {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      </div>
    </main>
  )
}