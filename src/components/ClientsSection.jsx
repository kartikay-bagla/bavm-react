import { useState, useEffect } from 'react';
import './ClientsSection.css';

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const clients = [
    { name: 'TechCorp Industries', logo: '🏭' },
    { name: 'Global Finance Group', logo: '🏦' },
    { name: 'Healthcare Partners', logo: '🏥' },
    { name: 'Urban Development Co', logo: '🏗️' },
    { name: 'Innovation Labs', logo: '🔬' },
    { name: 'Retail Excellence', logo: '🛍️' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [clients.length]);

  const visibleClients = [
    clients[currentIndex],
    clients[(currentIndex + 1) % clients.length],
    clients[(currentIndex + 2) % clients.length],
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="section-title">Our Trusted Clients</h2>
        <p className="section-subtitle">
          Serving Leading Organizations Across Industries
        </p>
        <div className="clients-carousel">
          {visibleClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="client-card">
              <div className="client-logo">{client.logo}</div>
              <h4>{client.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
