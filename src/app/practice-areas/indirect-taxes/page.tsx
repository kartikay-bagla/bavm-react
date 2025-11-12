import Link from 'next/link';

export default function IndirectTaxes() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Indirect Taxes</h1>
      <p className="text-lg text-center mb-8">
        BAVM Legal regularly advises its clients (international and domestic) on tax-related issues (indirect taxes).
      </p>
      <p className="text-lg text-center mb-8">
        Tax advice is provided both on a stand-alone basis on complex issues and also as part of structuring corporate transactions.
      </p>
      <p className="text-lg text-center mb-8">
        BAVM provides services for actively guiding their clients in navigating through various issues in the below mentioned areas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/practice-areas/indirect-taxes/gst">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold">GST</h3>
          </div>
        </Link>
        <Link href="/practice-areas/indirect-taxes/customs">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold">Customs</h3>
          </div>
        </Link>
        <Link href="/practice-areas/indirect-taxes/fema">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold">FEMA</h3>
          </div>
        </Link>
        <Link href="/practice-areas/indirect-taxes/money-laundering">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold">Money Laundering</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
