import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-col about-col-red">
          <h2>Who We Are</h2>
          <p>
            BAVM Legal is a premier law firm dedicated to providing exceptional legal 
            services to individuals and businesses. With over 25 years of experience, 
            our team of seasoned attorneys brings expertise across multiple practice areas.
          </p>
          <p>
            We pride ourselves on our client-first approach, combining legal excellence 
            with personalized attention to achieve the best possible outcomes for those we serve.
          </p>
        </div>
        <div className="about-col about-col-white">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver strategic, effective legal solutions that protect 
            our clients' interests and help them navigate complex legal challenges with 
            confidence.
          </p>
          <p>
            We are committed to maintaining the highest standards of integrity, 
            professionalism, and ethical practice in everything we do. Your trust is 
            our most valuable asset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
