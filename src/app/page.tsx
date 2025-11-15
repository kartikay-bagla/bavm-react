import Hero from '../components/Hero';
import ClientsSection from '../components/sections/ClientsSection';
import FeatureHighlightsSection from '../components/sections/FeatureHighlightsSection';
import KeyPeopleSection from '../components/sections/KeyPeopleSection';
import NewsAndPublicationsSection from '../components/sections/NewsAndPublicationsSection';
import PracticeAreasSection from '../components/sections/PracticeAreasSection';
import WelcomeAboutSection from '../components/sections/WelcomeAboutSection';
import content from '../content.json';
import newsData from '../data/news.json';
import publicationsData from '../data/publications.json';

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
  // Get the 2 most recent posts from each section
  const sortedNews = [...newsData].sort((a, b) => 
    new Date(b.upload_time).getTime() - new Date(a.upload_time).getTime()
  ).slice(0, 2);
  
  const sortedPublications = [...publicationsData].sort((a, b) => 
    new Date(b.upload_time).getTime() - new Date(a.upload_time).getTime()
  ).slice(0, 2);

  const news = {
    title: "News Section",
    articles: sortedNews.map(item => ({
      id: item.id,
      title: item.title,
      date: new Date(item.upload_time).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      text: item.description
    }))
  };
  
  const publications = {
    title: "Articles and Publications",
    articles: sortedPublications.map(item => ({
      id: item.id,
      title: item.title,
      date: new Date(item.upload_time).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      text: item.description
    }))
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
