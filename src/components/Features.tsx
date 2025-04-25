
import { BookText, Calculator, Flask } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <BookText className="w-8 h-8" />,
      title: "Comprehensive Study Materials",
      description: "Access a vast library of well-structured educational content.",
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Interactive Practice",
      description: "Engage with dynamic problems and get instant feedback.",
    },
    {
      icon: <Flask className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Learn from experienced educators and subject matter experts.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose Apilageai
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-lg animate-fade-in">
              <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
