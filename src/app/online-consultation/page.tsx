import PracticeAreaCard from "@/components/PracticeAreaCard";

export default function OnlineConsultation() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-primary">
          Online Legal Consultation
        </h1>

        {/* Section 1 - How It Works */}
        <PracticeAreaCard
          heading="Simple Consultation Process"
          content={
            <>
              <p className="mb-4">
                Our streamlined online consultation process ensures you receive timely,
                professional legal advice without the need for in-person visits. Here's
                how it works:
              </p>
              <div>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Step 1: Initial Contact</h4>
                  <p>Reach out to us via email or phone to schedule your consultation.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Step 2: Provide Details</h4>
                  <p>Share relevant information about your legal matter, including documents if needed.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Step 3: Consultation</h4>
                  <p>Discuss your case with our legal experts through video call or phone.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Step 4: Next Steps</h4>
                  <p>Receive clear guidance and recommendations for proceeding with your matter.</p>
                </div>
              </div>
            </>
          }
          imageSrc="/images/home/2.jpg"
          imageAlt="Consultation Process"
          imagePosition="left"
        />

        {/* Section 2 - Contact Information */}
        <PracticeAreaCard
          heading="Get Started Today"
          content={
            <>
              <p>
                Ready to speak with our legal experts? Contact us through any of the
                following channels to schedule your online consultation:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@bavm.legal" className="text-black hover:underline">
                      contact@bavm.legal
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919810130562" className="text-black hover:underline">
                      +91 98101 30562
                    </a>
                  </div>
                </div>
              </div>
            </>
          }
          imageSrc="/images/home/4.jpg"
          imageAlt="Contact Information"
          imagePosition="right"
        />

        {/* Section 3 - How We Help */}
        <PracticeAreaCard
          heading="Comprehensive Legal Support"
          content={
            <>
              <p>
                Our online consultations go beyond basic advice. We provide comprehensive
                legal support to help you make informed decisions about your case:
              </p>
              <div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Initial Assessment</h4>
                    <p>Evaluate the merits of your case and potential outcomes.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Strategic Guidance</h4>
                    <p>Develop a roadmap for addressing your legal matter effectively.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Risk Analysis</h4>
                    <p>Identify potential risks and mitigation strategies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Next Steps</h4>
                    <p>Clear recommendations on immediate actions and long-term planning.</p>
                  </div>
                </div>
              </div>
              <p className="mt-6">
                Whether you need representation, advisory services, or just initial guidance,
                our experienced team is equipped to handle matters across all practice areas
                including indirect taxes, corporate law, environmental matters, and more.
              </p>
            </>
          }
          imageSrc="/images/home/5.jpg"
          imageAlt="Legal Support"
          imagePosition="left"
        />
      </div>
    </div>
  );
}