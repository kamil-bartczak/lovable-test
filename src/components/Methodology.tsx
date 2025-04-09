
import { Zap, Rabbit, Brain, CheckCircle, Sparkles } from "lucide-react";

interface MethodologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const MethodologyCard = ({ icon, title, description, color }: MethodologyCardProps) => {
  return (
    <div className={`glass p-6 rounded-xl hover:border-${color}-400/50 transition-all duration-300 hover:scale-105`}>
      <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${color}-500/20 text-${color}-400 mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Methodology = () => {
  const principles = [
    {
      icon: <Zap size={24} />,
      title: "Speed over perfection",
      description: "Focus on quick validation instead of building the perfect product. Iterate rapidly to find market fit.",
      color: "rabbit-turquoise"
    },
    {
      icon: <Rabbit size={24} />,
      title: "Multiply and validate",
      description: "Create multiple MVPs to test different approaches rather than perfecting a single one.",
      color: "rabbit-purple"
    },
    {
      icon: <Brain size={24} />,
      title: "AI as co-founder",
      description: "Leverage AI to accelerate development, make decisions, and enhance productivity.",
      color: "rabbit-orange"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Validation before code",
      description: "Validate your idea with target customers before investing heavily in development.",
      color: "rabbit-purple"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Business metrics first",
      description: "Start with clear business objectives and metrics to measure success.",
      color: "rabbit-turquoise"
    }
  ];

  return (
    <section id="methodology" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rabbit-purple/5 to-rabbit-dark pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-purple">About the Methodology</h2>
          <p className="text-xl text-gray-300">
            Rabbit MVP is more than just a development approach — it's a revolutionary mindset 
            that puts speed, validation, and AI collaboration at the forefront of product creation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <MethodologyCard 
              key={index}
              icon={principle.icon}
              title={principle.title}
              description={principle.description}
              color={principle.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
