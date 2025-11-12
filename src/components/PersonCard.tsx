"use client";

import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

type Person = {
  name: string;
  title: string;
  image: string;
  content?: string;
};

type PersonCardProps = {
  person: Person;
  truncateContent?: boolean;
  maxContentLength?: number;
};

/**
 * Reusable PersonCard component for displaying person information
 * Clicking the card navigates to the person's profile page
 */
export default function PersonCard({
  person,
  truncateContent = false,
  maxContentLength = 220,
}: PersonCardProps) {
  const truncate = (text: string | undefined, maxLength: number) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`;
  };

  const slug = slugify(person.name);
  const content = truncateContent ? truncate(person.content, maxContentLength) : person.content;

  return (
    <Link href={`/key-people/${slug}`} className="block h-full">
      <article className="group flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white/95 p-6 text-center shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-inner">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 200px, 60vw"
          />
        </div>
        <div className="mt-4 h-1 w-12 rounded-full bg-primary/20 transition-colors duration-200 group-hover:bg-primary/40" />
        <h3 className="mt-4 text-lg font-bold font-serif text-primary">{person.name}</h3>
        <p className="text-sm text-gray-600">{person.title}</p>
        {content && (
          <p className="mt-3 w-full text-sm text-gray-600 leading-relaxed text-left group-hover:text-gray-700">
            {content}
          </p>
        )}
      </article>
    </Link>
  );
}
