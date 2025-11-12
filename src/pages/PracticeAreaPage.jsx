import { useLocation } from 'react-router-dom';
import './PracticeAreaPage.css';

const PracticeAreaPage = () => {
  const location = useLocation();
  const area = location.pathname.substring(1); // Remove leading slash
  
  const practiceAreas = {
    corporate: {
      title: 'Corporate Law',
      icon: '🏢',
      description: 'Comprehensive legal services for businesses of all sizes.',
      services: [
        'Business Formation & Structure',
        'Mergers & Acquisitions',
        'Contract Drafting & Review',
        'Corporate Governance',
        'Securities Law',
        'Compliance & Regulatory Matters'
      ],
      content: `Our corporate law practice provides comprehensive legal support for businesses at every stage. 
      From startup formation to complex mergers and acquisitions, our experienced attorneys guide you through 
      the legal complexities of running a successful business. We take pride in understanding your business 
      goals and providing strategic counsel that helps you achieve them while minimizing legal risk.`
    },
    criminal: {
      title: 'Criminal Law',
      icon: '⚖️',
      description: 'Aggressive defense representation for all criminal matters.',
      services: [
        'White Collar Crimes',
        'DUI Defense',
        'Drug Offenses',
        'Theft & Fraud',
        'Assault & Battery',
        'Appeals & Post-Conviction Relief'
      ],
      content: `When your freedom is at stake, you need experienced criminal defense attorneys who will fight 
      for your rights. Our criminal law team has successfully defended clients against a wide range of charges, 
      from misdemeanors to serious felonies. We provide aggressive representation, thorough investigation, and 
      strategic defense planning to protect your future.`
    },
    family: {
      title: 'Family Law',
      icon: '👨‍👩‍👧',
      description: 'Compassionate guidance through divorce, custody, and family matters.',
      services: [
        'Divorce & Separation',
        'Child Custody & Support',
        'Spousal Support/Alimony',
        'Property Division',
        'Adoption',
        'Prenuptial Agreements'
      ],
      content: `Family law matters are often the most emotionally challenging legal issues you'll face. 
      Our compassionate attorneys provide skilled representation while understanding the personal nature of 
      these cases. We work to protect your interests and your children's well-being while seeking amicable 
      solutions whenever possible.`
    },
    'real-estate': {
      title: 'Real Estate Law',
      icon: '🏠',
      description: 'Expert handling of property transactions, disputes, and development.',
      services: [
        'Residential & Commercial Transactions',
        'Property Disputes',
        'Lease Agreements',
        'Zoning & Land Use',
        'Title Issues',
        'Real Estate Development'
      ],
      content: `Whether you're buying your first home or developing a commercial property, our real estate 
      attorneys provide the expertise you need. We handle all aspects of real estate law, from simple 
      transactions to complex development projects and disputes. Our goal is to protect your investment 
      and ensure smooth property transactions.`
    },
    'intellectual-property': {
      title: 'Intellectual Property Law',
      icon: '💡',
      description: 'Protecting your innovations, trademarks, and creative works.',
      services: [
        'Patent Applications',
        'Trademark Registration',
        'Copyright Protection',
        'Trade Secret Protection',
        'IP Licensing',
        'Infringement Defense'
      ],
      content: `In today's knowledge economy, protecting your intellectual property is crucial to business 
      success. Our IP attorneys help you secure and defend your innovations, brands, and creative works. 
      We provide strategic counsel on patent applications, trademark registration, licensing agreements, 
      and enforcement actions to maximize the value of your IP portfolio.`
    },
    employment: {
      title: 'Employment Law',
      icon: '💼',
      description: 'Advocating for both employers and employees in workplace disputes.',
      services: [
        'Employment Contracts',
        'Discrimination & Harassment',
        'Wrongful Termination',
        'Wage & Hour Disputes',
        'Employee Benefits',
        'Workplace Policies'
      ],
      content: `Employment relationships can be complex, and disputes can arise for both employers and 
      employees. Our employment law attorneys represent clients on both sides of workplace issues, providing 
      practical advice and strong advocacy. We help employers create compliant policies and defend against 
      claims, while protecting employees' rights when they've been violated.`
    }
  };

  const practice = practiceAreas[area] || practiceAreas.corporate;

  return (
    <div className="practice-area-page">
      <div className="practice-hero">
        <div className="practice-hero-content">
          <div className="practice-icon-large">{practice.icon}</div>
          <h1>{practice.title}</h1>
          <p>{practice.description}</p>
        </div>
      </div>
      
      <div className="practice-content">
        <div className="practice-main">
          <h2>Overview</h2>
          <p className="practice-text">{practice.content}</p>
          
          <h2>Our Services</h2>
          <ul className="services-list">
            {practice.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          
          <div className="cta-section">
            <h3>Need Legal Assistance?</h3>
            <p>Contact us today for a consultation with one of our experienced attorneys.</p>
            <button className="cta-button">Schedule Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaPage;
