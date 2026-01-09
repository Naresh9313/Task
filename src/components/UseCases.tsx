const useCases = [
  {
    title: "Small Businesses",
    desc: "Automate WhatsApp conversations and respond to leads instantly."
  },
  {
    title: "Sales Teams",
    desc: "Manage multiple leads efficiently with AI assistance."
  },
  {
    title: "Founders & Startups",
    desc: "Scale sales operations without increasing manpower."
  }
];

const UseCases = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Who Is SellSharp For?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {useCases.map((item, index) => (
          <div key={index} className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
