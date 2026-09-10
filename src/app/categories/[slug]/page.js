import { notFound } from 'next/navigation';
import categories from '../../../../data/categories.json';
import { getAllArticles } from '@/lib/api';
import ArticleCard from '@/components/ui/ArticleCard';
import Link from 'next/link';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);
  if (!category) return {};
  
  return {
    title: `${category.name} | EverydayTech`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = categories.find(c => c.slug === resolvedParams.slug);
  
  if (!category) {
    notFound();
  }

  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'featuredImage',
    'excerpt',
    'category'
  ]);

  const categoryArticles = allArticles.filter(article => article.category === category.slug);

  return (
    <div className="container" style={{ padding: '4rem 20px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/categories" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &larr; All Categories
        </Link>
      </div>
      
      <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <h1 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{category.name}</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>{category.description}</p>
      </div>

      {categoryArticles.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No guides found in this category yet. Check back soon!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {categoryArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
