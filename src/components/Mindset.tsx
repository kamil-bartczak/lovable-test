import { useState } from "react";
import { Lightbulb, Clock, Rabbit, Brain, ArrowRight, Filter, Target, Edit, Zap, MessageSquare } from "lucide-react";

interface MindsetPrinciple {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Mindset = () => {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  const principles: MindsetPrinciple[] = [
    {
      id: 1,
      title: "Embrace imperfection",
      description: "Perfect is the enemy of done. Focus on creating a functional MVP that addresses core needs rather than striving for perfection.",
      icon: <Edit size={24} />
    },
    {
      id: 2,
      title: "Validate continuously",
      description: "Don't wait until your product is complete to get feedback. Continuously validate your assumptions with real users.",
      icon: <Target size={24} />
    },
    {
      id: 3,
      title: "Move fast, learn faster",
      description: "Speed of execution matters. Move quickly, gather data, and be ready to learn and pivot as needed.",
      icon: <Zap size={24} />
    },
    {
      id: 4,
      title: "Minimize scope",
      description: "Ruthlessly prioritize features. Focus only on what's needed to validate your core value proposition.",
      icon: <Filter size={24} />
    },
    {
      id: 5,
      title: "Respect time constraints",
      description: "The 7-day timeframe is sacred. Make decisions that honor this constraint and avoid scope creep.",
      icon: <Clock size={24} />
    },
    {
      id: 6,
      title: "Trust the process",
      description: "Follow the methodology stages in order. Each stage builds on the previous one in a carefully designed sequence.",
      icon: <Rabbit size={24} />
    },
    {
      id: 7,
      title: "Leverage AI intelligently",
      description: "View AI as a collaborator, not just a tool. Use it for ideation, content creation, and code generation.",
      icon: <Brain size={24} />
    },
    {
      id: 8,
      title: "Focus on user problems",
      description: "Always stay centered on the user problems you're solving, not the technology or features you're building.",
      icon: <Lightbulb size={24} />
    },
    {
      id: 9,
      title: "Communicate clearly",
      description: "Clear communication within your team and with users is essential for rapid development and validation.",
      icon: <MessageSquare size={24} />
    },
    {
      id: 10,
      title: "Multiply, don't perfect",
      description: "It's better to create multiple MVPs to test different approaches than to perfect a single product.",
      icon: <Rabbit size={24} />
    }
  ];

  return (
    <section id="mindset" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-chakra font-bold mb-6 text-gray-900">Rabbit Mindset</h2>
          <p className="text-xl text-gray-600">
            Ten core principles that guide rapid and effective MVP development.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className={`bg-white p-6 rounded-lg transition-all duration-300 cursor-pointer border ${
                activePrinciple === principle.id 
                  ? 'border-rabbit-purple shadow-lg' 
                  : 'border-gray-100 hover:border-rabbit-purple/50'
              }`}
              onClick={() => setActivePrinciple(principle.id === activePrinciple ? null : principle.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="font-chakra font-bold text-gray-900 mb-2">{principle.title}</h3>
                {activePrinciple === principle.id && (
                  <p className="text-gray-600 text-sm mt-2">{principle.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mindset;
