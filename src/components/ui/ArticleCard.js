import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';

export default function ArticleCard({ article }) {
  // Format category slug to readable string
  const formatCategory = (slug) => {
    if (!slug) return '';
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <Link href={`/guides/${article.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {article.featuredImage ? (
          <Image 
            src={article.featuredImage} 
            alt={article.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.image} />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.category}>{formatCategory(article.category)}</div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <div className={styles.footer}>
          <span>{article.author || 'Editorial Team'}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
