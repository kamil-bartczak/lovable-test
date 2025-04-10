import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tool, Stage } from "./types";
import styles from "@/styles/timeline.module.css";

interface ToolCardProps {
  tool: Tool;
  stage: Stage;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, stage, onClick }) => {
  const category = stage.categories.find(c => c.id === tool.category);
  
  return (
    <Card 
      key={tool.id}
      className={`border-none shadow-sm hover:shadow transition-all duration-300 cursor-pointer relative overflow-hidden ${styles['tool-card']}`}
      onClick={onClick}
    >
      {/* Category indicator */}
      <div 
        className={`absolute top-0 left-0 w-1 h-full`}
        style={{ 
          backgroundColor: category ? category.color.split(' ')[0].replace('bg', 'rgb') : 'transparent',
          opacity: 0.7
        }}
      ></div>
      
      <CardHeader className="pb-2 pl-5">
        <CardTitle className="text-base font-medium flex justify-between items-start">
          <span>{tool.name}</span>
        </CardTitle>
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
      <CardFooter className="pt-0 flex justify-end">
        <div className="flex items-center gap-1 text-sm font-medium" 
          style={{ color: stage.color.replace('text', 'bg').includes('slate') 
            ? '#475569' : stage.colorEnd }}
        >
          <span>View details</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToolCard; 