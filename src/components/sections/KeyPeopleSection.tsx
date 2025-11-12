import KeyPeopleCarousel from "../KeyPeopleCarousel";

type KeyPeopleSectionProps = {
  title: string;
  people: {
    name: string;
    title: string;
    image: string;
    content?: string;
  }[];
};

export default function KeyPeopleSection({ title, people }: KeyPeopleSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary">{title}</h2>
        <KeyPeopleCarousel people={people} />
      </div>
    </section>
  );
}
