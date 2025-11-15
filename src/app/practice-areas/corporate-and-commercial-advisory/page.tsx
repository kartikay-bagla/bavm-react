import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function CorporateAndCommercialAdvisory() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Corporate and Commercial Advisory
        </h1>

        {/* Section 1 - Introduction */}
        <PracticeAreaCard
          heading="Corporate Advisory Services"
          content={
            <>
              <p>
                Corporate and Commercial advisory is one of the key practice areas of BAVM 
                Legal, which primarily entails transactional and legal advisory on 
                acquisitions, takeovers, mergers and amalgamation including advisory relating 
                to day-to-day business, regulatory issues, corporate and government affairs.
              </p>
              <p>
                We have a good team of Corporate law practitioners including Advocates and 
                Company secretaries who are abreast with the corporate and commercial law 
                practices. We are committed to provide the best top corporate and commercial 
                law firm services to our existing and potential clients, both domestic and 
                international.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/corporate-and-commercial-advisory-1.jpg"
          imageAlt="Corporate Advisory Services"
          imagePosition="right"
        />

        {/* Section 2 - Corporate Laws */}
        <PracticeAreaCard
          heading="Corporate Laws Practice"
          content={
            <>
              <p>
                We gained vast experience in dealing with business matters right from 
                inception and catering to the regular corporate and compliance needs for 
                successful functioning to empowering companies to scale to their potential.
              </p>
              <div>
                <p className="mb-4">Our Corporate law practices and services includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Registration of companies and advisory of choosing the legal form of a company</li>
                  <li>Obtaining statutory approvals and licenses for commencement of the business</li>
                  <li>Registration of partnership firms, wholly owned subsidiary companies, joint venture companies</li>
                  <li>Foreign collaborations, technology transfers</li>
                  <li>Liquidation, bankruptcy and insolvency laws</li>
                  <li>Corporate finance and securities law</li>
                  <li>Advising on corporate legal practices, policies and procedures</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/practice-areas/corporate-and-commercial-advisory-2.jpg"
          imageAlt="Corporate Laws"
          imagePosition="left"
        />

        {/* Section 3 - Commercial Laws */}
        <PracticeAreaCard
          heading="Commercial Laws Practice"
          content={
            <>
              <p>
                Commercial law practice involves advising and drafting of various commercial 
                agreements, contracts, business deals, negotiations, MOU, trading 
                transactions. We are one of the top commercial law practice firm in India.
              </p>
              <p>
                We have various professional from different areas of technical expertise in 
                addition to advocates who are expert in drafting technical parts of the 
                agreements and contracts. Our lawyers have extensive experience in drafting, 
                reviewing and negotiating various commercial agreements.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/corporate-and-commercial-advisory-1.jpg"
          imageAlt="Commercial Laws"
          imagePosition="right"
        />

        {/* Section 4 - Commercial Services */}
        <PracticeAreaCard
          heading="Commercial Services Offered"
          content={
            <>
              <div>
                <p className="mb-4">Our commercial law practices and services includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Drafting and vetting of national and International trade and business agreements</li>
                  <li>Advising on national and international business including agency, sale of goods, franchisee</li>
                  <li>Representing and advising clients in different trade and business negotiations, transactions</li>
                  <li>Drafting and advising of sale purchase of properties and assets</li>
                  <li>Drafting and advising of commercial loans and credit agreements</li>
                  <li>Drafting and advising of leasing and financing agreements</li>
                  <li>Licensing, permits and registration with various Government Departments</li>
                  <li>Commercial dispute resolution and opinion</li>
                </ul>
              </div>
              <p>
                We provide comprehensive support from contract drafting to dispute resolution, 
                ensuring your business interests are protected at every stage.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/corporate-and-commercial-advisory-2.jpg"
          imageAlt="Commercial Services"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
