
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
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rabbit-purple/5 to-rabbit-dark pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text-purple">Case Studies</h2>
          <p className="text-xl text-gray-300">
            See how companies and entrepreneurs have leveraged Rabbit MVP 
            to validate ideas, build products, and achieve results quickly.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Case study display */}
          <div className={`glass p-8 rounded-xl overflow-hidden relative ${caseStudies[activeStudy].image === 'gradient-1' ? 'bg-gradient-to-br from-rabbit-turquoise/10 to-transparent' : caseStudies[activeStudy].image === 'gradient-2' ? 'bg-gradient-to-br from-rabbit-purple/10 to-transparent' : 'bg-gradient-to-br from-rabbit-orange/10 to-transparent'}`}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{caseStudies[activeStudy].title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-rabbit-turquoise font-semibold mb-1">Challenge:</h4>
                  <p className="text-gray-300">{caseStudies[activeStudy].challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-rabbit-purple font-semibold mb-1">Approach:</h4>
                  <p className="text-gray-300">{caseStudies[activeStudy].approach}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-rabbit-orange font-semibold mb-1">Results:</h4>
                  <p className="text-gray-300">{caseStudies[activeStudy].results}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-1">Key Metric:</h4>
                  <p className="text-xl font-bold text-rabbit-turquoise">{caseStudies[activeStudy].metrics}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rabbit-turquoise via-rabbit-purple to-rabbit-orange flex items-center justify-center text-white font-bold text-2xl">
                  7 days
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevCase}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} /> Previous
            </button>
            
            <div className="flex gap-2">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveStudy(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeStudy === index ? 'bg-rabbit-turquoise' : 'bg-gray-600'
                  }`}
                  aria-label={`Case study ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCase}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
