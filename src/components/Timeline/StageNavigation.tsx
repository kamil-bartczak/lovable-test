import React, { useRef, useEffect } from "react";
import { Stage } from "./types";
import styles from "@/styles/timeline.module.css";

interface StageNavigationProps {
  stages: Stage[];
  activeStageId: string;
  setActiveStageId: (id: string) => void;
}

const StageNavigation: React.FC<StageNavigationProps> = ({ 
  stages, 
  activeStageId, 
  setActiveStageId 
}) => {
  const stagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stagesContainerRef.current) {
      const activeIndex = parseInt(activeStageId) - 1;
      const stageElements = stagesContainerRef.current.querySelectorAll('.stage-item');
      if (stageElements[activeIndex]) {
        const stageElement = stageElements[activeIndex] as HTMLElement;
        const containerWidth = stagesContainerRef.current.offsetWidth;
        const stageLeft = stageElement.offsetLeft;
        const stageWidth = stageElement.offsetWidth;
        
        stagesContainerRef.current.scrollTo({
          left: stageLeft - (containerWidth / 2) + (stageWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeStageId]);

  const scrollStages = (direction: 'left' | 'right', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (stagesContainerRef.current) {
      const container = stagesContainerRef.current;
      const scrollAmount = container.clientWidth / 2;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto mb-20">
      <div className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-gray-200 z-0"></div>
      
      {/* Timeline Steps */}
      <div 
        ref={stagesContainerRef}
        className={`flex items-start justify-center gap-8 relative z-10 overflow-x-auto pt-0 pb-8 ${styles['hide-scrollbar']}`}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {stages.map((stage) => (
          <div 
            key={stage.id}
            className={`stage-item flex-shrink-0 scroll-snap-align-center ${styles['stage-item']}`}
            style={{ scrollSnapAlign: 'center' }}
          >
            <div 
              className={`flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105`}
              onClick={() => setActiveStageId(stage.id.toString())}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center 
                ${activeStageId === stage.id.toString() 
                  ? 'bg-white shadow-lg' 
                  : 'bg-gray-100 border border-gray-200'}
                transition-all duration-300 relative`}
              >
                {activeStageId === stage.id.toString() && (
                  <div className="absolute inset-0 rounded-full border-4 border-transparent" 
                    style={{
                      background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd}) border-box`,
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'destination-out',
                      maskComposite: 'exclude',
                      animation: 'border-pulse 2s infinite'
                    }}
                  />
                )}
                <div className={`${stage.color} ${activeStageId === stage.id.toString() ? 'opacity-100 scale-110 transform transition-all duration-300' : 'opacity-60'}`}>
                  {stage.icon}
                </div>
              </div>
              <div className="mt-5 flex flex-col items-center">
                <span className={`text-sm font-semibold ${activeStageId === stage.id.toString() ? 'text-slate-900' : 'text-slate-500'}`}>
                  Step {stage.id}
                </span>
                <span className={`text-xs mt-1 max-w-[120px] text-center truncate ${activeStageId === stage.id.toString() ? stage.color : 'text-slate-400'}`}>
                  {stage.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StageNavigation; 