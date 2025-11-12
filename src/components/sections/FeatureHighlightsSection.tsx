type FeatureHighlightsSectionProps = {
  features: {
    feature_list: string[];
    background_image?: string;
    backgroundImage?: string;
  };
};

export default function FeatureHighlightsSection({ features }: FeatureHighlightsSectionProps) {
  const background = features.background_image ?? features.backgroundImage ?? "";

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-8"
      style={background ? { backgroundImage: `url(${background})` } : undefined}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {features.feature_list.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-white/40 bg-white/20 p-4 text-center text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
