"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ArticleCard from '@/components/ui/ArticleCard';
import ProductCard from '@/components/ui/ProductCard';

export default function SearchResults({ articles, products }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState({ articles: [], products: [] });

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults({ articles: [], products: [] });
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    const matchedArticles = articles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt?.toLowerCase().includes(lowerQuery) ||
      article.category?.toLowerCase().includes(lowerQuery)
    );

    const matchedProducts = products.filter(product => 
      product.isVisible && (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.shortDescription?.toLowerCase().includes(lowerQuery) ||
        product.category?.toLowerCase().includes(lowerQuery)
      )
    );

    setResults({
      articles: matchedArticles,
      products: matchedProducts
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <input 
          type="search" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for guides, products, or categories..."
          style={{ flexGrow: 1, padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '1.1rem' }}
        />
        <button type="submit" className="btn btn-primary" style={{ padding: '0 2rem' }}>
          Search
        </button>
      </form>

      {initialQuery && (
        <div>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 500 }}>
            Results for "{initialQuery}"
          </h2>

          {results.articles.length === 0 && results.products.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No results found. Try a different search term.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              {results.articles.length > 0 && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    Guides & Articles ({results.articles.length})
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {results.articles.map(article => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              )}

              {results.products.length > 0 && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    Products ({results.products.length})
                  </h3>
                  <div>
                    {results.products.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      )}
    </div>
  );
}
