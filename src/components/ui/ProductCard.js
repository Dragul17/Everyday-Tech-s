import Image from 'next/image';
import { ExternalLink, Check, X } from 'lucide-react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  if (!product || !product.isVisible) return null;

  const safeUrl = product.affiliateUrl?.startsWith('http')
    ? product.affiliateUrl
    : `https://${product.affiliateUrl}`;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className={styles.image}
            sizes="200px"
          />
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{product.name}</h3>
          {product.ratingText && (
            <div className={styles.rating}>★ {product.ratingText}</div>
          )}
        </div>

        <p className={styles.description}>{product.shortDescription}</p>

        {(product.pros?.length > 0 || product.cons?.length > 0) && (
          <div className={styles.features}>
            {product.pros?.length > 0 && (
              <div className={`${styles.featureList} ${styles.pros}`}>
                <h4><Check size={16} /> Pros</h4>
                <ul>
                  {product.pros.map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.cons?.length > 0 && (
              <div className={`${styles.featureList} ${styles.cons}`}>
                <h4><X size={16} /> Cons</h4>
                <ul>
                  {product.cons.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className={styles.action}>
          <span className={styles.price}>{product.priceText}</span>
          <div>
            <a
              href={safeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {product.ctaText || 'View on Amazon'} <ExternalLink size={16} />
            </a>
            <p className={styles.disclosure}>We may earn a commission</p>
          </div>
        </div>
      </div>
    </div>
  );
}
