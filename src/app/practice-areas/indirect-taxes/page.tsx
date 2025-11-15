import Image from "next/image";
import Link from "next/link";
import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function IndirectTaxes() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Indirect Taxes
        </h1>

        {/* Section 1 */}
        <PracticeAreaCard
          heading="Tax Advisory Services"
          content={
            <>
              <p>
                BAVM Legal regularly advises its clients (international and domestic) on 
                tax-related issues (indirect taxes).
              </p>
              <p>
                Tax advice is provided both on a stand-alone basis on complex issues and 
                also as part of structuring corporate transactions.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/indirect-tax-1.jpg"
          imageAlt="Tax Advisory Services"
          imagePosition="right"
        />

        {/* Section 2 */}
        <PracticeAreaCard
          heading="Comprehensive Guidance"
          content={
            <>
              <p>
                BAVM provides services for actively guiding their clients in navigating 
                through various issues in the below mentioned areas.
              </p>
              <p>
                Our team of experts ensures compliance and optimal tax planning strategies 
                tailored to your business needs.
              </p>
            </>
          }
          imageSrc="/images/practice-areas/indirect-tax-2.jpg"
          imageAlt="Comprehensive Guidance"
          imagePosition="left"
        />

        {/* Sub-areas section */}
        <div className="mt-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary">
            Our Specialized Areas
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link href="/practice-areas/indirect-taxes/gst">
              <div className="group relative h-48 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/practice-areas/gst-card.jpg"
                  alt="GST"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                    GST
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/practice-areas/indirect-taxes/customs">
              <div className="group relative h-48 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/practice-areas/customs-card.jpg"
                  alt="Customs"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                    Customs
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/practice-areas/indirect-taxes/fema">
              <div className="group relative h-48 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/practice-areas/fema-card.jpg"
                  alt="FEMA"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                    FEMA
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/practice-areas/indirect-taxes/money-laundering">
              <div className="group relative h-48 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/practice-areas/money-laundering-card.jpg"
                  alt="Money Laundering"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                    Money Laundering
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
