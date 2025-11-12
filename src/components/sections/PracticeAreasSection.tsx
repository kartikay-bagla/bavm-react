import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils/slugify";

type PracticeAreasSectionProps = {
  title: string;
  areas: {
    name: string;
    image: string;
  }[];
};

export default function PracticeAreasSection({ title, areas }: PracticeAreasSectionProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary">{title}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <Link key={area.name} href={`/practice-areas/${slugify(area.name)}`}>
              <div
                className="group relative h-56 overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                    {area.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
