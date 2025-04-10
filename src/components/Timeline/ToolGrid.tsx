import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Stage, Tool } from "./types";
import ToolCard from "./ToolCard";

interface ToolGridProps {
  stage: Stage;
  activeCategory: number | null;
  setActiveCategory: (id: number | null) => void;
  setActiveTool: (tool: Tool) => void;
  searchQuery: string;
}

const ToolGrid: React.FC<ToolGridProps> = ({ 
  stage, 
  activeCategory, 
  setActiveCategory, 
  setActiveTool,
  searchQuery
}) => {
  const [showAllTools, setShowAllTools] = useState<boolean>(false);
  
  // Filter tools based on active category and search query
  const filteredTools = stage.tools.filter(tool => {
    // Filter by category if active
    const categoryMatch = activeCategory ? tool.category === activeCategory : true;
    
    // Filter by search query if present
    const searchMatch = searchQuery 
      ? tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return categoryMatch && searchMatch;
  });

  // Limited display tools - show only first 4
  const displayTools = showAllTools 
    ? filteredTools 
    : filteredTools.slice(0, 4);

  if (filteredTools.length === 0) {
    return (
      <div className="col-span-full p-8 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-500">No tools match your current filters. Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {displayTools.map((tool) => (
          <ToolCard 
            key={tool.id}
            tool={tool}
            stage={stage}
            onClick={() => setActiveTool(tool)}
          />
        ))}
      </div>
      
      {filteredTools.length > 4 && !showAllTools && (
        <button
          className="mt-6 w-full py-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-700"
          onClick={() => setShowAllTools(true)}
        >
          <span>Show {filteredTools.length - 4} more tools</span>
          <ChevronDown size={16} />
        </button>
      )}
      
      {showAllTools && filteredTools.length > 4 && (
        <button
          className="mt-6 w-full py-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-700"
          onClick={() => setShowAllTools(false)}
        >
          <span>Show fewer tools</span>
        </button>
      )}
    </div>
  );
};

export default ToolGrid; 