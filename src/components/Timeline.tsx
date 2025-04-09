
import { useState } from "react";
import { Building, Users, Lightbulb, Code, Layers, TestTube, Rocket } from "lucide-react";

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
      color: "border-rabbit-purple"
    },
    {
      id: 2,
      title: "Customer Validation",
      description: "Validate your assumptions with real customers. Test your value proposition before building anything.",
      icon: <Users size={24} />,
      color: "border-rabbit-turquoise"
    },
    {
      id: 3,
      title: "Solution Design",
      description: "Design the minimum solution that delivers value. Focus on core features that solve the main problem.",
      icon: <Lightbulb size={24} />,
      color: "border-rabbit-orange"
    },
    {
      id: 4,
      title: "Core Implementation",
      description: "Build the essential features using AI acceleration. Focus on functionality over perfection.",
      icon: <Code size={24} />,
      color: "border-rabbit-purple"
    },
    {
      id: 5,
      title: "Feature Expansion",
      description: "Add secondary features based on validated priorities. Keep expanding within the 7-day timeframe.",
      icon: <Layers size={24} />,
      color: "border-rabbit-turquoise"
    },
    {
      id: 6,
      title: "Testing & Refinement",
      description: "Test with real users, gather feedback, and make quick refinements to improve the experience.",
      icon: <TestTube size={24} />,
      color: "border-rabbit-orange"
    },
    {
      id: 7,
      title: "Launch & Learn",
      description: "Release your MVP to early adopters and start collecting real-world data for the next iteration.",
      icon: <Rocket size={24} />,
      color: "border-rabbit-purple"
    }
  ];

  return (
    <section id="stages" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-chakra font-bold mb-6 text-gray-900">7 Steps to MVP</h2>
          <p className="text-xl text-gray-600">
            A structured approach to building and validating your product in seven days.
          </p>
        </div>
        
        {/* Timeline visualization */}
        <div className="hidden md:block relative max-w-5xl mx-auto mb-12">
          <div className="absolute h-px bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`relative z-10 transition-all duration-300 ${
                  activeStage === stage.id ? 'scale-110' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-full bg-white border-2 ${stage.color} flex items-center justify-center transition-colors ${
                  activeStage === stage.id ? 'shadow-lg' : ''
                }`}>
                  <span className="font-chakra font-bold text-gray-900">{stage.id}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile stages */}
        <div className="flex md:hidden mb-8 overflow-x-auto no-scrollbar">
          <div className="flex space-x-4 px-4">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex-shrink-0 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-full bg-white border-2 ${stage.color} flex items-center justify-center ${
                  activeStage === stage.id ? 'shadow-lg' : ''
                }`}>
                  <span className="font-chakra font-bold text-gray-900">{stage.id}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Stage details */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className={`w-12 h-12 rounded-full bg-white border-2 ${stages[activeStage-1].color} flex items-center justify-center flex-shrink-0`}>
                {stages[activeStage-1].icon}
              </div>
              
              <div>
                <h3 className="text-2xl font-chakra font-bold mb-3 text-gray-900">
                  {stages[activeStage-1].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stages[activeStage-1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStage === stage.id 
                  ? 'bg-rabbit-purple w-4' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Stage ${stage.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
