import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function MoneyLaundering() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Money Laundering
        </h1>

        {/* Section 1 - Understanding Money Laundering */}
        <PracticeAreaCard
          heading="What is Money Laundering?"
          content={
            <>
              <p>
                General impression is that &quot;Money Laundering&quot; term is used as it converts 
                dirty money, commonly known as Black Money into clean money, commonly known 
                as White Money. The word &quot;Laundering&quot; means washing/cleaning hence here also 
                it is to switch Dirty Money into Clean Money.
              </p>
              <p>
                Clean Money is money coming from legal sources while Dirty Money is money 
                comes from illegal resources/activities. Dirty Money is also known as Number 
                Two money and White Money is known as Number One money. Converting of Black 
                Money into white money is call Money Laundering.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/money-laundering-1.jpg"
          imageAlt="Understanding Money Laundering"
          imagePosition="right"
        />

        {/* Section 2 - Historical Context */}
        <PracticeAreaCard
          heading="Origin of the Term"
          content={
            <>
              <p>
                There is history behind the word &quot;Laundering&quot;. Al Capone, notorious mafia in 
                USA, obtained lot of money from criminal activities by establishing 
                laundries all over USA. Laundry business is a cash business and he converted 
                his cash money into legitimate money hence the name &quot;Money Laundering&quot; came 
                in picture.
              </p>
              <p>
                The problem became more acute when the money is used for wrong activities. 
                To prevent such activities and conversion of Black Money into White Money, 
                the Parliament Enacted the Act known by the name &quot;Prevention of Money 
                Laundering Act, 2002&quot;. Money Laundering generally is done through banking 
                company, financial institutions, share market, Property Market, etc.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/money-laundering-2.jpg"
          imageAlt="Historical Context"
          imagePosition="left"
        />

        {/* Section 3 - Legal Framework */}
        <PracticeAreaCard
          heading="Prevention of Money Laundering Act"
          content={
            <>
              <p>
                In &quot;Prevention of Money Laundering Act, 2002&quot; certain restrictions are 
                imposed in cash transactions such as to follow certain procedures, maintain 
                accounts, submitting informations. Provision of punishment for offence of 
                Money Laundering is imprisonment upto 7/10 years beside imposing fine.
              </p>
              <p>
                The tainted property is liable to be confiscation. The Act provides 
                comprehensive framework to prevent money-laundering and to provide for 
                confiscation of property derived from, or involved in, money-laundering and 
                for matters connected therewith or incidental thereto.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/money-laundering-1.jpg"
          imageAlt="Legal Framework"
          imagePosition="right"
        />

        {/* Section 4 - BAVM Services */}
        <PracticeAreaCard
          heading="Our Services in Taxation"
          content={
            <>
              <div>
                <p className="mb-4">BAVM Legal team offers guidance to domestic and international clients on:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>GST Pre Audit: We do audit of the records, to minimise the objections raise by the Audit Team</li>
                  <li>Appearance before the Adjudicating/Appellate Authorities, Tribunals, High Courts and Supreme Court</li>
                  <li>Drafting and filing of Reply to Show Cause Notices before Quasi-Judicial Authorities</li>
                  <li>Drafting and filing of Appeals and Writs before various forums</li>
                  <li>Legal Opinion/Consultancy and Research on issues relating to areas of practice</li>
                  <li>Dealing with old and pending matters before different forums under Service tax, Central Excise and Customs Act</li>
                </ul>
              </div>
              <p>
                We also help our clients at the time of Audit, departmental enquiries and 
                get them registered with the respective departments, give guidelines for 
                setting-up of new units and also visit to units, if required.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/money-laundering-2.jpg"
          imageAlt="Our Services"
          imagePosition="left"
        />
      </div>
    </div>
  );
}
