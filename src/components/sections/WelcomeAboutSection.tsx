type WelcomeAboutSectionProps = {
  welcome: {
    title: string;
    text: string;
  };
  about: {
    title: string;
    text: string;
  };
};

export default function WelcomeAboutSection({ welcome, about }: WelcomeAboutSectionProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[3fr_2fr]">
          <div className="flex h-full flex-col items-center justify-start rounded-md bg-blue-900 p-8 text-center text-white">
            <h1 className="mb-4 font-serif text-4xl font-bold">{welcome.title}</h1>
            <p>{welcome.text}</p>
          </div>
          <div className="flex h-full flex-col items-center justify-start rounded-md bg-white p-8 text-center text-gray-800">
            <h2 className="mb-4 font-serif text-4xl font-bold text-primary">{about.title}</h2>
            <p>{about.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
