import { UserCircle, Building2, Briefcase, Lightbulb, GraduationCap, Activity, ShieldAlert, Factory, FileWarning } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("for");

  const goodUsesCases = [
    {
      title: "Pre-seed startups",
      description: "Perfect for validating ideas before seeking investment.",
      icon: <UserCircle className="text-green-600" size={28} />
    },
    {
      title: "Corporate innovations",
      description: "Rapidly test new product ideas within established companies.",
      icon: <Building2 className="text-green-600" size={28} />
    },
    {
      title: "Personal side-hustle projects",
      description: "Bring your ideas to life without quitting your day job.",
      icon: <Briefcase className="text-green-600" size={28} />
    },
    {
      title: "Idea validation",
      description: "Test if your concept resonates with real customers before investing more.",
      icon: <Lightbulb className="text-green-600" size={28} />
    },
    {
      title: "Educational MVP",
      description: "Learn by building actual products in a structured way.",
      icon: <GraduationCap className="text-green-600" size={28} />
    }
  ];

  const badUseCases = [
    {
      title: "Projects of critical safety importance",
      description: "Medical, aerospace, or other safety-critical applications.",
      icon: <Activity className="text-red-500" size={28} />
    },
    {
      title: "Projects requiring perfect first deployment",
      description: "When there's no room for iteration or errors.",
      icon: <ShieldAlert className="text-red-500" size={28} />
    },
    {
      title: "Complex enterprise systems",
      description: "Large-scale systems with intricate integrations and requirements.",
      icon: <Factory className="text-red-500" size={28} />
    },
    {
      title: "Projects with non-negotiable regulatory requirements",
      description: "Highly regulated industries where compliance takes precedence.",
      icon: <FileWarning className="text-red-500" size={28} />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="use-cases" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Is Rabbit MVP Right For You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover if our streamlined approach aligns with your project needs
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-gray-100 rounded-full shadow-inner">
            <button
              onClick={() => setActiveTab("for")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "for" 
                  ? "bg-white text-green-600 shadow-md" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Ideal For
            </button>
            <button
              onClick={() => setActiveTab("not")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "not" 
                  ? "bg-white text-red-500 shadow-md" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Not Suitable For
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "for" ? (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {goodUsesCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100 hover:border-green-200 flex items-start gap-4 group"
                >
                  <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-800">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {badUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-50 hover:border-red-100 flex items-start gap-4 group"
                >
                  <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors duration-300">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-800">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
