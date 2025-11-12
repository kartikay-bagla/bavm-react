import Image from 'next/image';
import content from '../../content.json';

export default function KeyPeople() {
  const people = content.home.keyPeople.people as {
    name: string;
    title: string;
    image: string;
    content?: string;
  }[];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Key People</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {people.map((person) => (
          <div key={person.name} className="text-center flex flex-col items-center">
            <Image
              src={person.image}
              alt={person.name}
              width={180}
              height={180}
              className="rounded-full mx-auto object-cover"
            />
            <h3 className="text-xl font-bold mt-4 text-primary font-serif">{person.name}</h3>
            <p className="text-gray-600 text-sm uppercase tracking-wide">{person.title}</p>
            {person.content && (
              <p className="mt-4 text-sm text-gray-700 leading-relaxed text-left">
                {person.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
