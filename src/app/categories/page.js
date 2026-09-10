import Link from 'next/link';
import categories from '../../../data/categories.json';

export const metadata = {
  title: "All Categories | EverydayTech",
  description: "Browse our guides by category to find exactly what you are looking for.",
};

export default function CategoriesIndex() {
  return (
    <div className="container" style={{ padding: '4rem 20px' }}>
      <h1 style={{ marginBottom: '2rem' }}>All Categories</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {categories.map(category => (
          <Link 
            key={category.id} 
            href={`/categories/${category.slug}`}
            style={{ 
              backgroundColor: 'var(--card-bg)', 
              padding: '2rem', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              transition: 'var(--transition)'
            }}
          >
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{category.name}</h2>
            <p style={{ color: 'var(--text-secondary)' }}>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
