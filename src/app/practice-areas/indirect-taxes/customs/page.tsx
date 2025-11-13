import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function Customs() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Customs
        </h1>

        {/* Section 1 - Introduction to Customs */}
        <PracticeAreaCard
          heading="Customs Duty Overview"
          content={
            <>
              <p>
                Customs duty is a form of indirect tax which is imposed in both the 
                situations i.e. import and export of goods and services. The tax which is 
                imposed on the import of goods and services is known as Import duty and for 
                export of goods and services is known as Export duty.
              </p>
              <p>
                When the goods enter into territorial water of India, it is considered 
                import of goods and customs duty is leviable. The taxable event occurs when 
                the goods are crossed customs barrier. Customs duty is now an important 
                source of Revenue for all countries, more so in developing countries 
                including India.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/customs-1.jpg"
          imageAlt="Customs Duty"
          imagePosition="right"
        />

        {/* Section 2 - Historical Context */}
        <PracticeAreaCard
          heading="Evolution of Customs"
          content={
            <>
              <p>
                It was an ancient &quot;Customs&quot; that whenever a merchant entered a kingdom with 
                his merchandise he had to make a suitable offerings of gifts to the King. 
                Later the different states switched over this custom into statutory levy and 
                started collecting customs duty on goods imported into and sometime exported 
                out of its state.
              </p>
              <p>
                India is a member of World Customs Organisation and adopted number of 
                International Customs Conventions and procedures such as Harmonised System 
                of Nomenclature for classification purpose of the goods and WTO Code for the 
                purpose of valuation.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/customs-2.jpg"
          imageAlt="Evolution of Customs"
          imagePosition="left"
        />

        {/* Section 3 - Modern Framework */}
        <PracticeAreaCard
          heading="Self-Assessment and Facilitation"
          content={
            <>
              <p>
                Government of India in the Budget of 2011, made legislative provision for 
                importers and exporters, for self-assessment of their customs duty liability, 
                however subject to check and re-assessment by the Customs Officers. The 
                Central Board of Indirect Taxes and Customs (CBIC) entered in an agreement 
                with institutes for setting up Certified Facilitation Centre.
              </p>
              <p>
                A new Directorate namely, Directorate of International Customs (DIC) has 
                also constituted w.e.f. 01.07.2017, which will assist the CBIC in 
                international matters pertaining to Customs and IGST tariff matters. Another 
                body is also created namely Directorate General of Analytics and Risk 
                Management (DGARM) for Data Mining and Risk Management.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/customs-1.jpg"
          imageAlt="Modern Framework"
          imagePosition="right"
        />

        {/* Section 4 - GST and Customs Integration */}
        <PracticeAreaCard
          heading="Customs in GST Regime"
          content={
            <>
              <p>
                Prior to 01.07.2017 multiple taxes such as CVD, basic custom duty, 
                anti-dumping duty, and safeguard duty were imposed on every import. Customs 
                duty is being replaced by IGST, which means instead of Custom duty, IGST and 
                Basic Customs Duty is applicable on every export and import of goods and 
                services.
              </p>
              <p>
                In GST regime, Import Export Code (IEC) would be replaced by PAN/GSTIN. The 
                export of goods and services takes place from India to any other place 
                outside India is considered as &apos;Zero Rated Supplies&apos;. It means that no GST 
                will be applicable for the exporters. No amendments have been made to the 
                drawback provisions under Customs Act, 1962 in the GST regime.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/customs-2.jpg"
          imageAlt="Customs in GST"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
