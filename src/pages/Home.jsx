import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react'
import { books, categories } from '../data/books'
import BookGrid from '../components/BookGrid'

export default function Home({ favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All categories')

  const filteredBooks = useMemo(() => books.filter((book) => {
    const matchesSearch = `${book.title} ${book.author}`.toLowerCase().includes(searchTerm.toLowerCase().trim())
    const matchesCategory = selectedCategory === 'All categories' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  }), [searchTerm, selectedCategory])

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} /> YOUR NEXT CHAPTER STARTS HERE</span>
          <h1>Find a little <em>magic</em><br />between the pages.</h1>
          <p>A thoughtful collection for curious minds, late-night readers, and everyone in between.</p>
          <a className="hero-cta" href="#library">Explore the library <span>↓</span></a>
        </div>
        <div className="hero-art" aria-label="Books and reading illustration">
          <div className="art-sun"></div>
          <div className="art-book art-book-back"></div>
          <div className="art-book art-book-middle"></div>
          <div className="art-book art-book-front"><span>READ<br />MORE</span></div>
          <div className="art-leaf leaf-one"></div><div className="art-leaf leaf-two"></div>
          <span className="art-note">slow down.<br />turn a page.</span>
        </div>
        <div className="hero-bottom"><span>CURATED FOR EVERY MOOD</span><span>01 — 08 / THE COLLECTION</span></div>
      </section>

      <section id="library" className="library-section">
        <div className="section-heading">
          <div><span className="eyebrow muted">THE READING ROOM</span><h2>Explore the library<span className="period">.</span></h2></div>
          <p className="section-aside">Good books. New perspectives.<br />A world waiting to be opened.</p>
        </div>
        <div className="filter-bar">
          <div className="search-box"><Search size={18} /><input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search title or author..." aria-label="Search books" />{searchTerm && <button className="clear-search" onClick={() => setSearchTerm('')} aria-label="Clear search"><X size={15} /></button>}</div>
          <label className="category-select"><SlidersHorizontal size={16} /><span className="select-label">Category</span><select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} aria-label="Filter by category">{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
        </div>
        <div className="results-line"><span>{filteredBooks.length} {filteredBooks.length === 1 ? 'BOOK' : 'BOOKS'} TO DISCOVER</span><span>TAKE YOUR TIME · FIND YOUR STORY</span></div>
        <BookGrid books={filteredBooks} favorites={favorites} onToggleFavorite={onToggleFavorite} emptyTitle="No books found" emptyMessage="Try another title, author, or category." />
      </section>
    </>
  )
}