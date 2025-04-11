import React, { useState, useEffect } from "react";
import { X, Search, Filter, Wrench } from "lucide-react";
import { Stage, Tool } from "./types";
import ToolCard from "./ToolCard";

interface ToolsModalProps {
  stage: Stage;
  tools: Tool[];
  onClose: () => void;
  setActiveTool: (tool: Tool) => void;
}

const ToolsModal: React.FC<ToolsModalProps> = ({
  stage,
  tools,
  onClose,
  setActiveTool,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    // Save original body overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Disable scrolling on body
    document.body.style.overflow = 'hidden';
    
    // Restore original overflow style when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Filter tools based on active category and search query
  const filteredTools = tools.filter(tool => {
    // Filter by category if active
    const categoryMatch = activeCategory ? tool.category === activeCategory : true;
    
    // Filter by search query if present
    const searchMatch = searchQuery 
      ? tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl h-[80vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wrench 
              size={18} 
              className="text-white p-1 rounded-full"
              style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}  
            />
            <h3 className="text-xl font-medium">All Tools</h3>
            <span className="text-sm text-gray-500 ml-2">({tools.length} total)</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Filters Section */}
        <div className="p-4 border-b">
          {/* Search bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tools by name or description..."
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              className={`text-sm flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors border`}
              style={{
                borderColor: activeCategory ? '#e5e7eb' : 'transparent',
                color: activeCategory ? '#4b5563' : 'white',
                background: activeCategory ? 
                  'transparent' : 
                  `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})`
              }}
              onClick={() => setActiveCategory(null)}
            >
              <Filter size={14} />
              <span>All Tools</span>
            </button>
            
            {stage.categories.map((category) => (
              <button
                key={category.id}
                className={`text-sm flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors border`}
                style={{
                  borderColor: activeCategory === category.id ? 'transparent' : '#e5e7eb',
                  color: activeCategory === category.id ? 'white' : '#4b5563',
                  background: activeCategory === category.id ? 
                    `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` : 
                    'transparent'
                }}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tools Grid */}
        <div className="p-4 overflow-y-auto flex-grow">
          {filteredTools.length === 0 ? (
            <div className="col-span-full p-8 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-500">No tools match your current filters. Try adjusting your search or category filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard 
                  key={tool.id}
                  tool={tool}
                  stage={stage}
                  onClick={() => {
                    setActiveTool(tool);
                    onClose();
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsModal; 