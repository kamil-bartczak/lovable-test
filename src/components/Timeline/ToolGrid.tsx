import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Stage, Tool } from "./types";
import ToolCard from "./ToolCard";
import ToolsModal from "./ToolsModal";

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
  const [showMoreModal, setShowMoreModal] = useState<boolean>(false);
  
  // Only get featured tools for the main view - no filtering on main page
  const featuredTools = stage.tools.filter(tool => tool.isFeatured);
  
  // Count non-featured tools
  const nonFeaturedCount = stage.tools.filter(tool => !tool.isFeatured).length;

  if (featuredTools.length === 0) {
    return (
      <div className="col-span-full p-8 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-500">No featured tools available for this stage.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {featuredTools.map((tool) => (
          <ToolCard 
            key={tool.id}
            tool={tool}
            stage={stage}
            onClick={() => setActiveTool(tool)}
          />
        ))}
      </div>
      
      {nonFeaturedCount > 0 && (
        <button
          className="mt-6 w-full py-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-700"
          onClick={() => setShowMoreModal(true)}
        >
          <span>Show {nonFeaturedCount} more tools</span>
          <ChevronDown size={16} />
        </button>
      )}
      
      {/* Tools Modal with Filtering */}
      {showMoreModal && (
        <ToolsModal
          stage={stage}
          tools={stage.tools}
          onClose={() => setShowMoreModal(false)}
          setActiveTool={setActiveTool}
        />
      )}
    </div>
  );
};

export default ToolGrid; 