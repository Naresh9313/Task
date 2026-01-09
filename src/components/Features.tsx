const features = [
  { title: "AI WhatsApp Assistant", desc: "Instantly respond to leads using AI-powered conversations." },
  { title: "Lead Management", desc: "Track, assign, and nurture leads from one dashboard." },
  { title: "Automated Follow-ups", desc: "Never lose a lead with smart auto follow-up messages." },
  { title: "Analytics & Insights", desc: "Understand what converts with real-time analytics." },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose SellSharp?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              bg-white p-6 rounded-2xl shadow
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
