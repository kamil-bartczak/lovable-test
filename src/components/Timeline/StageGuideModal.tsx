import React, { useState } from "react";
import { X, Clock, Check, ArrowRight, Lightbulb, List, BookOpen, AlertCircle, Sparkles, Puzzle, Award, Activity, PanelRight, Compass } from "lucide-react";
import { Stage } from "./types";
import styles from "@/styles/timeline.module.css";
import { useScrollLock } from "@/hooks/use-scroll-lock";

interface StageGuideModalProps {
  stage: Stage;
  onClose: () => void;
}

const StageGuideModal: React.FC<StageGuideModalProps> = ({ stage, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  // Lock body scroll when modal is open
  useScrollLock(true);
  
  if (!stage.guide) {
    return (
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-all backdrop-blur-sm" 
        onClick={onClose}
      >
        <div 
          className={`bg-white w-full max-w-4xl mx-4 rounded-xl shadow-xl overflow-hidden ${styles['animate-slide-up']}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Guide Coming Soon</h2>
            <p className="text-gray-600">The detailed guide for this stage is being prepared.</p>
            <button
              className="mt-6 py-2 px-6 rounded-lg text-white font-medium"
              style={{ 
                background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` 
              }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: <BookOpen size={16} /> },
    { id: "process", label: "Process", icon: <PanelRight size={16} /> },
    { id: "output", label: "Outputs", icon: <Award size={16} /> },
    { id: "pitfalls", label: "Pitfalls", icon: <AlertCircle size={16} /> },
    { id: "resources", label: "Resources", icon: <Puzzle size={16} /> },
  ];
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-all backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full max-w-6xl mx-4 rounded-xl shadow-xl overflow-hidden ${styles['animate-slide-up']} max-h-[90vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="relative p-6"
          style={{ 
            background: `linear-gradient(135deg, ${stage.colorStart}20, ${stage.colorEnd}40)`,
          }}
        >
          <button 
            className="absolute top-4 right-4 rounded-full p-1.5 bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white/90 transition-colors"
            onClick={onClose}
          >
            <X size={18} />
          </button>
          
          <div className="flex items-start gap-5">
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: `linear-gradient(135deg, ${stage.colorStart}, ${stage.colorEnd})`,
                boxShadow: `0 10px 15px -3px ${stage.colorStart}30`
              }}
            >
              <div className="text-white">
                {stage.icon}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})`,
                    color: 'white'
                  }}
                >
                  Stage {stage.id} of 7
                </span>
                {stage.duration && (
                  <span className="text-xs flex items-center gap-1 text-gray-500">
                    <Clock size={12} />
                    {stage.duration}
                  </span>
                )}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">
                {stage.title}
              </h2>
              
              <p className="text-gray-600 mt-2">
                {stage.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all relative ${
                activeTab === tab.id 
                  ? 'text-gray-900 border-b-2 -mb-px'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
              style={{ 
                borderColor: activeTab === tab.id ? stage.colorStart : 'transparent'
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <Compass size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Stage Overview</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{stage.guide.overview}</p>
              </div>
              
              <div>
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <Lightbulb size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Key Objectives</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stage.guide.keyObjectives.map((objective, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div 
                        className="p-1 rounded-full mt-1 flex-shrink-0"
                        style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                      >
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <Activity size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Key Expertise Required</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {stage.guide.keyExpertise.map((expertise, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 rounded-full text-sm font-medium"
                      style={{ 
                        background: `linear-gradient(90deg, ${stage.colorStart}20, ${stage.colorEnd}30)`,
                        color: stage.colorStart
                      }}
                    >
                      {expertise}
                    </span>
                  ))}
                </div>
              </div>
              
              {stage.guide.transitionToNext && (
                <div 
                  className="p-4 rounded-lg border border-gray-100"
                  style={{ 
                    background: `linear-gradient(90deg, ${stage.colorStart}10, ${stage.colorEnd}20)`,
                  }}
                >
                  <div className="flex gap-3 items-center mb-2">
                    <div 
                      className="p-1.5 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                    >
                      <ArrowRight size={18} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">Next Step</h4>
                  </div>
                  <p className="text-gray-700">{stage.guide.transitionToNext}</p>
                </div>
              )}
            </div>
          )}
          
          {/* Process */}
          {activeTab === "process" && (
            <div>
              <div className="mb-6">
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <PanelRight size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Process Steps</h3>
                </div>
                <p className="text-gray-600">Follow these steps to complete the {stage.title} stage effectively.</p>
              </div>
              
              <div className="space-y-6">
                {stage.guide.process.map((step, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4"
                      style={{ 
                        background: `linear-gradient(90deg, ${stage.colorStart}10, ${stage.colorEnd}20)`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                        >
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-gray-900">{step.name}</h4>
                      </div>
                      <span className="text-sm text-gray-500 flex items-center gap-1.5">
                        <Clock size={14} />
                        {step.duration}
                      </span>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Output */}
          {activeTab === "output" && (
            <div>
              <div className="mb-6">
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <Award size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Stage Outputs</h3>
                </div>
                <p className="text-gray-600">By the end of this stage, you should have produced these deliverables:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stage.guide.stageOutput.map((output, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border border-gray-200"
                  >
                    <div 
                      className="p-1.5 rounded-full mt-0.5 flex-shrink-0"
                      style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                    >
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{output}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Pitfalls */}
          {activeTab === "pitfalls" && (
            <div>
              <div className="mb-6">
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <AlertCircle size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Common Pitfalls</h3>
                </div>
                <p className="text-gray-600">Watch out for these common mistakes when working through this stage:</p>
              </div>
              
              <div className="space-y-4">
                {stage.guide.commonPitfalls.map((pitfall, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <div 
                      className="p-1 rounded-full mt-1 flex-shrink-0 bg-amber-500"
                    >
                      <AlertCircle size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{pitfall}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Resources */}
          {activeTab === "resources" && (
            <div>
              <div className="mb-6">
                <div className="flex gap-3 items-center mb-4">
                  <div 
                    className="p-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                  >
                    <Puzzle size={18} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Helpful Resources</h3>
                </div>
                <p className="text-gray-600">Use these resources to help you complete this stage successfully:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stage.guide.resources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <div 
                      className="p-1.5 rounded-full mt-0.5 flex-shrink-0"
                      style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                    >
                      {resource.type === 'article' && <BookOpen size={14} className="text-white" />}
                      {resource.type === 'video' && <Activity size={14} className="text-white" />}
                      {resource.type === 'template' && <List size={14} className="text-white" />}
                      {resource.type === 'tool' && <Puzzle size={14} className="text-white" />}
                      {resource.type === 'documentation' && <BookOpen size={14} className="text-white" />}
                    </div>
                    <div>
                      <span className="text-gray-900 font-medium">{resource.title}</span>
                      {resource.type && (
                        <span 
                          className="ml-2 text-xs px-2 py-0.5 rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${stage.colorStart}20, ${stage.colorEnd}30)`,
                            color: stage.colorStart
                          }}
                        >
                          {resource.type}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-sm font-medium">Rabbit MVP Exclusive Guide</span>
          </div>
          <button
            className="py-2.5 px-6 rounded-lg text-white font-medium"
            style={{ 
              background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` 
            }}
            onClick={onClose}
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageGuideModal; 