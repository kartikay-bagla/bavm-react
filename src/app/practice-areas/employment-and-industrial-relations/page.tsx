import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function EmploymentAndIndustrialRelations() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Employment and Industrial Relations
        </h1>

        {/* Section 1 - Services Overview */}
        <PracticeAreaCard
          heading="Comprehensive Employment Solutions"
          content={
            <>
              <p>
                The Firm provides assistance to manufacturing companies employing a large 
                number of factory workers covered by various labour/employment related 
                statutes as well as companies in the service sector including software and 
                BPO companies.
              </p>
              <p>
                We advise on labour/employment issues as part of Mergers and Acquisitions, 
                business transfer and re-organisation transactions. The Firm regularly advises 
                clients on stand-alone labour/employment matters.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/employment-and-industrial-relations-1.jpg"
          imageAlt="Comprehensive Employment Solutions"
          imagePosition="right"
        />

        {/* Section 2 - Advisory Services */}
        <PracticeAreaCard
          heading="Advisory and Documentation Services"
          content={
            <>
              <p>
                We assist clients in the preparation of service rules, structuring of 
                compensation packages, drafting of employment contracts, non-compete and 
                confidentiality agreements and termination notices to negotiating collective 
                bargaining contracts.
              </p>
              <p>
                The firm&apos;s labour/employment practice also includes advising on contentious 
                labour/employment matters, Draft Employment Standing Orders and advice on 
                Employee Provident Fund (EPF) under the Employee Provident Fund Act, 
                Gratuity Act, etc.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/employment-and-industrial-relations-2.jpg"
          imageAlt="Advisory Services"
          imagePosition="left"
        />

        {/* Section 3 - Legal Framework */}
        <PracticeAreaCard
          heading="Labour Laws and Regulations"
          content={
            <>
              <p>
                In India, we have multiple Labour & Industrial laws related with Legislations 
                Governing the Industrial Relations; the Wages; the Working Hours, Conditions 
                of Service and Employment; the Equality and Empowerment of Women; the 
                Deprived and Disadvantaged Sections of the Society and the Social Security.
              </p>
              <p>
                These laws are also important because they enable businesses to devote more 
                of their focus to productivity and profitability rather than giving constant 
                energy and resources to problem-solving.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/employment-and-industrial-relations-1.jpg"
          imageAlt="Labour Laws"
          imagePosition="right"
        />

        {/* Section 4 - BAVM's Expertise */}
        <PracticeAreaCard
          heading="Our Expertise in Labour Matters"
          content={
            <>
              <p>
                Labour and employment is another one of the key practice areas of BAVM Legal. 
                The Firm has substantial experience in representing the interests of its 
                clients in Labour Courts and Tribunals. Experience in this area ranges from 
                services in all laws and regulations related to labour and employment.
              </p>
              <p>
                We represent various clients in Labour Court, Industrial Tribunals, Central 
                Administrative Tribunal, Court of the Labour Commissioner, various High 
                Courts and the Supreme Court under enactments such as Industrial Dispute Act 
                1947, Trade Union Act 1926, Minimum Wages Act 1948, Payment of Wages Act 
                1936, Factories Act 1948, Payment of Bonus Act 1965, Equal Remuneration Act 
                1976, and other relevant legislations.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/employment-and-industrial-relations-2.jpg"
          imageAlt="Our Expertise"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
