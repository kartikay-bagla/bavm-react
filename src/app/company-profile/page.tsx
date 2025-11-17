import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function CompanyProfile() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Company Profile
        </h1>

        {/* Section 1 - Our Foundation */}
        <PracticeAreaCard
          heading="Our Foundation & History"
          content={
            <>
              <p>
                BAVM is an association of lawyers practicing in the Supreme Court, High Courts, Tribunals, CESTAT, PMLA, Settlement Commission, National Company Law Tribunal, National Company Law Appellate Tribunal, National Green Tribunal and other Forums.
              </p>
              <p>
                The foundation of BAVM has been laid under the guidance of Late Mr. R. K. Garg (Former Judge) & Late Mr. P. N. Awasthi (Advocate) who mentored us and gave a vision to establish a firm committed to excellence in legal practice.
              </p>
            </>
          }
          imageSrc="/images/home/1.jpg"
          imageAlt="BAVM Foundation"
          imagePosition="right"
        />

        {/* Section 2 - Our Services */}
        <PracticeAreaCard
          heading="Comprehensive Legal Services"
          content={
            <>
              <p>
                We assist our clients in the areas of Advisory, Litigation and Research, providing expert Legal Opinions and Consultation services. Our team is dedicated to delivering the best possible outcomes before the respective Forums.
              </p>
              <p>
                With extensive experience across multiple judicial bodies, we offer comprehensive legal support tailored to meet the unique needs of each client, ensuring thorough preparation and strategic representation.
              </p>
            </>
          }
          imageSrc="/images/home/2.jpg"
          imageAlt="Legal Services"
          imagePosition="left"
        />

        {/* Section 3 - Areas of Expertise */}
        <PracticeAreaCard
          heading="Areas of Legal Expertise"
          content={
            <>
              <p>
                Our practice encompasses a wide range of legal domains where we provide specialized assistance and representation. We handle complex matters with precision and dedication.
              </p>
              <div>
                <p className="mb-4">Our key areas of practice include:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>GST (Goods and Services Tax)</li>
                  <li>Customs Law and Regulations</li>
                  <li>Central Excise and Service Tax</li>
                  <li>FEMA (Foreign Exchange Management Act)</li>
                  <li>Money Laundering Prevention</li>
                  <li>Environmental Law and Compliance</li>
                  <li>Corporate and Commercial Advisory</li>
                  <li>Employment and Industrial Relations</li>
                </ul>
              </div>
            </>
          }
          imageSrc="/images/home/3.jpg"
          imageAlt="Legal Expertise"
          imagePosition="right"
        />

        {/* Section 4 - Our Commitment */}
        <PracticeAreaCard
          heading="Commitment to Excellence"
          content={
            <>
              <p>
                At BAVM, we are committed to upholding the highest standards of legal practice and professional ethics. Our team combines deep legal knowledge with practical experience to provide innovative solutions to complex legal challenges.
              </p>
              <p>
                We strive to build lasting relationships with our clients through transparent communication, diligent representation, and a steadfast commitment to achieving the best possible outcomes in every matter we handle.
              </p>
            </>
          }
          imageSrc="/images/home/4.jpg"
          imageAlt="Commitment to Excellence"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
