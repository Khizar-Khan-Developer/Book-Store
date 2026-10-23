import { BookOpen } from 'lucide-react'
import BookCard from './BookCard'

export default function BookGrid({ books, favorites, onToggleFavorite, emptyTitle, emptyMessage }) {
  if (!books.length) {
    return <div className="empty-state"><span className="empty-icon"><BookOpen size={27} /></span><h3>{emptyTitle}</h3><p>{emptyMessage}</p></div>
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} isFavorite={favorites.includes(book.id)} onToggleFavorite={onToggleFavorite} />
      ))}
    </div>
  )
}