import Link from 'next/link';
import content from '../content.json';

const Footer = () => {
  return (
  <footer className="bg-linear-to-br from-[#061831] via-[#041226] to-[#020b18] text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{content.footer.about.title}</h3>
            <p className="text-gray-300 leading-relaxed">{content.footer.about.text}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{content.footer.explore.title}</h3>
            <ul className="space-y-2">
              {content.footer.explore.links.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{content.footer.offices.corporate.title}</h3>
            <Link
              href="/offices/delhi"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {content.footer.offices.corporate.location}
            </Link>
            <h3 className="text-lg font-bold mt-4 mb-4 text-white">{content.footer.offices.branch.title}</h3>
            <ul className="space-y-2">
              {content.footer.offices.branch.locations.map((location) => (
                <li key={location}>
                  <Link
                    href={`/offices/${location.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-gray-400 text-sm leading-relaxed">{content.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
