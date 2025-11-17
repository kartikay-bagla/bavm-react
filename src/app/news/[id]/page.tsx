import Link from 'next/link';
import { notFound } from 'next/navigation';
import newsData from '../../../data/news.json';
import PdfViewer from '../../../components/PdfViewer';

export default async function NewsDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const article = newsData.find((item) => item.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Link 
          href="/news" 
          className="mb-6 inline-block text-primary font-semibold hover:underline"
        >
          ← Back to all news
        </Link>
        
        <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="mb-4 font-serif text-3xl font-bold text-primary">{article.title}</h1>
          <p className="mb-6 text-sm text-gray-500">
            {new Date(article.upload_time).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className="mb-8 leading-relaxed text-gray-700">
            <p>{article.description}</p>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <h2 className="mb-4 font-serif text-xl font-bold text-primary">Full Document</h2>
            <PdfViewer pdfUrl={article.pdf_link} title={article.title} />
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return newsData.map((article) => ({
    id: article.id,
  }));
}
