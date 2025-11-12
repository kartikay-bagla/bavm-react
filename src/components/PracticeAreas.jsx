import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practices = [
    {
      title: 'Corporate Law',
      icon: '🏢',
      description: 'Comprehensive legal services for businesses, from formation to complex transactions.',
      link: '/corporate'
    },
    {
      title: 'Criminal Law',
      icon: '⚖️',
      description: 'Aggressive defense representation for all criminal matters.',
      link: '/criminal'
    },
    {
      title: 'Family Law',
      icon: '👨‍👩‍👧',
      description: 'Compassionate guidance through divorce, custody, and family matters.',
      link: '/family'
    },
    {
      title: 'Real Estate',
      icon: '🏠',
      description: 'Expert handling of property transactions, disputes, and development.',
      link: '/real-estate'
    },
    {
      title: 'Intellectual Property',
      icon: '💡',
      description: 'Protecting your innovations, trademarks, and creative works.',
      link: '/intellectual-property'
    },
    {
      title: 'Employment Law',
      icon: '💼',
      description: 'Advocating for both employers and employees in workplace disputes.',
      link: '/employment'
    }
  ];

  return (
    <section className="practice-areas-section">
      <div className="practice-areas-container">
        <h2 className="section-title">Our Practice Areas</h2>
        <p className="section-subtitle">
          Comprehensive Legal Services Tailored to Your Needs
        </p>
        <div className="practice-areas-grid">
          {practices.map((practice, index) => (
            <Link to={practice.link} key={index} className="practice-card">
              <div className="practice-icon">{practice.icon}</div>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
              <span className="learn-more">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
