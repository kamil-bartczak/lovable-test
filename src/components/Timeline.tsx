
import { useState } from "react";
import { Building, Users, Lightbulb, Code, Layers, TestTube, Rocket, Wrench, ChevronRight, X } from "lucide-react";

interface Tool {
  id: number;
  name: string;
  description: string;
  link: string;
}

interface Stage {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  tools: Tool[];
}

const Timeline = () => {
  const [activeStage, setActiveStage] = useState<number | null>(1);
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  const stages: Stage[] = [
    {
      id: 1,
      title: "Business Exploration",
      description: "Define business goals, target audience, and core value proposition. Create a clear vision for the MVP.",
      icon: <Building size={48} />,
      color: "border-purple-600 text-purple-600",
      bgColor: "bg-purple-50",
      tools: [
        { id: 101, name: "Business Model Canvas", description: "A strategic management template for developing new or documenting existing business models.", link: "#" },
        { id: 102, name: "Value Proposition Canvas", description: "A tool to ensure a product or service is positioned around what the customer values and needs.", link: "#" },
        { id: 103, name: "Jobs To Be Done Framework", description: "A framework for understanding why customers 'hire' products and services to solve problems.", link: "#" },
        { id: 104, name: "Lean Canvas", description: "A 1-page business plan template that helps you deconstruct your idea into key assumptions.", link: "#" },
        { id: 105, name: "Market Sizing Calculator", description: "A tool to estimate the potential size of your target market.", link: "#" },
      ]
    },
    {
      id: 2,
      title: "Customer Validation",
      description: "Validate your assumptions with real customers. Test your value proposition before building anything.",
      icon: <Users size={48} />,
      color: "border-blue-500 text-blue-500",
      bgColor: "bg-blue-50",
      tools: [
        { id: 201, name: "Customer Interviews", description: "Structured conversations with potential customers to gather insights and validate assumptions.", link: "#" },
        { id: 202, name: "Landing Page Tests", description: "Simple web pages designed to test interest in a product before it's built.", link: "#" },
        { id: 203, name: "Problem Validation Surveys", description: "Questionnaires designed to confirm if your target market experiences the problem you're solving.", link: "#" },
        { id: 204, name: "Fake Door Testing", description: "A method to measure interest in a product or feature before building it.", link: "#" },
        { id: 205, name: "Empathy Mapping", description: "A collaborative tool teams can use to gain insight into their customers.", link: "#" },
      ]
    },
    {
      id: 3,
      title: "Solution Design",
      description: "Design the minimum solution that delivers value. Focus on core features that solve the main problem.",
      icon: <Lightbulb size={48} />,
      color: "border-yellow-500 text-yellow-500",
      bgColor: "bg-yellow-50",
      tools: [
        { id: 301, name: "Feature Prioritization Matrix", description: "A tool to help decide which features to include in your MVP based on impact and effort.", link: "#" },
        { id: 302, name: "User Stories Workshop", description: "A method to capture product functionality from the end-user perspective.", link: "#" },
        { id: 303, name: "Wireframing Tools", description: "Tools for creating low-fidelity mockups of your product interface.", link: "#" },
        { id: 304, name: "User Flow Diagrams", description: "Visual representations of the user's journey through your product.", link: "#" },
        { id: 305, name: "Design Sprint Methodology", description: "A time-constrained process to rapidly design and test a prototype.", link: "#" },
      ]
    },
    {
      id: 4,
      title: "Core Implementation",
      description: "Build the essential features using AI acceleration. Focus on functionality over perfection.",
      icon: <Code size={48} />,
      color: "border-green-500 text-green-500",
      bgColor: "bg-green-50",
      tools: [
        { id: 401, name: "No-Code Tools", description: "Platforms that allow you to build applications without writing code.", link: "#" },
        { id: 402, name: "AI Code Generation", description: "Tools that use AI to generate code based on natural language descriptions.", link: "#" },
        { id: 403, name: "UI Component Libraries", description: "Pre-built interface components that can be quickly assembled into applications.", link: "#" },
        { id: 404, name: "API Integration Platforms", description: "Tools that simplify connecting your application with third-party services.", link: "#" },
        { id: 405, name: "Continuous Integration Tools", description: "Systems that automatically merge code changes and run tests.", link: "#" },
      ]
    },
    {
      id: 5,
      title: "Feature Expansion",
      description: "Add secondary features based on validated priorities. Keep expanding within the 7-day timeframe.",
      icon: <Layers size={48} />,
      color: "border-indigo-500 text-indigo-500",
      bgColor: "bg-indigo-50",
      tools: [
        { id: 501, name: "Agile User Story Mapping", description: "A visual exercise that helps prioritize work and understand user experience.", link: "#" },
        { id: 502, name: "Feature Flag Systems", description: "Tools that allow you to toggle features on/off without deploying new code.", link: "#" },
        { id: 503, name: "Rapid Prototyping Tools", description: "Software that enables quick creation of interactive prototypes.", link: "#" },
        { id: 504, name: "Component-Based Design Systems", description: "Reusable design elements that ensure consistency and speed up development.", link: "#" },
        { id: 505, name: "BDD Testing Frameworks", description: "Tools that support Behavior-Driven Development for feature validation.", link: "#" },
      ]
    },
    {
      id: 6,
      title: "Testing & Refinement",
      description: "Test with real users, gather feedback, and make quick refinements to improve the experience.",
      icon: <TestTube size={48} />,
      color: "border-red-500 text-red-500",
      bgColor: "bg-red-50",
      tools: [
        { id: 601, name: "Usability Testing Templates", description: "Structured formats for observing users interact with your product.", link: "#" },
        { id: 602, name: "A/B Testing Platforms", description: "Tools to compare two versions of a webpage or app to determine which performs better.", link: "#" },
        { id: 603, name: "Heatmap Analytics", description: "Visual representations of where users click and spend time on your interface.", link: "#" },
        { id: 604, name: "User Feedback Collection Tools", description: "Solutions for gathering and organizing user opinions and suggestions.", link: "#" },
        { id: 605, name: "Bug Tracking Systems", description: "Software for documenting, tracking, and prioritizing product issues.", link: "#" },
      ]
    },
    {
      id: 7,
      title: "Launch & Learn",
      description: "Release your MVP to early adopters and start collecting real-world data for the next iteration.",
      icon: <Rocket size={48} />,
      color: "border-orange-500 text-orange-500",
      bgColor: "bg-orange-50",
      tools: [
        { id: 701, name: "Launch Checklist Template", description: "A comprehensive list of tasks to complete before releasing your product.", link: "#" },
        { id: 702, name: "Analytics Implementation Guide", description: "Instructions for setting up proper tracking of user behavior in your product.", link: "#" },
        { id: 703, name: "Early Adopter Engagement Kit", description: "Resources for attracting and retaining your first users.", link: "#" },
        { id: 704, name: "Customer Feedback Loops", description: "Systems for continuously collecting and implementing user suggestions.", link: "#" },
        { id: 705, name: "Iterative Development Planner", description: "A framework for planning your next development cycle based on launch data.", link: "#" },
      ]
    }
  ];

  return (
    <section id="stages" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-chakra font-bold mb-6 text-gray-900">7 Steps to MVP</h2>
          <p className="text-xl text-gray-600">
            A structured approach to building and validating your product in seven days.
          </p>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {stages.map((stage) => (
            <div 
              key={stage.id}
              className={`mb-12 p-8 rounded-lg shadow-sm transition-all duration-300 cursor-pointer ${stage.bgColor} border-l-4 ${stage.color} ${
                activeStage === stage.id ? 'scale-105 shadow-md' : ''
              }`}
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-full bg-white border-2 ${stage.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  {stage.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-chakra font-bold mb-3 text-gray-900">
                      {stage.title}
                    </h3>
                    <div className="text-lg font-bold bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-sm">
                      {stage.id}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                  
                  {activeStage === stage.id && (
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium flex items-center gap-2">
                          <Wrench size={16} /> Available Tools <span className="text-sm text-gray-500">({stage.tools.length} total)</span>
                        </h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {stage.tools.slice(0, 3).map((tool) => (
                          <div 
                            key={tool.id}
                            className="bg-white p-4 rounded shadow-sm cursor-pointer hover:shadow-md transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTool(tool);
                            }}
                          >
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium">{tool.name}</h5>
                              <ChevronRight size={16} className="text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tool Detail Sidebar */}
      {activeTool && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end transition-all">
          <div 
            className="bg-white w-full max-w-md shadow-lg p-6 animate-slide-in-right overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium">{activeTool.name}</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setActiveTool(null)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="prose">
              <p className="text-gray-600 mb-6">{activeTool.description}</p>
              
              <a 
                href={activeTool.link}
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
