import { Heart, Star, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BookCard({ book, isFavorite, onToggleFavorite }) {
  return (
    <article className="book-card">
      <div className="cover-wrap" style={{ '--cover-color': book.color }}>
        <Link to={`/book/${book.id}`} className="cover-link" aria-label={`View ${book.title} details`}>
          <img className="book-cover" src={book.cover} alt={`Cover artwork for ${book.title}`} loading="lazy"
            onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.add('cover-fallback') }} />
          <span className="cover-fallback-title">{book.title}</span>
        </Link>
        <button className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onToggleFavorite(book.id)}
          aria-label={isFavorite ? `Remove ${book.title} from favorites` : `Add ${book.title} to favorites`} title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
          <Heart size={17} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
        <span className="category-pill">{book.category}</span>
      </div>
      <div className="book-info">
        <div className="book-meta"><span>{book.year}</span><span className="rating"><Star size={13} fill="currentColor" /> {book.rating}</span></div>
        <Link to={`/book/${book.id}`} className="book-title">{book.title}</Link>
        <p className="book-author">by {book.author}</p>
        <Link to={`/book/${book.id}`} className="details-link">Explore book <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  )
}