import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function Environment() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Environment
        </h1>

        {/* Section 1 - Understanding Environment */}
        <PracticeAreaCard
          heading="Environmental Framework"
          content={
            <>
              <p>
                Environment includes water, air and land and inter-relationship which exist 
                among and between water, air, land and human beings, other living creatures, 
                plants, micro-organisms and property. It includes the complex physical, 
                chemical and biological factors surrounding an organism or an ecological 
                community.
              </p>
              <p>
                Such factors act and interact with various species and organism to affect 
                their form, growth and survival. Any unfavourable alteration of this 
                environment is called environmental pollution. There has been substantive 
                decline in Environment quality due to increasing pollution, loss of vegetal 
                cover and biological diversity.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/environment-1.jpg"
          imageAlt="Environmental Framework"
          imagePosition="right"
        />

        {/* Section 2 - Legal Framework */}
        <PracticeAreaCard
          heading="Environment Protection Act 1986"
          content={
            <>
              <p>
                The Environment (Protection) Bill having been passed by both the Houses of 
                Parliament, received the assent of the President on 23rd of May 1986 and it 
                came in the Statue book as The Environment (Protection) Act 1986.
              </p>
              <div>
                <p className="mb-4">The main acts for environment protection in India include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The Forest Conservation Act, 1980</li>
                  <li>Air (Prevention & Control of Pollution) Act, 1981</li>
                  <li>Atomic Energy Act, 1962</li>
                  <li>Environmental Protection Act, 1986</li>
                  <li>National Environmental Tribunal 1995</li>
                  <li>Hazardous Wastes (Management and Handling) Rules 1989</li>
                  <li>Biological Diversity Act 2002</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/practice-areas/environment-2.jpg"
          imageAlt="Environment Protection Act"
          imagePosition="left"
        />

        {/* Section 3 - Our Services */}
        <PracticeAreaCard
          heading="BAVM Legal Environmental Practice"
          content={
            <>
              <p>
                BAVM Legal team offers guidance to domestic and international clients on 
                India&apos;s comprehensive environmental laws pertaining to recycling, hazardous 
                waste management (by hospitals, clinics, manufacturing industries etc.), 
                water and air pollution, forest and timber regulations, handling of 
                chemicals, etc.
              </p>
              <p>
                The team assists clients with regulatory compliances, enforcement actions 
                and civil litigation in all aspects of environmental and natural resources 
                law. We represent businesses of all sizes from companies to sole 
                proprietorships, non-profit organizations, trusts and estates, governmental 
                entities, individuals and trade associations.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/environment-3.jpg"
          imageAlt="Our Services"
          imagePosition="right"
        />

        {/* Section 4 - Expertise and Representation */}
        <PracticeAreaCard
          heading="Regulatory Compliance and Litigation"
          content={
            <>
              <p>
                We advise and assist in coordinating with State Pollution Control Boards 
                (SPCBs), the Central Pollution Control Board (CPCB) and the Central Ministry 
                of Environment, Forests and Climate Change (MoEF&CC).
              </p>
              <p>
                The team has enriching experience in handling cases with the National Green 
                Tribunal, High Courts and the Supreme Court of India. We represent clients 
                in litigation, regulatory and transactional matters across all environmental 
                law domains.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/environment-1.jpg"
          imageAlt="Regulatory Compliance"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
