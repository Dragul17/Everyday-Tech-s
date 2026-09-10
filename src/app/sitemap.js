import { getAllArticles } from '@/lib/api';
import categories from '../../data/categories.json';

export default async function sitemap() {
  const baseUrl = 'https://www.example.com';
  const articles = getAllArticles(['slug', 'date']);
  
  const articleUrls = articles.map(article => ({
    url: `${baseUrl}/guides/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  const categoryUrls = categories.map(category => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
  }));

  const routes = [
    '',
    '/about',
    '/contact',
    '/categories',
    '/privacy-policy',
    '/terms-conditions',
    '/affiliate-disclosure',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...categoryUrls, ...articleUrls];
}
