const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            SellSharp
          </h3>
          <p className="max-w-sm">
            AI-powered WhatsApp sales automation for modern businesses.
          </p>
        </div>

        <div className="flex gap-10">
          <div>
            <h4 className="text-white mb-2">Product</h4>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Use Cases</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8">
        © {new Date().getFullYear()} SellSharp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
