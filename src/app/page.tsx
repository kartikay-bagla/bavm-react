import Hero from '../components/Hero';
import ClientsSection from '../components/sections/ClientsSection';
import FeatureHighlightsSection from '../components/sections/FeatureHighlightsSection';
import KeyPeopleSection from '../components/sections/KeyPeopleSection';
import NewsAndPublicationsSection from '../components/sections/NewsAndPublicationsSection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import WelcomeAboutSection from '../components/sections/WelcomeAboutSection';
import content from '../content.json';

export default function Home() {
  const home = content.home;
  const heroSlides = home.hero?.slides ?? [];
  const features = home.features as {
    background_image?: string;
    backgroundImage?: string;
    feature_list: string[];
  };
  const practiceAreas = home.practiceAreas as {
    title: string;
    areas: {
      name: string;
      image: string;
    }[];
  };
  const keyPeople = home.keyPeople as {
    title: string;
    people: {
      name: string;
      title: string;
      image: string;
      content?: string;
    }[];
  };
  const clients = home.clients as {
    title: string;
    logos: string[];
  };
  const news = home.news as {
    title: string;
    articles: {
      title: string;
      date: string;
      text?: string;
    }[];
  };
  const publications = home.publications as {
    title: string;
    articles: {
      title: string;
      date: string;
    }[];
  };

  return (
    <div>
      <Hero slides={heroSlides} />
      <WelcomeAboutSection welcome={home.welcome} about={home.about} />
      <FeatureHighlightsSection features={features} />
      <PracticeAreasSection title={practiceAreas.title} areas={practiceAreas.areas} />
      <KeyPeopleSection title={keyPeople.title} people={keyPeople.people} />
      <ClientsSection title={clients.title} logos={clients.logos} />
      <NewsAndPublicationsSection news={news} publications={publications} />
    </div>
  );
}
