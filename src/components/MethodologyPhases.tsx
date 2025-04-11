import React from 'react';

const MethodologyPhases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">The Rabbit MVP Journey</h2>
          <p className="text-xl text-gray-600">
            A complete innovation process centered around our core 7-day Rabbit MVP methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pre-Rabbit Phase */}
          <div className="group relative">
            <div className="absolute inset-0 bg-white rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-sm"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                  01
                </div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Pre-Rabbit
                </h3>
              </div>
              <div className="text-sm text-gray-500 mb-4">Coming soon</div>
              <p className="text-gray-600 mb-6">
                When you have multiple ideas and need to identify the most promising one for Rabbit MVP.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                  <span>Idea generation</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                  <span>Initial validation</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                  <span>Concept selection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Rabbit MVP Phase - Highlighted */}
          <div className="group relative md:col-span-1">
            <div className="absolute inset-0 bg-purple-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-xl"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-white text-purple-600 flex items-center justify-center font-bold text-lg mr-4">
                  02
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Rabbit MVP
                </h3>
              </div>
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium">
                  Core
                </div>
              </div>
              <p className="text-white mb-6">
                When you have a validated idea and need to create a working MVP in just 7 days.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 rounded-full bg-white mr-3"></span>
                  <span>7-steps structured process</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 rounded-full bg-white mr-3"></span>
                  <span>AI-powered development</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 rounded-full bg-white mr-3"></span>
                  <span>Rapid validation</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="w-2 h-2 rounded-full bg-white mr-3"></span>
                  <span>Business metrics focus</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Post-Rabbit Phase */}
          <div className="group relative">
            <div className="absolute inset-0 bg-white rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-sm"></div>
            <div className="relative p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-400 flex items-center justify-center text-white font-bold text-lg mr-4">
                  03
                </div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Post-Rabbit
                </h3>
              </div>
              <div className="text-sm text-gray-500 mb-4">Coming soon</div>
              <p className="text-gray-600 mb-6">
                When your MVP is ready and you need to decide on the next steps.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                  <span>Strategic decisions</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                  <span>Growth planning</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                  <span>Knowledge transfer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyPhases; 