import React from "react";
import { X, Check, ExternalLink, Tag, Link2, BookOpen, Zap, Download, Star, BrainCircuit, Clock, AlertTriangle } from "lucide-react";
import { Tool, Stage } from "./types";
import styles from "@/styles/timeline.module.css";
import { useScrollLock } from "@/hooks/use-scroll-lock";

interface ToolDetailProps {
  tool: Tool;
  currentStage: Stage;
  expandedDescription: boolean;
  setExpandedDescription: (expanded: boolean) => void;
  onClose: () => void;
}

const ToolDetail: React.FC<ToolDetailProps> = ({ 
  tool, 
  currentStage, 
  expandedDescription, 
  setExpandedDescription, 
  onClose 
}) => {
  // Lock body scroll when modal is open
  useScrollLock(true);
  
  // Find the category for this tool
  const category = currentStage.categories.find(c => c.id === tool.category);
  
  // Function to get difficulty text
  const getDifficultyText = (difficulty?: string) => {
    switch(difficulty) {
      case 'beginner': return 'Beginner - Easy to implement';
      case 'intermediate': return 'Intermediate - Some experience helpful';
      case 'advanced': return 'Advanced - Technical knowledge required';
      default: return 'All levels';
    }
  };
  
  // Function to get difficulty color
  const getDifficultyColor = (difficulty?: string) => {
    switch(difficulty) {
      case 'beginner': return 'text-green-600';
      case 'intermediate': return 'text-yellow-600';
      case 'advanced': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex justify-end transition-all backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full max-w-md h-full shadow-xl overflow-y-auto ${styles['animate-slide-in-right']}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tool header with gradient background */}
        <div 
          className="p-6 relative"
          style={{ 
            background: `linear-gradient(135deg, ${currentStage.colorStart}20, ${currentStage.colorEnd}40)`,
          }}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 rounded-full p-1.5 bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white/90 transition-colors"
            onClick={onClose}
          >
            <X size={18} />
          </button>
          
          <div className="flex items-start gap-4">
            <div 
              className="p-3 rounded-lg"
              style={{ 
                background: `linear-gradient(135deg, ${currentStage.colorStart}, ${currentStage.colorEnd})`,
                boxShadow: `0 10px 15px -3px ${currentStage.colorStart}30`
              }}
            >
              <div className="text-white">
                {tool.icon}
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {/* Tool badges */}
                {tool.isFeatured && (
                  <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                    <Star size={12} className="mr-0.5" />
                    Rabbit Exclusive
                  </span>
                )}
                
                {tool.type === 'ai' && (
                  <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                    <BrainCircuit size={12} className="mr-0.5" />
                    AI-Powered
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900">
                {tool.name}
              </h3>
              
              <div className="flex items-center gap-3 mt-2">
                {category && (
                  <span 
                    className={`${category.color} inline-flex items-center text-xs px-2 py-1 rounded-full`}
                  >
                    {category.icon}
                    <span className="ml-1">{category.name}</span>
                  </span>
                )}
                
                {tool.duration && (
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock size={12} className="mr-1" />
                    {tool.duration}
                  </span>
                )}
                
                {tool.difficulty && (
                  <span className={`text-xs flex items-center ${getDifficultyColor(tool.difficulty)}`}>
                    <AlertTriangle size={12} className="mr-1" />
                    {tool.difficulty.charAt(0).toUpperCase() + tool.difficulty.slice(1)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tool content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700">
              {tool.longDescription || tool.description}
            </p>
            
            <button 
              className={`text-sm flex items-center gap-1 mt-4 font-medium transition-colors`}
              style={{ color: currentStage.colorStart }}
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? 
                <span className="flex items-center">Show less</span> : 
                <span className="flex items-center">Show more details</span>
              }
            </button>
          </div>
          
          {/* Detailed Content - conditionally visible */}
          <div className={expandedDescription ? 'space-y-8' : 'hidden'}>
            {/* Tool Info Card */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-3 text-gray-500 uppercase tracking-wide">Tool Information</h4>
              
              <div className="space-y-3">
                {tool.difficulty && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className={getDifficultyColor(tool.difficulty)}>{getDifficultyText(tool.difficulty)}</span>
                  </div>
                )}
                
                {tool.type && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="text-gray-900">{tool.type.charAt(0).toUpperCase() + tool.type.slice(1)}</span>
                  </div>
                )}
                
                {tool.duration && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Estimated time:</span>
                    <span className="text-gray-900">{tool.duration}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Benefits Section */}
            {tool.benefits && tool.benefits.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-3 text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  Key Benefits
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {tool.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div 
                        className="p-0.5 rounded-full mt-0.5"
                        style={{ background: `linear-gradient(90deg, ${currentStage.colorStart}, ${currentStage.colorEnd})` }}
                      >
                        <Check size={10} className="text-white" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* How To Use Section */}
            {tool.howTo && tool.howTo.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-3 text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  How To Use
                </h4>
                <ol className="space-y-3 text-gray-700 list-none pl-0">
                  {tool.howTo.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                      <div 
                        className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium text-white shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(90deg, ${currentStage.colorStart}, ${currentStage.colorEnd})` }}
                      >
                        {index + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            
            {/* Resources Section */}
            {tool.resources && tool.resources.length > 0 && (
              <div>
                <h4 className="text-sm font-medium mb-3 text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  Resources
                </h4>
                <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                  {tool.resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div 
                        className="p-1 rounded text-white"
                        style={{ background: `linear-gradient(90deg, ${currentStage.colorStart}, ${currentStage.colorEnd})` }}
                      >
                        {resource.type === 'video' ? <BookOpen size={12} /> : 
                         resource.type === 'template' ? <Download size={12} /> :
                         <Link2 size={12} />}
                      </div>
                      <a 
                        href={resource.url}
                        className="text-sm inline-flex items-center gap-1 font-medium transition-colors"
                        style={{ color: currentStage.colorStart }}
                        rel="noopener noreferrer"
                      >
                        {resource.title}
                        <ExternalLink size={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3 mt-8">
            <a 
              href={tool.link}
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg shadow transition-colors flex-1 justify-center"
              style={{ 
                background: `linear-gradient(90deg, ${currentStage.colorStart || '#64748b'}, ${currentStage.colorEnd || '#475569'})` 
              }}
              rel="noopener noreferrer"
            >
              <span>View Documentation</span>
              <ExternalLink size={16} />
            </a>
            
            <button 
              className="inline-flex items-center gap-2 border border-gray-200 bg-white px-3 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail; 