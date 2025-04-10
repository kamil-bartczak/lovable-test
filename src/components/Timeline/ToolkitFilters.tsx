import React from "react";
import { Filter, Search, Wrench } from "lucide-react";
import { Stage } from "./types";

interface ToolkitFiltersProps {
  stage: Stage;
  activeCategory: number | null;
  setActiveCategory: (id: number | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ToolkitFilters: React.FC<ToolkitFiltersProps> = ({
  stage,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}) => {
  return (
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
      </div>
      
      {/* Search bar */}
      <div className="relative">
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
      <div className="flex flex-wrap gap-2 mt-2">
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
  );
};

export default ToolkitFilters; 