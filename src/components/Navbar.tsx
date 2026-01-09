const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          SellSharp
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer">Features</li>
          <li className="hover:text-indigo-600 cursor-pointer">Use Cases</li>
          <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
