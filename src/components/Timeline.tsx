
import { useState } from "react";
import { ArrowRight, Building, Users, Lightbulb, Code, Layers, TestTube, Rocket } from "lucide-react";

interface Stage {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Timeline = () => {
  const [activeStage, setActiveStage] = useState(1);

  const stages: Stage[] = [
    {
      id: 1,
      title: "Business Exploration",
      description: "Define business goals, target audience, and core value proposition. Create a clear vision for the MVP.",
      icon: <Building size={24} />,
      color: "from-rabbit-turquoise/20 to-rabbit-turquoise/5"
    },
    {
      id: 2,
      title: "Customer Validation",
      description: "Validate your assumptions with real customers. Test your value proposition before building anything.",
      icon: <Users size={24} />,
      color: "from-rabbit-purple/20 to-rabbit-purple/5"
    },
    {
      id: 3,
      title: "Solution Design",
      description: "Design the minimum solution that delivers value. Focus on core features that solve the main problem.",
      icon: <Lightbulb size={24} />,
      color: "from-rabbit-orange/20 to-rabbit-orange/5"
    },
    {
      id: 4,
      title: "Core Implementation",
      description: "Build the essential features using AI acceleration. Focus on functionality over perfection.",
      icon: <Code size={24} />,
      color: "from-rabbit-turquoise/20 to-rabbit-turquoise/5"
    },
    {
      id: 5,
      title: "Feature Expansion",
      description: "Add secondary features based on validated priorities. Keep expanding within the 7-day timeframe.",
      icon: <Layers size={24} />,
      color: "from-rabbit-purple/20 to-rabbit-purple/5"
    },
    {
      id: 6,
      title: "Testing & Refinement",
      description: "Test with real users, gather feedback, and make quick refinements to improve the experience.",
      icon: <TestTube size={24} />,
      color: "from-rabbit-orange/20 to-rabbit-orange/5"
    },
    {
      id: 7,
      title: "Launch & Learn",
      description: "Release your MVP to early adopters and start collecting real-world data for the next iteration.",
      icon: <Rocket size={24} />,
      color: "from-rabbit-turquoise/20 to-rabbit-turquoise/5"
    }
  ];

  return (
    <section id="stages" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rabbit-dark to-rabbit-dark/90 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">7 Methodology Stages</h2>
          <p className="text-xl text-gray-300">
            The Rabbit MVP methodology follows a structured 7-day process, with each day focused on
            a specific stage of development and validation.
          </p>
        </div>
        
        {/* Timeline representation */}
        <div className="hidden md:flex justify-between items-center mb-12 relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="absolute h-1 bg-gradient-to-r from-rabbit-turquoise via-rabbit-purple to-rabbit-orange left-0 right-0 top-1/2 transform -translate-y-1/2" />
          
          {/* Stage nodes */}
          {stages.map((stage) => (
            <div 
              key={stage.id}
              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${
                activeStage === stage.id 
                  ? 'bg-gradient-to-br from-rabbit-turquoise to-rabbit-purple scale-125 shadow-lg shadow-rabbit-purple/30' 
                  : 'bg-rabbit-dark border border-gray-700'
              }`}
              onClick={() => setActiveStage(stage.id)}
            >
              <span className="text-white font-bold">{stage.id}</span>
            </div>
          ))}
        </div>
        
        {/* Mobile timeline */}
        <div className="flex md:hidden mb-8 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex space-x-4">
            {stages.map((stage) => (
              <div 
                key={stage.id}
                className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  activeStage === stage.id 
                    ? 'bg-gradient-to-br from-rabbit-turquoise to-rabbit-purple' 
                    : 'bg-rabbit-dark border border-gray-700'
                }`}
                onClick={() => setActiveStage(stage.id)}
              >
                <span className="text-white font-bold">{stage.id}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Active stage details */}
        <div className="glass p-8 rounded-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stages[activeStage-1].color} flex items-center justify-center flex-shrink-0`}>
              {stages[activeStage-1].icon}
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                Day {activeStage}: {stages[activeStage-1].title}
                {activeStage === 2 && (
                  <span className="ml-2 text-sm bg-rabbit-purple/20 text-rabbit-purple px-2 py-1 rounded-full">
                    Key Stage
                  </span>
                )}
              </h3>
              <p className="text-gray-300 text-lg">{stages[activeStage-1].description}</p>
              
              {activeStage === 2 && (
                <div className="mt-4 border-l-2 border-rabbit-purple pl-4">
                  <p className="text-rabbit-purple italic">
                    The validation stream from this stage flows through the entire process, 
                    guiding all future decisions and development priorities.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={() => setActiveStage(prev => prev === 1 ? 7 : prev - 1)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Previous Stage
            </button>
            
            <button 
              onClick={() => setActiveStage(prev => prev === 7 ? 1 : prev + 1)}
              className="text-rabbit-turquoise hover:text-rabbit-turquoise/80 transition-colors flex items-center"
            >
              Next Stage <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
