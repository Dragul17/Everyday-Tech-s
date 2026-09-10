import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug, getAllArticles, markdownToHtml } from '@/lib/api';
import ProductRecommendation from '@/components/ui/ProductRecommendation';
import Link from 'next/link';

export async function generateStaticParams() {
  const articles = getAllArticles(['slug']);
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug, ['title', 'excerpt', 'featuredImage']);
  if (!article) return {};
  
  return {
    title: `${article.title} | EverydayTech`,
    description: article.excerpt,
    openGraph: {
      images: [article.featuredImage],
    },
  };
}

export default async function GuidePage({ params }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug, [
    'title',
    'date',
    'updatedDate',
    'author',
    'category',
    'featuredImage',
    'excerpt',
    'products',
    'content'
  ]);

  if (!article) {
    notFound();
  }

  const contentHtml = await markdownToHtml(article.content || '');

  return (
    <article className="container" style={{ padding: '4rem 20px', maxWidth: '900px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href={`/categories/${article.category}`} style={{ color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
          {article.category.replace(/-/g, ' ')}
        </Link>
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
        {article.title}
      </h1>

      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        {article.excerpt}
      </p>

      <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0', marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <div>
          <strong>Written by:</strong> {article.author}
        </div>
        <div>
          <strong>Published:</strong> {article.date}
        </div>
        {article.updatedDate && article.updatedDate !== article.date && (
          <div>
            <strong>Updated:</strong> {article.updatedDate}
          </div>
        )}
      </div>

      {article.featuredImage && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--border-color)' }}>
          <Image 
            src={article.featuredImage} 
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
      )}

      <div 
        className="prose" 
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />

      {article.products && article.products.length > 0 && (
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Products Mentioned in this Guide</h2>
          {article.products.map(productId => (
            <ProductRecommendation key={productId} productId={productId} />
          ))}
        </div>
      )}
    </article>
  );
}
