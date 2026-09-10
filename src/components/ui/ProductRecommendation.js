import productsData from '../../../data/products.json';
import ProductCard from './ProductCard';

export default function ProductRecommendation({ productId }) {
  const product = productsData.find(p => p.id === productId);
  
  if (!product) return null;
  
  return (
    <div style={{ margin: '3rem 0' }}>
      <h3 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Recommended Product
      </h3>
      <ProductCard product={product} />
    </div>
  );
}
