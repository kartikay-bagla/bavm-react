import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import content from '../../../content.json';
import { findPersonBySlug, slugify } from '@/utils/slugify';

type Person = {
  name: string;
  title: string;
  image: string;
  content?: string;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const people = content.home.keyPeople.people as Person[];
  return people.map((person) => ({
    slug: slugify(person.name),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const people = content.home.keyPeople.people as Person[];
  const person = findPersonBySlug(people, slug);

  if (!person) {
    return {
      title: 'Person Not Found',
    };
  }

  return {
    title: `${person.name} - Key People | BAVM Legal`,
    description: person.content || `Profile of ${person.name}, ${person.title} at BAVM Legal`,
  };
}

export default async function PersonProfile({ params }: PageProps) {
  const { slug } = await params;
  const people = content.home.keyPeople.people as Person[];
  const person = findPersonBySlug(people, slug);

  if (!person) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link
          href="/key-people"
          className="inline-flex items-center text-primary hover:text-secondary transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Key People
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3 bg-gray-50 flex items-center justify-center p-8">
              <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-xl border-2 border-primary/10 shadow-inner">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 300px, 80vw"
                />
              </div>
            </div>
            <div className="p-8 md:p-12 md:w-2/3">
              <div className="mb-6">
                <h1 className="text-4xl font-bold font-serif text-primary mb-2">{person.name}</h1>
                <p className="text-lg text-gray-600 uppercase tracking-wide">{person.title}</p>
                <div className="mt-4 h-1 w-16 rounded-full bg-secondary" />
              </div>
              {person.content && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {person.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
