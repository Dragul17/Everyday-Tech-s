import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '8rem 20px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.25rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
}
