import React from "react";
import { X, Check, ExternalLink, Tag, Link2, BookOpen, Zap, Download } from "lucide-react";
import { Tool, Stage } from "./types";

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
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end transition-all">
      <div 
        className="bg-white w-full max-w-md shadow-xl p-6 animate-slide-in-right overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <h3 className="text-xl font-medium text-gray-900 flex items-center">
            {tool.name}
          </h3>
          <button 
            className="rounded-full p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="prose max-w-none">
          {/* Tool Category and Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {currentStage.categories
              .filter(category => category.id === tool.category)
              .map(category => (
                <span 
                  key={category.id} 
                  className={`${category.color} inline-flex items-center text-xs px-3 py-1.5 rounded-full`}
                >
                  {category.icon}
                  <span className="ml-1 font-medium">{category.name}</span>
                </span>
              ))
            }
            
            {tool.tags?.map(tag => (
              <span 
                key={tag.id} 
                className={`${tag.color} inline-flex items-center text-xs px-2 py-1 rounded-full`}
              >
                <Tag size={12} className="mr-1" />
                {tag.name}
              </span>
            ))}
          </div>
          
          {/* Description with expandable details */}
          <div>
            <p className="text-gray-700 mb-4">
              {tool.longDescription || tool.description}
            </p>
            
            <button 
              className={`text-sm flex items-center gap-1 mb-6 ${currentStage.color || 'text-slate-600'}`}
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? 
                <span className="flex items-center">Show less</span> : 
                <span className="flex items-center">Show more details</span>
              }
            </button>
          </div>
          
          {/* Detailed Content - conditionally visible */}
          <div className={expandedDescription ? 'block' : 'hidden'}>
            {/* Benefits Section */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-900">
                <Check size={18} 
                  className="text-white p-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${currentStage.colorStart || '#64748b'}, ${currentStage.colorEnd || '#475569'})` }}
                /> 
                Key Benefits
              </h4>
              <ul className="space-y-2 text-gray-700">
                {tool.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1"><Check size={14} /></span>
                    <span>{benefit}</span>
                  </li>
                )) || (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1"><Check size={14} /></span>
                      <span>Streamlines the development process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1"><Check size={14} /></span>
                      <span>Reduces time to validate assumptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1"><Check size={14} /></span>
                      <span>Improves cross-team collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1"><Check size={14} /></span>
                      <span>Prevents common MVP pitfalls</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            {/* How To Use Section */}
            {tool.howTo && tool.howTo.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-900">
                  <Zap size={18} 
                    className="text-white p-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${currentStage.colorStart || '#64748b'}, ${currentStage.colorEnd || '#475569'})` }}
                  /> 
                  How To Use
                </h4>
                <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                  {tool.howTo.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
            
            {/* Resources Section */}
            {tool.resources && tool.resources.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-900">
                  <BookOpen size={18} 
                    className="text-white p-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${currentStage.colorStart || '#64748b'}, ${currentStage.colorEnd || '#475569'})` }}
                  /> 
                  Resources
                </h4>
                <ul className="space-y-3">
                  {tool.resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Link2 size={14} className="text-gray-400" />
                      <a 
                        href={resource.url}
                        className={`text-sm inline-flex items-center gap-1 font-medium transition-colors ${currentStage.color || 'text-slate-600'} hover:opacity-80`}
                        rel="noopener noreferrer"
                      >
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex gap-3 mt-8">
            <a 
              href={tool.link}
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg shadow transition-colors flex-1 justify-center"
              style={{ 
                background: `linear-gradient(90deg, ${currentStage.colorStart || '#64748b'}, ${currentStage.colorEnd || '#475569'})` 
              }}
            >
              <span>View Documentation</span>
              <ExternalLink size={16} />
            </a>
          
            <a 
              href={tool.link}
              className="inline-flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Download size={16} className="text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail; 