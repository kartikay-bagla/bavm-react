import ClientLogoCarousel from "../ClientLogoCarousel";

type ClientsSectionProps = {
  title: string;
  logos: string[];
};

export default function ClientsSection({ title, logos }: ClientsSectionProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary">{title}</h2>
        <ClientLogoCarousel logos={logos} />
      </div>
    </section>
  );
}
