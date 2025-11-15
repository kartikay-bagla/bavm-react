import Link from "next/link";

type NewsArticle = {
  id: string;
  title: string;
  date: string;
  text?: string;
};

type PublicationArticle = {
  id: string;
  title: string;
  date: string;
  text?: string;
};

type NewsAndPublicationsSectionProps = {
  news: {
    title: string;
    articles: NewsArticle[];
  };
  publications: {
    title: string;
    articles: PublicationArticle[];
  };
};

export default function NewsAndPublicationsSection({ news, publications }: NewsAndPublicationsSectionProps) {
  const truncateText = (text: string | undefined, maxLength = 220) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex h-full flex-col gap-6">
            <h2 className="text-center font-serif text-2xl font-bold text-primary">{news.title}</h2>
            <div className="flex flex-1 flex-col gap-4">
              {news.articles.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg cursor-pointer">
                    <h3 className="mb-2 text-left font-serif text-xl font-bold text-primary">{article.title}</h3>
                    <p className="mb-3 text-sm text-gray-500">{article.date}</p>
                    {article.text && (
                      <p className="leading-relaxed text-gray-600">{truncateText(article.text)}</p>
                    )}
                  </article>
                </Link>
              ))}
            </div>
            <Link href="/news" className="mt-auto block">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 text-center font-semibold text-primary transition-colors duration-200 hover:bg-primary/20">
                View all news
              </div>
            </Link>
          </div>

          <div className="flex h-full flex-col gap-6">
            <h2 className="text-center font-serif text-2xl font-bold text-primary">{publications.title}</h2>
            <div className="flex flex-1 flex-col gap-4">
              {publications.articles.map((article) => (
                <Link key={article.id} href={`/publications/${article.id}`}>
                  <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg cursor-pointer">
                    <h3 className="mb-2 text-left font-serif text-xl font-bold text-primary">{article.title}</h3>
                    <p className="mb-3 text-sm text-gray-500">{article.date}</p>
                    {article.text && (
                      <p className="leading-relaxed text-gray-600">{truncateText(article.text)}</p>
                    )}
                  </article>
                </Link>
              ))}
            </div>
            <Link href="/publications" className="mt-auto block">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6 text-center font-semibold text-primary transition-colors duration-200 hover:bg-primary/20">
                View all publications
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
