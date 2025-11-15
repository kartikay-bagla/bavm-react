import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function IntellectualProperty() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Intellectual Property
        </h1>

        {/* Section 1 - Introduction */}
        <PracticeAreaCard
          heading="IP Assets Management"
          content={
            <>
              <p>
                BAVM Legal team is passionate and experienced in all aspects of intellectual 
                property, including patents, trademarks and copyrights including servicing 
                and managing the intellectual property needs and assets of clients.
              </p>
              <p>
                The team understands how intellectual property (&quot;IP&quot;) assets can best be 
                created; value thereto determined and rights therein protected; and used/ 
                acquired/supplemented to produce a competitive advantage.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/intellectual-property-1.jpg"
          imageAlt="IP Assets Management"
          imagePosition="right"
        />

        {/* Section 2 - Trademark & GI */}
        <PracticeAreaCard
          heading="Trademark and Geographical Indication"
          content={
            <>
              <p>
                The firm has a robust trademark practice and undertakes all assignments 
                including registration of trademark, service marks, trade name searches, 
                drafting and representing clients at hearings. The team possesses experience 
                in representing clients in all types of trademark disputes including domain 
                names, infringement, etc.
              </p>
              <p>
                The firm offers services in geographical indications which include due 
                diligence, challenging unregistered GIs, protection of certification marks, 
                assisting in registration of GIs, renewal of GI etc. The team also represents 
                clients in dispute resolution, infringement proceedings across courts and 
                tribunals.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/intellectual-property-2.jpg"
          imageAlt="Trademark and GI"
          imagePosition="left"
        />

        {/* Section 3 - Design Registration */}
        <PracticeAreaCard
          heading="Design Registration and Protection"
          content={
            <>
              <p>
                The Firm offers services in design registration and protection to its 
                clients. The team has expertise in handling all aspects in Design law which 
                include filing design applications, renewal of designs, design searches, 
                tracking, protection and opposing infringement of design.
              </p>
              <p>
                Our comprehensive approach ensures that your unique designs are well 
                protected under the applicable laws, providing you with the competitive edge 
                in the marketplace while safeguarding your creative investments.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/intellectual-property-1.jpg"
          imageAlt="Design Registration"
          imagePosition="right"
        />

        {/* Section 4 - Copyright */}
        <PracticeAreaCard
          heading="Copyright Services"
          content={
            <>
              <p>
                The firm offers legal services to all stakeholders in the artistic and 
                creative realm in matters pertaining to copyright. The gamut of services 
                include copyright registration, copyright prosecution, contracts & agreements, 
                licensing, negotiation, due diligence, compliances, dispute resolution and 
                enforcement.
              </p>
              <p>
                The firm&apos;s clients include artists, authors, IT companies, media houses, 
                production units etc. We provide end-to-end copyright solutions ensuring that 
                creative works are protected and properly licensed for commercial use.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/intellectual-property-2.jpg"
          imageAlt="Copyright Services"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
