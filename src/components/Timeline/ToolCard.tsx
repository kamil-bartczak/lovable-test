import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Clock, Zap, Star } from "lucide-react";
import { Tool, Stage } from "./types";
import styles from "@/styles/timeline.module.css";

interface ToolCardProps {
  tool: Tool;
  stage: Stage;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, stage, onClick }) => {
  const category = stage.categories.find(c => c.id === tool.category);
  
  // Function to get difficulty level indicator
  const getDifficultyIndicator = (difficulty?: string) => {
    switch(difficulty) {
      case 'beginner':
        return <div className="flex items-center"><span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-0.5"></span><span className="h-1.5 w-1.5 bg-gray-200 rounded-full mr-0.5"></span><span className="h-1.5 w-1.5 bg-gray-200 rounded-full"></span></div>;
      case 'intermediate':
        return <div className="flex items-center"><span className="h-1.5 w-1.5 bg-yellow-500 rounded-full mr-0.5"></span><span className="h-1.5 w-1.5 bg-yellow-500 rounded-full mr-0.5"></span><span className="h-1.5 w-1.5 bg-gray-200 rounded-full"></span></div>;
      case 'advanced':
        return <div className="flex items-center"><span className="h-1.5 w-1.5 bg-red-500 rounded-full mr-0.5"></span><span className="h-1.5 w-1.5 bg-red-500 rounded-full mr-0.5"></span><span className="h-1.5 w-1.5 bg-red-500 rounded-full"></span></div>;
      default:
        return null;
    }
  };
  
  return (
    <Card 
      key={tool.id}
      className={`border-none shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden group ${styles['tool-card']}`}
      onClick={onClick}
      style={{ 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }}
    >
      {/* Hover effect using stage colors */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ 
          background: `linear-gradient(135deg, ${stage.colorStart}, ${stage.colorEnd})` 
        }}
      ></div>
      
      {/* Category indicator */}
      <div 
        className={`absolute top-0 left-0 w-1 h-full`}
        style={{ 
          backgroundColor: category ? category.color.split(' ')[0].replace('bg', 'rgb') : 'transparent',
          opacity: 0.7
        }}
      ></div>
      
      <CardHeader className="pb-2 pl-5">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-medium">
            {tool.name}
          </CardTitle>
          <div className="text-gray-400">
            {tool.icon}
          </div>
        </div>
        
        <div className="flex items-center gap-1 mt-1">
          {category && (
            <span 
              className={`${category.color} inline-flex items-center text-[10px] px-1.5 py-0.5 rounded`}
            >
              {category.icon}
              <span className="ml-1">{category.name}</span>
            </span>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="py-1">
        <p className="text-gray-600 text-sm line-clamp-2">{tool.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Tool badges */}
          {tool.isFeatured && (
            <span className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">
              <Star size={10} className="mr-0.5" />
              Rabbit
            </span>
          )}
          
          {tool.type === 'ai' && (
            <span className="inline-flex items-center text-[10px] px-1.5 py-0.5 rounded bg-purple-100 text-purple-700">
              <BrainCircuit size={10} className="mr-0.5" />
              AI
            </span>
          )}
          
          {/* Difficulty level */}
          {tool.difficulty && getDifficultyIndicator(tool.difficulty)}
          
          {/* Duration */}
          {tool.duration && (
            <span className="text-[10px] text-gray-500 flex items-center">
              <Clock size={10} className="mr-0.5" />
              {tool.duration}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1 text-xs font-medium" 
          style={{ color: stage.colorStart }}
        >
          <Zap size={14} className="opacity-70" />
          <span>View Tool</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToolCard; 