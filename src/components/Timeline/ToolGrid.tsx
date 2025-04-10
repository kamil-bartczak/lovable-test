import React from "react";
import { Wrench, Filter } from "lucide-react";
import { Stage, Tool } from "./types";
import ToolCard from "./ToolCard";

interface ToolGridProps {
  stage: Stage;
  activeCategory: number | null;
  setActiveCategory: (id: number | null) => void;
  setActiveTool: (tool: Tool) => void;
}

const ToolGrid: React.FC<ToolGridProps> = ({ 
  stage, 
  activeCategory, 
  setActiveCategory, 
  setActiveTool 
}) => {
  // Filter tools based on active category
  const filteredTools = stage.tools.filter(tool => {
    if (activeCategory) {
      return tool.category === activeCategory;
    }
    return true;
  });

  return (
    <div className="col-span-1 lg:col-span-2 space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wrench 
              size={18} 
              className="text-white p-1 rounded-full"
              style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}  
            />
            <h3 className="text-xl font-medium text-gray-900">Available Tools</h3>
            <span className="text-sm text-gray-500 ml-2">({stage.tools.length} total)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className="text-sm flex items-center gap-1 px-3 py-1 rounded-full transition-colors border"
              style={{
                borderColor: activeCategory ? 'transparent' : '#e5e7eb',
                color: activeCategory ? 'white' : '#4b5563',
                background: activeCategory ? 
                  `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` : 
                  'transparent'
              }}
              onClick={() => setActiveCategory(null)}
            >
              <Filter size={14} />
              <span>All Tools</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {filteredTools.map((tool) => (
          <ToolCard 
            key={tool.id}
            tool={tool}
            stage={stage}
            onClick={() => setActiveTool(tool)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolGrid; 