import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function Gst() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Goods and Services Tax
        </h1>

        {/* Section 1 - Introduction to GST */}
        <PracticeAreaCard
          heading="Removing Cascading Effect"
          content={
            <>
              <p>
                Primary object of GST is to remove the cascading effect of taxes. Prior to 
                July 2017, due to different indirect taxes i.e. Central Excise, Service Tax, 
                VAT etc. the taxpayers were not able to set off the tax credits of one tax 
                against the other.
              </p>
              <p>
                Now in the GST regime it contributed to the seamless flow of input tax 
                credits across both goods and services. Prior to GST regime Central Excise 
                Duty was levied on manufacture and Service Tax was levied on services 
                provided to the person. VAT was levied on sale of goods.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/gst-1.jpg"
          imageAlt="GST Introduction"
          imagePosition="right"
        />

        {/* Section 2 - GST Framework */}
        <PracticeAreaCard
          heading="One Nation, One Tax"
          content={
            <>
              <p>
                Now it is a single tax, imposed on the transactions namely Supply of the 
                goods and services, right from the manufacturer to the customer. GST is 
                based on the principle of destination-based consumption taxation as against 
                the previous principle of origin-based taxation.
              </p>
              <p>
                GST is a tax levied on all India basis, including J&K across goods and 
                services. It is a tax which has replaced many indirect taxes in India such 
                as the Excise Duty, VAT, Services Tax, Entertainment Tax etc. to achieve the 
                ideology of One Nation, One Tax.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/gst-2.jpg"
          imageAlt="GST Framework"
          imagePosition="left"
        />

        {/* Section 3 - GST Components */}
        <PracticeAreaCard
          heading="CGST, SGST, and IGST"
          content={
            <>
              <p>
                Goods and Service Tax Act excludes leviability of GST on Alcohol for human 
                consumption. Petroleum products are also temporarily not covered under GST. 
                Under GST tax liability is on supply of goods or services or both. GST is a 
                dual levy tax wherein Central and State government both are empowered to levy 
                tax.
              </p>
              <p>
                The tax is called CGST (Central Goods and Service Tax), levied by Central 
                Government, SGST (State Goods and Service Tax), levied by State Government, 
                and UTGST levied in an Union Territory. Tax levied on Inter State supply of 
                goods and services is called Integrated GST (IGST), collected by Centre.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/gst-1.jpg"
          imageAlt="GST Components"
          imagePosition="right"
        />

        {/* Section 4 - GST Compliance */}
        <PracticeAreaCard
          heading="GST Registration and Compliance"
          content={
            <>
              <p>
                Under GST Law every assessee/person has to get registered himself. Except in 
                few conditions value of supply of goods or services or both is the 
                transaction value, which is the price actually paid or payable for such 
                supply. Every registered person under GST is entitled to take credit of Input 
                Tax charged by the supplier.
              </p>
              <p>
                In case of non-payment of GST demand can be raised by issuing Show Cause 
                Notice in two years and nine months in normal situation whereas period of 
                issuing Show Cause Notice is extendable to four years and six months in case 
                of Fraud etc. Some of the powers and functions vest in GST Council which 
                comprise Union Finance Minister and Finance Ministers of all the States.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/gst-2.jpg"
          imageAlt="GST Compliance"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
