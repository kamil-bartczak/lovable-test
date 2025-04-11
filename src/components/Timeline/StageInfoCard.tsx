import React, { useState } from "react";
import { Clock, Check, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stage } from "./types";
import styles from "@/styles/timeline.module.css";
import StageGuideModal from "./StageGuideModal";

interface StageInfoCardProps {
  stage: Stage;
}

const StageInfoCard: React.FC<StageInfoCardProps> = ({ stage }) => {
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false);
  
  // Get the current stage's CSS variables
  const stageColorVars = {
    '--stage-color-1': stage.colorStart || '#64748b',
    '--stage-color-2': stage.colorEnd || '#475569',
  } as React.CSSProperties;

  const getStageResult = (stageId: number) => {
    switch (stageId) {
      case 1: return "Defined business hypothesis and validation plan.";
      case 2: return "Validated hypotheses and defined MVP functional scope.";
      case 3: return "Complete MVP design ready for implementation.";
      case 4: return "Working product foundation with core functionality.";
      case 5: return "Complete no-code/low-code MVP ready for user testing.";
      case 6: return "Validated and refined MVP ready for launch.";
      case 7: return "Live product, initial data, and next steps decision.";
      default: return "";
    }
  };

  const getStageGoal = (stageId: number) => {
    switch (stageId) {
      case 1: return "Define and validate your business hypothesis.";
      case 2: return "Validate business hypotheses with potential customers.";
      case 3: return "Design your solution and MVP architecture.";
      case 4: return "Implement core functionality using no-code/low-code solutions.";
      case 5: return "Expand features with minimal coding and prepare for testing.";
      case 6: return "Test with real users and make rapid improvements.";
      case 7: return "Launch your MVP and collect data for the next iteration.";
      default: return "";
    }
  };

  const handleGuideButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGuideModalOpen(true);
  };

  return (
    <>
      <Card 
        className={`col-span-1 shadow-md transition-all duration-300 ${styles['stage-card']}`}
        style={stageColorVars}
      >
        <CardHeader className="pb-4 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500`}
              style={{ background: `linear-gradient(90deg, ${stage.colorStart}20, ${stage.colorEnd}30)` }}
            >
              <div className={`${stage.color}`}>
                {stage.icon}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})`,
                    color: 'white'
                  }}
                >
                  Stage {stage.id} of 7
                </span>
                {stage.duration && (
                  <span className="text-xs flex items-center gap-1 text-gray-500">
                    <Clock size={12} />
                    {stage.duration}
                  </span>
                )}
              </div>
              <CardTitle className="text-2xl font-chakra text-gray-900">{stage.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-5 space-y-5">
          <div>
            <p className="text-gray-600 leading-relaxed">{stage.description}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Goal</h4>
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-md">
              <span className="mt-0.5 text-gray-400"><ArrowRight size={16} /></span>
              <p className="text-gray-700">{getStageGoal(stage.id)}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Outcome</h4>
            <div 
              className="p-4 rounded-md flex items-start gap-3"
              style={{ 
                background: `linear-gradient(90deg, ${stage.colorStart}10, ${stage.colorEnd}20)`,
                border: `1px solid ${stage.colorStart}30`
              }}
            >
              <div 
                className="p-1 rounded-full mt-0.5"
                style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
              >
                <Check size={14} className="text-white" />
              </div>
              <p 
                className="font-medium"
                style={{ color: stage.colorStart }}
              >
                {stage.keyOutcome || getStageResult(stage.id)}
              </p>
            </div>
          </div>
          
          <div className="pt-3 relative z-10">
            <button 
              className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow-sm transition-colors w-full justify-center hover:opacity-90 active:opacity-80"
              style={{ 
                background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})`,
                position: 'relative',
                zIndex: 5
              }}
              onClick={handleGuideButtonClick}
              type="button"
            >
              <span>Read Full Guide</span>
              <BookOpen size={14} />
            </button>
          </div>
        </CardContent>
      </Card>
      
      {isGuideModalOpen && (
        <StageGuideModal 
          stage={stage} 
          onClose={() => setIsGuideModalOpen(false)} 
        />
      )}
    </>
  );
};

export default StageInfoCard; 