import { Suspense } from 'react';
import SearchResults from './SearchResults';
import { getAllArticles } from '@/lib/api';
import products from '../../../data/products.json';

export const metadata = {
  title: "Search | EverydayTech",
  description: "Search our guides, reviews, and product recommendations.",
};

export default function SearchPage() {
  const articles = getAllArticles([
    'title',
    'excerpt',
    'slug',
    'category',
    'featuredImage',
    'date'
  ]);

  return (
    <div className="container" style={{ padding: '4rem 20px', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: '2rem' }}>Search</h1>
      <Suspense fallback={<p>Loading search...</p>}>
        <SearchResults articles={articles} products={products} />
      </Suspense>
    </div>
  );
}
