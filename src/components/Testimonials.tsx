const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Startup Founder",
    text: "SellSharp helped us increase lead conversion by 40% in just one month."
  },
  {
    name: "Anjali Patel",
    role: "Sales Manager",
    text: "The AI WhatsApp automation saves hours of manual follow-ups."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 mb-4">"{item.text}"</p>
            <h4 className="font-semibold">{item.name}</h4>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
