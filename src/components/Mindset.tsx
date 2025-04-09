
import { useState, useEffect } from "react";
import { Lightbulb, Clock, Rabbit, Brain, Filter, Target, Edit, Zap, MessageSquare, Sparkles } from "lucide-react";

interface MindsetPrinciple {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Mindset = () => {
  const principles: MindsetPrinciple[] = [
    {
      id: 1,
      title: "Embrace imperfection",
      description: "Perfect is the enemy of done. Focus on creating a functional MVP that addresses core needs rather than striving for perfection.",
      icon: <Edit size={24} className="text-purple-600" />
    },
    {
      id: 2,
      title: "Validate continuously",
      description: "Don't wait until your product is complete to get feedback. Continuously validate your assumptions with real users.",
      icon: <Target size={24} className="text-blue-500" />
    },
    {
      id: 3,
      title: "Move fast, learn faster",
      description: "Speed of execution matters. Move quickly, gather data, and be ready to learn and pivot as needed.",
      icon: <Zap size={24} className="text-yellow-500" />
    },
    {
      id: 4,
      title: "Minimize scope",
      description: "Ruthlessly prioritize features. Focus only on what's needed to validate your core value proposition.",
      icon: <Filter size={24} className="text-green-500" />
    },
    {
      id: 5,
      title: "Respect time constraints",
      description: "The 7-day timeframe is sacred. Make decisions that honor this constraint and avoid scope creep.",
      icon: <Clock size={24} className="text-indigo-500" />
    },
    {
      id: 6,
      title: "Trust the process",
      description: "Follow the methodology stages in order. Each stage builds on the previous one in a carefully designed sequence.",
      icon: <Rabbit size={24} className="text-red-500" />
    },
    {
      id: 7,
      title: "Leverage AI intelligently",
      description: "View AI as a collaborator, not just a tool. Use it for ideation, content creation, and code generation.",
      icon: <Brain size={24} className="text-pink-500" />
    },
    {
      id: 8,
      title: "Focus on user problems",
      description: "Always stay centered on the user problems you're solving, not the technology or features you're building.",
      icon: <Lightbulb size={24} className="text-orange-500" />
    },
    {
      id: 9,
      title: "Communicate clearly",
      description: "Clear communication within your team and with users is essential for rapid development and validation.",
      icon: <MessageSquare size={24} className="text-teal-500" />
    },
    {
      id: 10,
      title: "Multiply, don't perfect",
      description: "It's better to create multiple MVPs to test different approaches than to perfect a single product.",
      icon: <Sparkles size={24} className="text-purple-700" />
    }
  ];

  // Auto-animate through principles
  const [visiblePrinciples, setVisiblePrinciples] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <section id="mindset" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-chakra font-bold mb-6 text-gray-900">Rabbit Mindset</h2>
          <p className="text-xl text-gray-600">
            Ten core principles that guide rapid and effective MVP development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className={`bg-white p-6 rounded-lg transition-all duration-500 shadow-sm border-t-4 
                ${visiblePrinciples.includes(principle.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${principle.id % 10 === 1 ? 'border-purple-600' : 
                  principle.id % 10 === 2 ? 'border-blue-500' : 
                  principle.id % 10 === 3 ? 'border-yellow-500' : 
                  principle.id % 10 === 4 ? 'border-green-500' : 
                  principle.id % 10 === 5 ? 'border-indigo-500' : 
                  principle.id % 10 === 6 ? 'border-red-500' : 
                  principle.id % 10 === 7 ? 'border-pink-500' : 
                  principle.id % 10 === 8 ? 'border-orange-500' : 
                  principle.id % 10 === 9 ? 'border-teal-500' : 'border-purple-700'
                }`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="font-chakra font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mindset;
