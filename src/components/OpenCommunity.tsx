
import { Users, GitPullRequest, Share2 } from "lucide-react";

const OpenCommunity = () => {
  return (
    <section className="py-12 bg-indigo-50 relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-75 animate-pulse"
        style={{ animationDuration: '3s' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800 inline-block relative">
            Open Community Approach
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-purple-600 transform -translate-x-1/2"></span>
          </h2>
          
          <p className="text-xl text-indigo-700 mb-10 max-w-3xl mx-auto">
            We believe in the power of collaboration and shared knowledge. 
            Rabbit MVP is built with and for the community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <Users size={42} />
              </div>
              <h3 className="text-xl font-medium mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Shaped by real-world insights from founders and developers who understand the challenges.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <GitPullRequest size={42} />
              </div>
              <h3 className="text-xl font-medium mb-3">Open Source Tools</h3>
              <p className="text-gray-600">
                Leveraging and contributing to the best open source tools for rapid MVP development.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 mb-4 flex justify-center">
                <Share2 size={42} />
              </div>
              <h3 className="text-xl font-medium mb-3">Shared Knowledge</h3>
              <p className="text-gray-600">
                Collective wisdom and experience freely shared to accelerate everyone's path to success.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-75 animate-pulse"
        style={{ animationDuration: '3s' }}
      />
    </section>
  );
};

export default OpenCommunity;
