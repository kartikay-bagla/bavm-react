import content from '../../content.json';
import PersonCard from '@/components/PersonCard';

export default function KeyPeople() {
  const people = content.home.keyPeople.people as {
    name: string;
    title: string;
    image: string;
    content?: string;
  }[];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">Key People</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
}
