
import { Zap, Rabbit, Brain, CheckCircle, Sparkles } from "lucide-react";

interface MethodologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MethodologyCard = ({ icon, title, description }: MethodologyCardProps) => {
  return (
    <div className="minimal-card hover:shadow-md transition-all duration-300">
      <div className="text-purple-700 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Methodology = () => {
  const principles = [
    {
      icon: <Zap size={24} />,
      title: "Speed over perfection",
      description: "Focus on quick validation instead of building the perfect product. Iterate rapidly to find market fit."
    },
    {
      icon: <Rabbit size={24} />,
      title: "Multiply and validate",
      description: "Create multiple MVPs to test different approaches rather than perfecting a single one."
    },
    {
      icon: <Brain size={24} />,
      title: "AI as co-founder",
      description: "Leverage AI to accelerate development, make decisions, and enhance productivity."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Validation before code",
      description: "Validate your idea with target customers before investing heavily in development."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Business metrics first",
      description: "Start with clear business objectives and metrics to measure success."
    }
  ];

  return (
    <section id="methodology" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-900">About the Methodology</h2>
          <div className="w-16 h-0.5 bg-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">
            Rabbit MVP is a structured methodology that puts speed, validation, and 
            efficiency at the forefront of product creation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <MethodologyCard 
              key={index}
              icon={principle.icon}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
