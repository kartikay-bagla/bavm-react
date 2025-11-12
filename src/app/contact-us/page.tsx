import content from '@/content.json';

export default function ContactUs() {
  const contactData = content.contact;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">{contactData.title}</h1>

      {/* Corporate Office Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[25%_50%_25%] gap-8 mb-16">
        <div>
          {/* Empty 25% space */}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{contactData.corporateOffice.title}</h2>
          <div className="grid grid-cols-[40%_60%] gap-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-building text-black mt-1"></i>
                <span dangerouslySetInnerHTML={{ __html: contactData.corporateOffice.address }} />
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-black"></i>
                <a href={`tel:${contactData.corporateOffice.phone.replace(/\s+/g, '')}`} className="text-black hover:underline">{contactData.corporateOffice.phone}</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope-square text-black"></i>
                <a href={`mailto:${contactData.corporateOffice.email}`} className="text-black hover:underline">{contactData.corporateOffice.email}</a>
              </div>
            </div>

            <div>
              <iframe
                src={contactData.corporateOffice.mapUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BAVM Legal Vasant Kunj"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          {/* Empty 25% space */}
        </div>
      </div>

      {/* Branch Offices Section */}
      <h2 className="text-3xl font-bold text-center mb-8">{contactData.branchOffices.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactData.branchOffices.offices.map((office, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4">{office.name}</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-building text-black mt-1"></i>
                <span dangerouslySetInnerHTML={{ __html: office.address }} />
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-black"></i>
                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-black hover:underline">{office.phone}</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope-square text-black"></i>
                <a href={`mailto:${office.email}`} className="text-black hover:underline">{office.email}</a>
              </div>
            </div>
            <iframe
              src={office.mapUrl}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`BAVM Legal ${office.name}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
