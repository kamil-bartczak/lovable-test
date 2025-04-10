import { Zap, Rabbit, Brain, CheckCircle, Sparkles, Rocket, BarChart4, ArrowRightLeft, Clock, DollarSign } from "lucide-react";

interface MethodologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  hoverEffect?: boolean;
}

const MethodologyCard = ({ icon, title, description, color = "text-purple-700", hoverEffect = true }: MethodologyCardProps) => {
  return (
    <div className={`minimal-card ${hoverEffect ? 'hover:shadow-md hover:-translate-y-1' : ''} transition-all duration-300 mx-auto max-w-sm p-6 rounded-lg border border-gray-100`}>
      <div className={`${color} mb-4 flex justify-center`}>
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Methodology = () => {
  const principles = [
    {
      icon: <Zap size={24} />,
      title: "Speed over perfection",
      description: "Focus on quick validation instead of building the perfect product. Iterate rapidly to find market fit.",
      color: "text-amber-600"
    },
    {
      icon: <Rabbit size={24} />,
      title: "Multiply and validate",
      description: "Create multiple MVPs to test different approaches rather than perfecting a single one.",
      color: "text-purple-700"
    },
    {
      icon: <Brain size={24} />,
      title: "AI as co-founder",
      description: "Leverage AI to accelerate development, make decisions, and enhance productivity.",
      color: "text-blue-600"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Validation before code",
      description: "Validate your idea with target customers before investing heavily in development.",
      color: "text-green-600"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Business metrics first",
      description: "Start with clear business objectives and metrics to measure success.",
      color: "text-rose-600"
    }
  ];

  const bootstrapFeatures = [
    {
      icon: <DollarSign size={24} />,
      title: "Minimal Investment",
      description: "Start with what you have. Use free tools and minimal resources to bootstrap your MVP."
    },
    {
      icon: <ArrowRightLeft size={24} />,
      title: "Revenue-Driven Growth",
      description: "Reinvest early revenue back into development instead of relying on external funding."
    },
    {
      icon: <Clock size={24} />,
      title: "Sustainable Pace",
      description: "Build at a pace that allows for continuous learning and adaptation without burnout."
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Data-Informed Decisions",
      description: "Let real customer data guide your product evolution and investment priorities."
    }
  ];

  return (
    <section id="methodology" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* About the Methodology Section - Refactored */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="relative mb-6">
                <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-900">About the Methodology</h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-700 to-indigo-500 mb-6"></div>
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-50 rounded-full opacity-50 blur-xl z-0"></div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6 relative z-10">
                Rabbit MVP is a structured methodology that puts speed, validation, and 
                efficiency at the forefront of product creation.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our approach combines the best practices from lean startup, agile development, 
                and modern AI tools to help you build, validate, and launch your product in just 7 days.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center border border-white">
                    <Zap size={14} className="text-amber-600" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border border-white">
                    <Brain size={14} className="text-purple-700" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border border-white">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                </div>
                <span className="text-sm text-gray-500">Built on proven principles</span>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {principles.slice(0, 4).map((principle, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-all">
                    <div className={`${principle.color} mb-2`}>
                      {principle.icon}
                    </div>
                    <h3 className="text-sm font-medium mb-1">{principle.title}</h3>
                    <p className="text-xs text-gray-600">{principle.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-all">
                <div className={principles[4].color + " mb-2"}>
                  {principles[4].icon}
                </div>
                <h3 className="text-sm font-medium mb-1">{principles[4].title}</h3>
                <p className="text-xs text-gray-600">{principles[4].description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bootstrap MVP Section - New */}
        <div className="max-w-5xl mx-auto pt-10 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-900">Bootstrap MVP</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Build your minimum viable product with minimal resources and without external funding, 
              reinvesting early revenue into further development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootstrapFeatures.map((feature, index) => (
              <MethodologyCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color="text-emerald-600"
              />
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white">
                  <Rocket size={36} />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-medium mb-2 text-gray-900">From Zero to MVP in 7 Days</h3>
                <p className="text-gray-700">
                  The Bootstrap MVP approach focuses on creating value quickly and efficiently. By 
                  leveraging no-code tools, AI acceleration, and proven validation techniques, you can 
                  launch a profitable product without traditional funding or large development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
