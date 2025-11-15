import Link from 'next/link';
import newsData from '../../data/news.json';

export default function NewsPage() {
  const sortedNews = [...newsData].sort((a, b) => 
    new Date(b.upload_time).getTime() - new Date(a.upload_time).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center font-serif text-4xl font-bold text-primary">News Section</h1>
      <div className="mx-auto max-w-4xl space-y-6">
        {sortedNews.map((article) => (
          <Link key={article.id} href={`/news/${article.id}`}>
            <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg cursor-pointer">
              <h2 className="mb-3 font-serif text-2xl font-bold text-primary">{article.title}</h2>
              <p className="mb-4 text-sm text-gray-500">
                {new Date(article.upload_time).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="leading-relaxed text-gray-600">{article.description}</p>
              <div className="mt-4 text-primary font-semibold">Read more →</div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
