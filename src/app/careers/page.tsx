import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function Careers() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Careers at BAVM Legal
        </h1>

        {/* Section 1 - Join Our Team */}
        <PracticeAreaCard
          heading="Join Our Dynamic Team"
          content={
            <>
              <p>
                At BAVM Legal, we believe that our people are our greatest asset. We are
                committed to fostering a collaborative and inclusive work environment where
                talented individuals can grow professionally and make meaningful contributions
                to our clients' success.
              </p>
              <p>
                We are always looking for passionate, dedicated legal professionals who share
                our commitment to excellence, integrity, and client service. Whether you're
                an experienced advocate or a recent law graduate, we offer opportunities to
                work on challenging cases across various practice areas.
              </p>
            </>
          }
          imageSrc="/images/home/1.jpg"
          imageAlt="Join Our Team"
          imagePosition="right"
        />

        {/* Section 2 - Why Work With Us */}
        <PracticeAreaCard
          heading="Why Choose BAVM Legal?"
          content={
            <>
              <p>
                Working at BAVM Legal means being part of a prestigious firm with over 40
                years of experience in Indian legal practice. Our team has extensive expertise
                in Supreme Court, High Courts, and specialized tribunals.
              </p>
              <div>
                <p className="mb-4">What we offer:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Opportunity to work on complex, high-impact cases</li>
                  <li>Mentorship from experienced senior advocates</li>
                  <li>Professional development and continuing legal education</li>
                  <li>Competitive compensation and benefits</li>
                  <li>Work-life balance and flexible arrangements</li>
                  <li>Collaborative and supportive work environment</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/home/2.jpg"
          imageAlt="Why Work With Us"
          imagePosition="left"
        />

        {/* Section 3 - Practice Areas */}
        <PracticeAreaCard
          heading="Diverse Practice Areas"
          content={
            <>
              <p>
                Our firm covers a wide range of legal practice areas, providing opportunities
                for specialization and cross-practice collaboration. Whether your interests
                lie in indirect taxes, corporate law, environmental matters, or intellectual
                property, you'll find challenging work that matches your expertise.
              </p>
              <div>
                <p className="mb-4">Key practice areas include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Indirect Taxes (GST, Customs, Central Excise)</li>
                  <li>Corporate Insolvency and Restructuring</li>
                  <li>Employment and Industrial Relations</li>
                  <li>Corporate and Commercial Advisory</li>
                  <li>Environment and Natural Resources Law</li>
                  <li>Intellectual Property Law</li>
                  <li>FEMA and Money Laundering</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/home/3.jpg"
          imageAlt="Practice Areas"
          imagePosition="right"
        />

        {/* Section 4 - How to Apply */}
        <PracticeAreaCard
          heading="How to Apply"
          content={
            <>
              <p>
                We are always interested in hearing from qualified legal professionals who
                are passionate about their work and committed to delivering exceptional
                client service. Our recruitment process is designed to identify candidates
                who will thrive in our collaborative environment.
              </p>
              <div>
                <p className="mb-4">To apply, please send your application to:</p>
                <p className="font-semibold text-primary">
                  Email: <a href="mailto:careers@bavm.legal" className="text-blue-500 hover:underline">careers@bavm.legal</a>
                </p>
                <p className="mt-4">Include the following in your application:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Updated resume/CV</li>
                  <li>Cover letter explaining your interest and qualifications</li>
                  <li>Writing sample (if applicable)</li>
                  <li>References (optional)</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/home/4.jpg"
          imageAlt="How to Apply"
          imagePosition="left"
        />

        {/* Section 5 - Our Culture */}
        <PracticeAreaCard
          heading="Our Firm Culture"
          content={
            <>
              <p>
                At BAVM Legal, we maintain the highest standards of professional excellence
                while fostering a supportive and inclusive workplace. Our team members are
                encouraged to continuously learn, collaborate, and contribute to the firm's
                success.
              </p>
              <p>
                We believe in work-life balance and provide our team with the resources and
                flexibility they need to perform at their best. Whether you're working on
                complex litigation matters or providing strategic advisory services, you'll
                be part of a team that values your contributions and supports your growth.
              </p>
            </>
          }
          imageSrc="/images/home/5.jpg"
          imageAlt="Our Culture"
          imagePosition="right"
        />
      </div>
    </div>
  );
}
