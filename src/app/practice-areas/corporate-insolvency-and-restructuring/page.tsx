import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function CorporateInsolvencyAndRestructuring() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Corporate Insolvency and Restructuring
        </h1>

        {/* Section 1 - Introduction to IBC */}
        <PracticeAreaCard
          heading="Insolvency and Bankruptcy Code 2016"
          content={
            <>
              <p>
                The Central Government of India introduced the Insolvency and bankruptcy 
                code 2016, in India to create a time bound processes for insolvency 
                resolution of corporate persons, partnership firms and individuals for 
                maximization of value of assets of such persons, to promote entrepreneurship, 
                availability of credit and balance the interest of all the stakeholders.
              </p>
              <p>
                If insolvency cannot be resolved, the assets of the borrowers may be sold 
                to repay creditors. The Insolvency and Bankruptcy Board of India (IBBI) was 
                established on 1.10.2016 under the Code for implementation and regulation of 
                the profession and processes.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/corporate-insolvency-and-restructuring-1.jpg"
          imageAlt="Insolvency and Bankruptcy Code"
          imagePosition="right"
        />

        {/* Section 2 - Regulatory Framework */}
        <PracticeAreaCard
          heading="Regulatory Framework and Tribunals"
          content={
            <>
              <p>
                The National Company Law Tribunal (NCLT) adjudicate insolvency resolution 
                for companies. The Debt Recovery Tribunal (DRT) adjudicate insolvency 
                resolution for individuals. The Code creates time-bound processes that will 
                be completed within 180 days with further period of 90 days.
              </p>
              <p>
                This code shall not apply to corporate persons who are regulated financial 
                service providers such as Banks, Financial institutions and Insurance 
                Companies.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/corporate-insolvency-and-restructuring-2.jpg"
          imageAlt="Regulatory Framework"
          imagePosition="left"
        />

        {/* Section 3 - BAVM's Expertise */}
        <PracticeAreaCard
          heading="Our Expertise and Experience"
          content={
            <>
              <p>
                BAVM LEGAL has an extensive practice in Insolvency related litigation. With 
                a dedicated team of Advocates, the Firm has the expertise, experience and 
                capacity to provide a complete range of professional services from 
                preparation, drafting, filing to finally defending and challenging in 
                Courts/Tribunals.
              </p>
              <p>
                Our clientele consists from both private sectors and individuals, besides 
                foreign clients. This adds variety to the Firm&apos;s experience and gives it a 
                unique edge in handling diverse insolvency matters.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/corporate-insolvency-and-restructuring-3.jpg"
          imageAlt="Our Expertise"
          imagePosition="right"
        />

        {/* Section 4 - Services Offered */}
        <PracticeAreaCard
          heading="Restructuring & Insolvency Practice"
          content={
            <>
              <p>
                As a brief our Restructuring & Insolvency practice includes advice and 
                assistance in implementing restructuring through the formal court or tribunal 
                process, including the formulation of strategies in line with the legal 
                framework and legal representation in courts and tribunals.
              </p>
              <div>
                <p className="mb-4">Our comprehensive services include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Advice on the Insolvency and Bankruptcy Code, 2016 including the restructuring and insolvency process contemplated therein</li>
                  <li>Advice and assistance in drafting, negotiating and finalizing relevant transaction documents, including applications, petitions and resolutions</li>
                  <li>Advice and assistance in the liquidation process available to debtors under the legal, regulatory and policy framework</li>
                  <li>Advice and assistance in structuring and implementing an exit strategy for investors from stressed assets</li>
                  <li>Advice and assistance to directors and key managerial personnel on their liabilities and obligations</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/practice-areas/corporate-insolvency-and-restructuring-1.jpg"
          imageAlt="Restructuring Services"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
