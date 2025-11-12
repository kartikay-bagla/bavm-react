export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We are here to help you with your legal needs. Please feel free to contact us via email or phone.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Email</h3>
              <a href="mailto:contact@bavm.legal" className="text-blue-500 hover:underline">contact@bavm.legal</a>
            </div>
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <a href="tel:+911141775172" className="text-blue-500 hover:underline">+91 11 41775172</a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Offices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">Delhi (Corporate Office)</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Kanpur</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Allahbad</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Nagpur</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
