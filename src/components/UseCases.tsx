
import { Check, X, UserCircle, Building2, Briefcase, Lightbulb, GraduationCap, Activity, ShieldAlert, AlertTriangle, Factory, FileWarning } from "lucide-react";

const UseCases = () => {
  const goodUsesCases = [
    {
      title: "Pre-seed startups",
      description: "Perfect for validating ideas before seeking investment.",
      icon: <UserCircle className="text-green-600" size={24} />
    },
    {
      title: "Corporate innovations",
      description: "Rapidly test new product ideas within established companies.",
      icon: <Building2 className="text-green-600" size={24} />
    },
    {
      title: "Personal side-hustle projects",
      description: "Bring your ideas to life without quitting your day job.",
      icon: <Briefcase className="text-green-600" size={24} />
    },
    {
      title: "Idea validation",
      description: "Test if your concept resonates with real customers before investing more.",
      icon: <Lightbulb className="text-green-600" size={24} />
    },
    {
      title: "Educational MVP",
      description: "Learn by building actual products in a structured way.",
      icon: <GraduationCap className="text-green-600" size={24} />
    }
  ];

  const badUseCases = [
    {
      title: "Projects of critical safety importance",
      description: "Medical, aerospace, or other safety-critical applications.",
      icon: <Activity className="text-red-500" size={24} />
    },
    {
      title: "Projects requiring perfect first deployment",
      description: "When there's no room for iteration or errors.",
      icon: <ShieldAlert className="text-red-500" size={24} />
    },
    {
      title: "Complex enterprise systems",
      description: "Large-scale systems with intricate integrations and requirements.",
      icon: <Factory className="text-red-500" size={24} />
    },
    {
      title: "Projects with non-negotiable regulatory requirements",
      description: "Highly regulated industries where compliance takes precedence.",
      icon: <FileWarning className="text-red-500" size={24} />
    }
  ];

  return (
    <section id="use-cases" className="py-20 relative overflow-hidden bg-[#f8f8f8]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Good use cases */}
          <div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-medium mb-2 text-gray-900 subtle-accent">
                Who is Rabbit MVP For
              </h2>
              <div className="mb-8"></div>
              
              <div className="space-y-6">
                {goodUsesCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4 minimal-card">
                    <div className="flex-shrink-0 mt-1">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bad use cases */}
          <div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-medium mb-2 text-gray-900 subtle-accent">
                Who is Rabbit MVP NOT For
              </h2>
              <div className="mb-8"></div>
              
              <div className="space-y-6">
                {badUseCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4 minimal-card">
                    <div className="flex-shrink-0 mt-1">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
