import content from '@/content.json';

export default function KanpurOffice() {
  const officeData = content.contact.branchOffices.offices.find(office => office.name === 'Kanpur');

  if (!officeData) {
    return <div>Office not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Branch Office - Kanpur</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center min-h-[400px]">
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold mb-4">{officeData.name} Office</h2>
              <div className="flex items-start space-x-3">
                <i className="fas fa-building text-black mt-1"></i>
                <span dangerouslySetInnerHTML={{ __html: officeData.address }} />
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-black"></i>
                <a href={`tel:${officeData.phone.replace(/\s+/g, '')}`} className="text-black hover:underline">{officeData.phone}</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope-square text-black"></i>
                <a href={`mailto:${officeData.email}`} className="text-black hover:underline">{officeData.email}</a>
              </div>
            </div>

            <div className="h-full">
              <iframe
                src={officeData.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={`BAVM Legal ${officeData.name} Office`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}