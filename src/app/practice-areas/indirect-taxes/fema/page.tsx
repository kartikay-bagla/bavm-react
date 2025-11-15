import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function Fema() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          FEMA
        </h1>

        {/* Section 1 - From FERA to FEMA */}
        <PracticeAreaCard
          heading="Evolution: FERA to FEMA"
          content={
            <>
              <p>
                India had adverse balance of payment in international trade as the imports 
                were more than export and there was shortage of foreign exchange in India. 
                In 1947 the Government introduced Foreign Exchange Regulation Act 1973 called 
                FERA which was later replaced with the Foreign Exchange Management Act.
              </p>
              <p>
                Thereafter Government of India taken initiative for processing of 
                liberalization of Indian economy and foreign investment was permitted in 
                numerous sectors. With this liberalization, flow of Foreign Exchange started 
                increasing and foreign exchange reserves increased substantially. FERA was 
                repealed and FEMA was introduced and made effective since 1st June 2000.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/fema-1.jpg"
          imageAlt="FERA to FEMA"
          imagePosition="right"
        />

        {/* Section 2 - FERA vs FEMA */}
        <PracticeAreaCard
          heading="Objectives: FERA vs FEMA"
          content={
            <>
              <p>
                The aim of FERA was to conserve Foreign Exchange resources and control 
                transaction directly/indirectly effecting foreign exchange prevention of its 
                leakage whereas the object of FEMA was to consolidate and amend the law 
                relating to foreign exchange with the object of facilitating external trade 
                and payments.
              </p>
              <p>
                Object and approach of FEMA was different from FERA hence FERA was repealed 
                and FEMA was introduced with removing several panel provisions as were in 
                FERA. Violation of FEMA provisions is covered under civil law whereas 
                violation of FERA was criminal offense.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/fema-2.jpg"
          imageAlt="FERA vs FEMA"
          imagePosition="left"
        />

        {/* Section 3 - RBI's Role */}
        <PracticeAreaCard
          heading="RBI as Controlling Authority"
          content={
            <>
              <p>
                In respect of FEMA, Reserve Bank of India is controlling authority. RBI is 
                entrusted with sole responsibility of FEMA and the sole guardian and only 
                custodian of foreign exchange of India. FEMA provides free transaction of 
                current account subject to certain restrictions that may be imposed.
              </p>
              <p>
                RBI control over capital account transactions, control over realization of 
                export proceeds, dealing in foreign exchange through authorized person such 
                as Authorised Dealer/Money Changer/Off-Shore Banking Unit, adjudication of 
                offensive, appeal provisions including Special Director (Appeals) and 
                Appellate Tribunal.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/fema-1.jpg"
          imageAlt="RBI's Role"
          imagePosition="right"
        />

        {/* Section 4 - Enforcement */}
        <PracticeAreaCard
          heading="Enforcement and Jurisdiction"
          content={
            <>
              <p>
                RBI exercise overall control over foreign exchange transactions however 
                enforcement of FEMA has been entrusted to a separate &quot;Directorate of 
                Enforcement&quot;. This directorate ensures compliance with FEMA provisions and 
                takes action against violations.
              </p>
              <p>
                FEMA extends to whole of the India with some extra territorial jurisdiction 
                i.e. applies to all branches, offices and agencies outside India owned and 
                controlled by a person resident in India. This comprehensive coverage ensures 
                effective regulation of foreign exchange transactions.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/fema-2.jpg"
          imageAlt="Enforcement"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
