
export const Founders = () => {
  const founders = [
    {
      name: "John Smith",
      role: "Mathematics Expert",
      image: "/placeholder.svg",
      bio: "PhD in Applied Mathematics with 10+ years of teaching experience.",
    },
    {
      name: "Sarah Johnson",
      role: "Science Director",
      image: "/placeholder.svg",
      bio: "Research scientist specializing in physics education and curriculum development.",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Meet Our Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">{founder.name}</h3>
              <p className="text-primary font-medium text-center mb-2">{founder.role}</p>
              <p className="text-gray-600 text-center">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
