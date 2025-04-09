
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  challenge: string;
  approach: string;
  results: string;
  metrics: string;
  image: string;
}

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "E-commerce Recommendation Engine",
      challenge: "A mid-size e-commerce platform needed to improve product discovery but couldn't afford months of development.",
      approach: "Using Rabbit MVP, we built a recommendation engine in 7 days, leveraging AI for data analysis and user behavior prediction.",
      results: "The MVP was deployed within a week and immediately started providing personalized recommendations to users.",
      metrics: "32% increase in average order value within the first month after deployment.",
      image: "gradient-1"
    },
    {
      id: 2,
      title: "Healthcare Appointment Scheduling",
      challenge: "A healthcare startup needed to validate a new booking system concept before seeking seed funding.",
      approach: "We focused on the core scheduling functionality, using AI to generate the UI and API endpoints quickly.",
      results: "The functional MVP allowed the team to demonstrate the concept to potential investors and gather user feedback.",
      metrics: "Secured $250K in seed funding based on the MVP demonstration.",
      image: "gradient-2"
    },
    {
      id: 3,
      title: "Content Creator Analytics Platform",
      challenge: "A solo entrepreneur wanted to test a specialized analytics tool for content creators but had limited technical resources.",
      approach: "Using Rabbit MVP, we built a simple but functional analytics dashboard focusing on the unique metrics that mattered to creators.",
      results: "The MVP attracted 50 early users who provided valuable feedback for the next iteration.",
      metrics: "87% of test users expressed willingness to pay for a more polished version.",
      image: "gradient-3"
    }
  ];

  const nextCase = () => {
    setActiveStudy((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setActiveStudy((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-chakra font-bold mb-6 text-gray-900">Case Studies</h2>
          <p className="text-xl text-gray-600">
            Real examples of successful MVP development using our methodology.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-chakra font-bold mb-6 text-gray-900">
                  {caseStudies[activeStudy].title}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-chakra font-semibold text-rabbit-purple mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudies[activeStudy].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-chakra font-semibold text-rabbit-purple mb-2">Approach</h4>
                    <p className="text-gray-600">{caseStudies[activeStudy].approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-chakra font-semibold text-rabbit-purple mb-2">Results</h4>
                    <p className="text-gray-600">{caseStudies[activeStudy].results}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xl font-chakra font-bold text-rabbit-purple">
                      {caseStudies[activeStudy].metrics}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white border-2 border-rabbit-purple flex items-center justify-center">
                  <span className="font-chakra font-bold text-4xl text-gray-900">7 Days</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevCase}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} /> Previous
            </button>
            
            <div className="flex gap-2">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveStudy(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStudy === index 
                      ? 'bg-rabbit-purple w-4' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Case study ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCase}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Next <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
