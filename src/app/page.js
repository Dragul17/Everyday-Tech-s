import Link from 'next/link';
import { getAllArticles } from '@/lib/api';
import categories from '../../data/categories.json';
import products from '../../data/products.json';
import ArticleCard from '@/components/ui/ArticleCard';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  const articles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'featuredImage',
    'excerpt',
    'category'
  ]);
  
  const latestArticles = articles.slice(0, 6);
  const featuredProducts = products.filter(p => p.isFeatured && p.isVisible).slice(0, 4);

  return (
    <>
      <section style={{ backgroundColor: 'var(--card-bg)', padding: '5rem 0', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
            Practical guides for smarter everyday tech choices.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', marginBottom: '2.5rem' }}>
            We provide useful guides, detailed buying considerations, and honest product recommendations to help you build the perfect setup and choose the right gadgets.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/categories" className="btn btn-primary">Browse Categories</Link>
            <Link href="/about" className="btn btn-outline">Why Trust Us?</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Latest Guides</h2>
          <Link href="/categories" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>View All &rarr;</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {latestArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-color)', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Explore Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {categories.map(category => (
              <Link 
                key={category.id} 
                href={`/categories/${category.slug}`}
                style={{ 
                  backgroundColor: 'var(--card-bg)', 
                  padding: '2rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  textAlign: 'center',
                  transition: 'var(--transition)'
                }}
              >
                <h3 style={{ marginBottom: '1rem' }}>{category.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="container" style={{ padding: '4rem 20px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Top Product Recommendations</h2>
          <div>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
