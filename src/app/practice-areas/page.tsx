import content from '../../content.json';

export default function PracticeAreas() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Practice Areas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.home.practiceAreas.areas.map((area) => (
          <div key={area} className="bg-white p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold">{area}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
